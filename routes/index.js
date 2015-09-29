var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  var categories = require('../helpers/loadModules')(__dirname);
  var modules = [];

  // Get each category
  categories.forEach(function(category){
    var levels = require('../helpers/loadModules')(__dirname + '/'+category);

    // Check if we have a config for the category
    if (fs.existsSync(__dirname + '/'+category+'/config.json')){
      var config = require(__dirname + '/'+category+'/config.json');
      modules.push({title: config.title, urlPrefix: config.urlPrefix, levels: levels});
    }
    else {
      modules.push({title: category, urlPrefix: category, levels: levels});
    }
  });

  res.render('index', {modules: modules});
});

module.exports = router;
