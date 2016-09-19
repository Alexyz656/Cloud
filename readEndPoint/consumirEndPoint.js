/**
 * Created by hernan on 9/13/16.
 */
var app = angular.module("myApp", []);

app.controller("myController", function ($scope , $http) {
    $http.get("https://842ovo9gn8.execute-api.us-east-1.amazonaws.com/dev/classexample2000/mexicoder656")
      .success(function (data) {
          $scope.myApi = data;
      })
      .error(function (error) {
          alert(error);
      });
});
