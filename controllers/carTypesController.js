app.controller('carTypesController', ['$scope', 'carTypeService', 
 function($scope, carTypeService) {
   var car = localStorage.store;
   $scope.show = function(car) {
    localStorage.store = car;
    location.href="#/search";
  };

  carTypeService.carTypeCall(car).then(function(data) {
    $scope.result = data;
  });
  
  $scope.stores = function(id) {
    localStorage.style = id;
  }
}]);