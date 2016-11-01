app.controller('searchController',['$scope', '$sce', 'carService',
  function($scope, $sce, carService) {
   $scope.show = function(car) {
    localStorage.store = car;
    carService.carCall(car).then(function(data) {
     if(data===null){
      $scope.errorText=true;
    }  else {
      $scope.errorText=false;
    }
    $scope.preview=data;
  })
  };

  var car = localStorage.store;
  carService.carCall(car).then(function(data) {
    if(data===null){
      $scope.errorText=true;
    }  else {
      $scope.errorText=false;
    }
    $scope.preview=data;
  })
  $scope.sanitizeHtml = function(htmlContent) {
    return $sce.trustAsHtml(htmlContent);
  }
}]);