app.controller('carDetailsController',['$scope', '$http', '$carDetailService', function($scope, $http, carDetailService) {

    var id = localStorage.style1;

    carDetailService.carDescCall(id).then(function(data) {

        $scope.preview = data;
    });
    carDetailService.carImgCall(id).then(function(data) {
        $scope.result = data;
    });

    $scope.stores = function(engineid) {

        localStorage.engine = id;

    }

}]);
