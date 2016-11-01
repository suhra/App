app.controller('galleryController', ['$scope', '$document', 'carDetailService',
 function($scope, $document, carDetailService) {
   var id = localStorage.engine;
   $scope.show = function(car) {
    localStorage.store = car;
    location.href="#/search";
  };
  
  carDetailService.carImgCall(id).then(function(data) {
    $scope.result = data;
    ($document.find('body')).css( "background-image", "none");
  });
}]);