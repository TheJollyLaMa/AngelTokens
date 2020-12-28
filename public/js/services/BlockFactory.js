app.factory('BlockFactory', ["$http", function ($http) {
    return {
          FetchTokenJSON: FetchTokenJSON
      }
      function FetchTokenJSON () {
          return $http.get('../../../abis/AngelToken.json')
                      .then(function(atjson) {
                        return atjson.data;
                      });
      }

}]);
