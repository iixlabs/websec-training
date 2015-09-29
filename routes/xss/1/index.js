module.exports = function (router, level) {
  router.all('/'+level+'/*', function (req,res,next){
      res.locals.level = level;
      next();
  });

  router.get('/'+level, function(req, res, next) {
  	res.render('xss/'+level+'/index', {
  		searchTerm: req.query.q || ''
  	});
  });
};
