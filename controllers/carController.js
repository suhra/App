var app = angular.module('myApp', ['ngRoute']);
app.constant('apiCall','http://api.edmunds.com/api/vehicle/v2/');

app.controller('carmakesController',['$scope',
  function($scope) {
   $scope.show = function(car) {
    localStorage.store = car;
    location.href="#/search";    
  };
}]);