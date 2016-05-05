var libxmljs = require('libxmljs');

module.exports = function (router, level) {
  router.all('/'+level+'*', function (req,res,next){
    res.locals.level = level;
    next();
  });

  router.get('/'+level, function(req, res, next) {
    res.render('xml/'+level+'/index');
  });

  router.post('/'+level+'/api/contact', function(req, res, next) {
    var xml = '<?xml version="1.0" encoding="UTF-8"?>' + req.body.form;
  	var xmlDoc = libxmljs.parseXml(xml, {
  		noent: true,
  	});
  	res.render('xml/'+level+'/success', {
  		name: xmlDoc.get("/contact/name").text()
  	});
  });
}
