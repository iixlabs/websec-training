var exec = require('child_process').exec;

module.exports = function(router, level) {
  router.all('/' + level + '*', function(req, res, next) {
    res.locals.level = level;
    next();
  });

  router.get('/' + level, function(req, res, next) {
    if (!req.query.ip) return res.render('cmdInj/' + level + '/index');
    var ip = req.query.ip || '127.0.0.1';

    if (!ip.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/m)) {
      res.render('cmdInj/' + level + '/index');
    } else {
      exec("ping -c 2 " + ip, function(err, stdout) {
        res.render('cmdInj/' + level + '/index', {
          results: stdout
        });
      });
    }
  });
};
