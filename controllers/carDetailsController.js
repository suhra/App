app.controller('carDetailsController',['$scope', '$http', 'carDetailService', 
  function($scope, $http, carDetailService) {
    var id = localStorage.style;
    
    carDetailService.carDescCall(id).then(function(data) {
      $scope.preview = data;
    });

    carDetailService.carImgCall(id).then(function(data) {
      $scope.result = data;
    });
    $scope.show = function(car) {
      localStorage.store = car;
      location.href="#/search";
    };
    $scope.stores = function(engineid) {
      localStorage.engine = id;
    }
  }]);
