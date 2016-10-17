'use strict';
var jwt = require("jsonwebtoken");

module.exports.handler = function(event, context, cb) {

  if(event.username === "alexyz"){
    var resultado = {
      "username": event.username,
      "permissions": {
        "weatherTarea": true,
        "multWeatherHernan": true,
        "WeatherStats": false
      }
    };
    var token = jwt.sign(resultado, "123)(*qpzm");

    cb(null, {"token": token});
  }else{
    cb("Error")
  }


};
