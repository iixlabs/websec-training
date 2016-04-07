var exec = require('child_process').exec;

module.exports = function(router, level) {
  router.all('/' + level + '*', function(req, res, next) {
    res.locals.level = level;
    next();
  });

  router.get('/' + level, function(req, res, next) {
    var tasks = [];

    var renderPage = function (){
      exec("ps ux", function(err, stdout) {
        var processes = stdout.split("\n");
        var tasks = [];

        for (var i = 0; i < processes.length; i++) {
          var temp = processes[i].split(/\s+/);
          tasks.push(temp);
        }

        return res.render('cmdInj/' + level + '/index', {
          tasks: tasks || []
        });
      });
    }

    if (req.query.kill) {
      exec("kill " + req.query.kill, function (err) {
        if (err) return next(new Error(err));
        renderPage();
      });
    }
    else {
      renderPage();
    }
  });
};
