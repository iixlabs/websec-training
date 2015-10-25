var db = require('../../../db');

module.exports = function (router, level) {

  router.all('/'+level+'*', function (req,res,next){
      res.locals.level = level;
      next();
  });

  router.get('/'+level, function(req, res, next) {
    var query = "SELECT * FROM sqli_pages";

    db.query(query, function(err, pages) {
      res.render('sqli/'+level+'/index', {
        pages: pages || []
      });
    });
  });

  router.get('/'+level+'/page', function(req, res, next) {
  	var pageId = req.query.id || 0;

  	db.query("SELECT * FROM sqli_pages WHERE pageId = " + pageId + " LIMIT 1", function(err, pages) {
  		res.render('sqli/'+level+'/page', {
  			pages: pages || [],
  			err: err || ''
  		});
  	});
  });
}
