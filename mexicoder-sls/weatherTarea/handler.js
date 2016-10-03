
var weatherHelper = require("../lib/WeatherHelper.js");

module.exports.handler = function(event, context, cb) {
  weatherHelper.weatherTarea(event.city, function(err,data){
    cb(null,data);
  });
};
