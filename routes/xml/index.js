var express = require('express');
var router = express.Router();
var libxmljs = require('libxmljs');

modules = require('../../helpers/loadModules')(__dirname);

if (modules) {
  modules.forEach(function(module){
    require('./'+module)(router, module);
  });
}

module.exports = router;
