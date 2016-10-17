
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
  });

