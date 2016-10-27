app.controller('carTypesController', ['$scope', '$http', 'carTypeService', function($scope, $http, carTypeService) {

    var car = localStorage.store2;

    carTypeService.carTypeCall(car).then(function(data) {

        $scope.result = data;

    });

    $scope.stores = function(id) {

        localStorage.style1 = id;

    }

}]);