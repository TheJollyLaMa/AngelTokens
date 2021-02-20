app.factory('BlockFactory', ["$http", function ($http) {
    return {
          FetchTokenJSON: FetchTokenJSON,
          FetchAT_X_JSON: FetchAT_X_JSON
      }
      function FetchTokenJSON () {
          return $http.get('../../../abis/AngelToken.json')//need to change to hardlink to ipfs file containing token ABI
                      .then(function(atjson) {
                        return atjson.data;
                      });
      }
      function FetchAT_X_JSON () {
          return $http.get('../../../abis/AT_X.json')//change to IPFS token execution abi
                      .then(function(atcfjson) {
                        return atcfjson.data;
                      });
      }

}]);
