
var weatherHelper = require("../lib/WeatherHelper.js");

module.exports.handler = function(event, context, cb) {
  weatherHelper.multWeatherHernan(event.cities, function(err,data){
    cb(null,data);
  });
};
