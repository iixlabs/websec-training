var express = require('express');
var router = express.Router();

modules = require('../../helpers/loadModules')(__dirname);

if (modules) {
  modules.forEach(function(module){
    require('./'+module)(router, module);
  });
}

module.exports = router;
