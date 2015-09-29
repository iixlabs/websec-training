module.exports = function (router, level) {
  var db = require('../../../db');

  router.all('/'+level+'*', function (req,res,next) {
    res.locals.level = level;
    next();
  });

  router.get('/'+level, function(req, res, next) {
  	res.redirect(level+'/users');
  });

  router.get('/'+level+'/users', function(req, res, next) {
  	db.query("SELECT * FROM csrf_users", function(err, users) {
  		res.render('csrf/'+level+'/user/index', {
  			users: users || []
  		});
  	});
  });

  router.get('/'+level+'/users/edit/:id', function(req, res, next) {
  	db.query("SELECT * FROM csrf_users WHERE user_id = ?", [req.params.id], function(err, user) {
  		if (err) {
  			throw err;
  		} else {
  			if (user) user = user.pop();
  			res.render('csrf/'+level+'/user/edit', {
  				user: user || {}
  			});
  		}
  	});
  });

  router.post('/'+level+'/users/edit/:id', function(req, res, next) {
  	var username = req.body.username || '',
  		acl = req.body.level || 1;
  	db.query("UPDATE csrf_users SET username = ?, user_level = ? WHERE user_id = ?", [username, acl, req.params.id], function(err, user) {
  		req.flash('success', username + ' was successfully updated');
  		res.redirect('/csrf/'+level+'/users');
  	});
  });
};
