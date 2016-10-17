'use strict';
var SlackHelper = require("../lib/SlackHelper");

module.exports.handler = function(event, context, cb) {
  SlackHelper.SlackApp(event, function(err,data){
    cb(null,data);
  });
};
