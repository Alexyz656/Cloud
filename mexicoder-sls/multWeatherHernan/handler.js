
var weatherHelper = require("../lib/WeatherHelper.js");

module.exports.handler = function(event, context, cb) {
  weatherHelper.multWeatherHernan(event.cities, function(err,data){
<<<<<<< HEAD
   if(err){
     cb(err)
   }else{
    cb(null,data);
  }
=======
    cb(null,data);
>>>>>>> 7c733b15efe910e0b7f055d5061b20ebd2a65e2d
  });
};
