'use strict'
var SlackHelper = require("../lib/SlackHelper");

module.exports.handler = function(event, context, cb) {
  SlackHelper.SlackMessages(event.mensaje, function(err,data){
    cb(null,data);
  });
};
