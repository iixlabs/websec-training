module.exports = function (router, level) {
  var index = function(req, res, next) {
      res.render('imajs/'+level+'/index', {
          title: 'IMAJS',
          html: req.body.html || ''
      });
  };

  router.all('/'+level+'*', function (req,res,next) {
    res.locals.level = level;
    next();
  });

  router.get('/'+level, index);
  router.post('/'+level, index);
};
