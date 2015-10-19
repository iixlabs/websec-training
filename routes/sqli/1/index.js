var db = require('../../../db')
module.exports = function (router, level) {

  router.all('/'+level+'*', function (req,res,next){
      res.locals.level = level;
      next();
  });

  router.get('/'+level, function (req, res, next) {
    res.render('sqli/'+level+'/index')
  });

  router.get('/'+level+'/login', function (req, res, next) {
    res.render('sqli/'+level+'/login');
  });

  router.post('/'+level+'/login', function(req, res, next) {
  	var username = req.body.username || '';
  	var password = req.body.password || '';

  	db.query("SELECT * FROM sqli_users WHERE username = '" + username + "' AND password = '" + password + "'", function(err, user) {
  		if (!user || user.length == 0) {
  			if (user && user.length == 0) err = "Incorrect username and password.";
  			res.render('sqli/'+level+'/login', {
  				user: null,
  				err: err
  			});
  		} else {
  			user = (user.length >= 1) ? user.shift() : {}
  			res.render('sqli/'+level+'/login', {
  				user: user,
  				err: err
  			});
  		}
  	});
  });
}
