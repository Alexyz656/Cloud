/**
 * Created by hernan on 9/29/16.
 */
var aws = require("aws-sdk");
var lambda = new aws.Lambda({region: "us-east-1"});
var request = require("request");
var async = require("async");
require("string_format");
<<<<<<< HEAD
var dynamo = require("./DynamoHelper");

module.exports.weatherTarea = function(city, callback){
  request.get("http://api.openweathermap.org/data/2.5/weather?q={0}&appid=ea4dd97a55fefeb38dcd3364cbacfd74".format(city), function (error, data) {
=======

module.exports.weatherTarea = function(city, callback){
  request.get("http://api.openweathermap.org/data/2.5/weather?q={0}&appid=ea4d83839d97a55fefeb38dcd3364cbacfd74".format(city), function (error, data) {
>>>>>>> 7c733b15efe910e0b7f055d5061b20ebd2a65e2d
    if (error) {
      callback(error)
    }
    else {
      var response = JSON.parse(data.body);
<<<<<<< HEAD
      console.log(response);
      var result = "El clima de {0} es de {1} grados kelvin".format(city, response.main.temp)
      dynamo.saveWeather(city, response.main.temp , function (error,data) {
        if(error){
          return callback(error);
        }
        callback(null,result)
      });
=======
      var result = "El clima de {0} es de {1} grados kelvin".format(city, response.main.temp)
      callback(null, result)
>>>>>>> 7c733b15efe910e0b7f055d5061b20ebd2a65e2d
    }
  });
};

module.exports.multWeatherHernan = function (cities,callback) {
  var lambdas = cities.map(function (city) {
    return async.apply(invokelambda, city)

  });
  async.parallel(lambdas, function (error,data) {
    if(error){
      callback(error)
    }else {
      callback(null, data)
    }
<<<<<<< HEAD
  });
=======
  })
>>>>>>> 7c733b15efe910e0b7f055d5061b20ebd2a65e2d


}

<<<<<<< HEAD

=======
>>>>>>> 7c733b15efe910e0b7f055d5061b20ebd2a65e2d
function invokelambda(city, callback) {
  lambda.invoke({
    FunctionName: "mexicoder-sls-weatherTarea",
    Payload: JSON.stringify({city:city}),
    InvocationType: "RequestResponse"
  },
    function (error,data) {
      if(error){
        callback(error)
      }else{
        callback(null, JSON.parse(data.Payload))
      }
    }
  )
}
