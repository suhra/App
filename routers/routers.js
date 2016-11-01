app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'car.html',
    controller: 'carmakesController'
  })

  .when("/carTypes", {
    templateUrl: 'carTypes.html',
    controller: 'carTypesController'
  })
  .when("/carDetails", {
    templateUrl: 'carDetails.html',
    controller: 'carDetailsController'
  })
  .when("/carImages", {
    templateUrl: 'carImages.html',
    controller: 'galleryController'
  })

  .when("/search", {
    templateUrl: 'search.html',
    controller: 'searchController'
  })

});