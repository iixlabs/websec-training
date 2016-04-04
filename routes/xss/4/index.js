module.exports = function (router, level) {
  router.all('/'+level+'/*', function (req,res,next){
      res.locals.level = level;
      next();
  });

  router.get('/'+level, function(req, res, next) {
    var query = req.query.q;

  	res.render('xss/'+level+'/index', {
      name: 'Guest'
  	});
  });

  router.post('/'+level, function (req, res, next) {

    res.render('xss/'+level+'/index', {
      name: req.body.name
    });
  });

}
