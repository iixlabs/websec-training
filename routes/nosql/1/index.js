var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nosql1');

var UserSchema = new mongoose.Schema({
	name: String,
	user: String,
	pass: String
});

var User = mongoose.model('User', UserSchema);

User.remove({}, function (err){
  [['Administrator', 'admin', 'qwertyxzcvy11234'], ['User', 'user', 'tfb4561qtgedzfrsgyh'], ['Jules', 'bad', 'edthgfnbxcvbnsdfgdfg']].forEach(function (cred) {
  	var instance = new User();

  	// ---

  	instance.name = cred[0];
  	instance.user = cred[1];
  	instance.pass = cred[2];

  	// ---

  	instance.save();
  });
});

module.exports = function (router, level) {

  router.all('/'+level+'*', function (req,res,next){
      res.locals.level = level;
      next();
  });

  router.get('/'+level, function(req, res, next) {
    res.render('nosql/'+level+'/index');
  });

  router.post('/'+level, function(req, res, next) {
    console.log(req.body);
    console.log(req.body.user);
    User.findOne({user: req.body.user, pass: req.body.pass}, function (err, user) {
  		if (err) {
  			return res.render('nosql/'+level+'/index', {err: err.message});
  		}

  		// ---

  		if (!user) {
  			res.render('nosql/'+level+'/index', {err: 'Incorrect username or password'});
  		}

  		// ---
      else {
        res.render('nosql/'+level+'/index', {user: user.name});
      }
	  });
  });
}
