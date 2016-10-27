app.controller('galleryController', ['$scope', '$http', 'carDetailService', function($scope, $http, carDetailService) {

    var id = localStorage.engine;
    carDetailService.carImgCall(id).then(function(data) {
        $scope.result = data;
    });

}]);