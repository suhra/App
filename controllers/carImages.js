app.controller('galleryController', ['$scope', '$http',  '$document', 'carDetailService', function($scope, $http, $document, carDetailService) {

    var id = localStorage.engine;
    carDetailService.carImgCall(id).then(function(data) {
        $scope.result = data;
        ($document.find('body')).css( "background-image", "none");
    });

}]);