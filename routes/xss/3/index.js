module.exports = function (router, level) {
  router.all('/'+level+'/*', function (req,res,next){
      res.locals.level = level;
      next();
  });
  
  router.get('/'+level, function(req, res, next) {
    var query = req.query.q;

    if (query) {
      query = query.replace(/'/gi, "\\'");
      query = query.replace(/"/gi, '\\"')
    }

  	res.render('xss/'+level+'/index', {
  		searchTerm: query || ''
  	});
  });

}
