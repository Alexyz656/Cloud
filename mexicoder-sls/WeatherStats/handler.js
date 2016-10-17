'use strict';
var helper = require("../lib/DynamoHelper");

module.exports.handler = function(event, context, cb) {
  helper.getAverageTemperature(cb);
};
