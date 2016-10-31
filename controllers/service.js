app.factory('carService', ['$http', function($http) {
    return {
        carCall: function(car) {
        
            return $http.get("https://api.edmunds.com/api/editorial/v2/" + car + "?view=basic&fmt=json&api_key=x32gpy85va2f9w4q6zqvdbms")
            .then(function(response) {
               
                return response.data;
            });
        }
    };
}]);
app.factory('carTypeService', ['$http', function($http) {
    return {
        carTypeCall: function(car) {
            return $http.get("http://api.edmunds.com/api/vehicle/v2/" + car + "/models?fmt=json&api_key=x32gpy85va2f9w4q6zqvdbms")
            .then(function(response) {
     
                return response.data;
            });
        }
    }
}]);
app.factory('carDetailService', ['$http', function($http) {
    return {
        carDescCall: function(id) {
            return $http.get("https://api.edmunds.com/api/vehicle/v2/styles/" + id + "?view=full&fmt=json&api_key=x32gpy85va2f9w4q6zqvdbms")
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
