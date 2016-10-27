var app = angular.module('myApp', ['ngRoute']);

app.controller('carmakesController',['$scope', '$http', '$sce', 'carService', function($scope, $http, $sce, carService) {

    $scope.show = function(vehicle) {

        carService.carCall(vehicle).then(function(data) {
            $scope.preview = data;
        });


        $scope.sanitizeHtml = function(htmlContent) {
            return $sce.trustAsHtml(htmlContent);
        }

        localStorage.store2 = vehicle;

    }


}]);