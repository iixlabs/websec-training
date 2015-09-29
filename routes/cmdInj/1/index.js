var exec = require('child_process').exec;

module.exports = function (router, level) {
  router.all('/'+level+'*', function (req,res,next) {
      res.locals.level = level;
      next();
  });

  router.get('/'+level, function(req, res, next) {
  	res.render('cmdInj/'+level+'/index');
  });

  router.post('/'+level, function(req, res, next) {
  	var year = req.body.year || 2015;

  	exec("cal " + year, function(err, stdout) {
  		res.render('cmdInj/'+level+'/index', {
  			cal: stdout
  		});
  	});
  });
};
