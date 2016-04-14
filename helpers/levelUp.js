module.exports = function(category, level, completed) {
  // Default `completed` as true
  if (arguments.length == 2) completed = true;

  return function(req, res, next) {
    for (var i = 0; i < res.locals.modules.length; i++) {
      if (res.locals.modules[i].title == category || res.locals.modules[i].urlPrefix == category) {
        res.locals.modules[i].objectives[level].completed = completed;
        break;
      }
    }
    next();
  });
}
