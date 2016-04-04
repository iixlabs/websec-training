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
    var name = req.body.name;
    name = name.replace(/\</gi, '&lt;');
    name = name.replace(/\>/gi, '&gt;');
    name = name.replace(/\(?\)?/gi, '');

    res.render('xss/'+level+'/index', {
      name: name
    });
  });

}
