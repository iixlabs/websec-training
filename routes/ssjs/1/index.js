module.exports = function (router, level) {
  router.all('/'+level+'*', function (req,res,next){
      res.locals.level = level;
      next();
  });

  router.get('/'+level, function(req, res, next) {
  	res.render('ssjs/'+level+'/index', {
  		title: 'Future Age'
  	});
  });

  router.post('/'+level, function(req, res, next) {
  	var year = eval("year = (" + req.body.year + ")");
  	var date = new Date();

  	var futureAge = 2050 - year;

  	res.render('ssjs/'+level+'/index', {
  		title: 'Future Age',
  		output: futureAge
  	});
  });
};
