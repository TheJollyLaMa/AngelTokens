app.factory('BlockFactory', ["$http", function ($http) {
    return {
          FetchTokenJSON: FetchTokenJSON,
          FetchAT_X_JSON: FetchAT_X_JSON
      }
      function FetchTokenJSON () {
          return $http.get('../../../abis/AngelToken.json')
                      .then(function(atjson) {
                        return atjson.data;
                      });
      }
      function FetchAT_X_JSON () {
          return $http.get('../../../abis/AT_X.json')
                      .then(function(atcfjson) {
                        return atcfjson.data;
                      });
      }

}]);
