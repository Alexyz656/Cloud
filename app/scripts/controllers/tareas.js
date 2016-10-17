<<<<<<< HEAD
'use strict';
angular.module('projectsApp')
  .controller('TareasCtrl', function ($scope, $http){
    this.awesomeThings= [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ]
    $scope.SendMessage = function () {
     var mess = {Mensaje: $scope.message};

      $http.post("https://842ovo9gn8.execute-api.us-east-1.amazonaws.com/dev/SlacApp",mess)
        .success(function (mess) {
          $scope.test = mess;
        })
        .error(function (error) {
          $scope.test = error;
        })

    }

    $scope.GetWeatherSecure = function () {

      var payload = {
        cities: $scope.cities.split(",")
      }

      $http.put("https://842ovo9gn8.execute-api.us-east-1.amazonaws.com/dev/multWeatherHernan", payload)
        .success(function(data){
          $scope.result = data;
        })
        .error(function (error) {
          alert(error);
        })


    }

    $scope.login = function (valid) {
      var credentials = {
        "username": "pepe",
        "password":"frog"
      };
      credentials.username = valid ? "alexyz" : "pepe";

      $http.post("https://842ovo9gn8.execute-api.us-east-1.amazonaws.com/dev/login",credentials)
        .success(function (data) {
          localstorage.setItem("token" , data.token);
        })
        .error(function (error) {
          alert(error);
          $scope.test = error;
        })
    }

    $scope.getWeatherStats = function () {
      $http.get("https://842ovo9gn8.execute-api.us-east-1.amazonaws.com/dev/WeatherStats")
        .success(function (data) {
          $scope.stats = data;
        })
        .error(function (error) {
          alert(error);
        })
    }

=======

angular.module('projectsApp')
  .controller('TareasCtrl', function ($scope) {
    $scope.test = "dayum"
    $scope.getWeather = function (cities,callback) {
      var lambdas = cities.map(function (city) {
        return async.apply(invokelambda, city)

      });
      async.parallel(lambdas, function (error,data) {
        if(error){
          callback(error)
        }else {
          callback(null, data)
        }
      })


    }

    function invokelambda(city, callback) {
      lambda.invoke({
          FunctionName: "jaquez-sls-tareaSimple",
          Payload: JSON.stringify({city:city}),
          InvocationType: "RequestResponse"
        },
        function (error,data) {
          if(error){
            callback(error)
          }else{
            callback(null, JSON.parse(data.Payload))
            $scope.test = JSON.parse(data.Payload);
          }
        }
      )
    }
>>>>>>> 7c733b15efe910e0b7f055d5061b20ebd2a65e2d
  });

