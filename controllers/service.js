app.factory('carService', ['$http', function($http) {
  return {
    carCall: function(car) {    
      return $http.get("https://api.edmunds.com/api/editorial/v2/"+car+"?view=basic&fmt=json&api_key=x32gpy85va2f9w4q6zqvdbms")
      .then(function(response) {

        return response.data;   
      }, function(error){

        return null;
      });
    }
  };
}]);

app.factory('carTypeService', ['$http', 'apiCall', function($http, apiCall) {
  return {
    carTypeCall: function(car) {
      return $http.get(apiCall + car + "/models?fmt=json&api_key=x32gpy85va2f9w4q6zqvdbms")
      .then(function(response) {

        return response.data;
      });    
    }
  }
}]);

app.factory('carDetailService', ['$http', 'apiCall', function($http, apiCall) {
  return {
    carDescCall: function(id) {
      return $http.get(apiCall+"styles/" + id + "?view=full&fmt=json&api_key=x32gpy85va2f9w4q6zqvdbms")
      .then(function(response) {

        return response.data;
      });
    },
    
    carImgCall: function(id) {
      return $http.get("https://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?styleId=" + id + "&fmt=json&api_key=x32gpy85va2f9w4q6zqvdbms")
      .then(function(response) {

        return response.data;
      });
    }
  }
}]);
