var db = require('../../../db');

module.exports = function (router, level) {

  router.all('/'+level+'*', function (req,res,next){
      res.locals.level = level;
      next();
  });

  router.get('/'+level, function(req, res, next) {
    var query = "SELECT * FROM sqli_pages";

    if (req.query.orderBy) {
      query += " ORDER BY " + req.query.orderBy
    }

    db.query(query, function(err, pages) {
      res.render('sqli/'+level+'/index', {
        pages: pages || []
      });
    });
  });

  router.get('/'+level+'/page', function(req, res, next) {
  	var pageId = req.query.id || 0;

  	db.query("SELECT * FROM sqli_pages WHERE pageId = ? LIMIT 1", [pageId], function(err, pages) {
  		res.render('sqli/'+level+'/page', {
  			pages: pages || [],
  			err: err || ''
  		});
  	});
  });
}
