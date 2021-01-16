app.factory('BlockFactory', ["$http", function ($http) {
    return {
          FetchTokenJSON: FetchTokenJSON,
          FetchOAContractJSON: FetchOAContractJSON,
          FetchCafLaMContractJSON: FetchCafLaMContractJSON
      }
      function FetchTokenJSON () {
          return $http.get('../../../abis/AngelToken.json')
                      .then(function(atjson) {
                        return atjson.data;
                      });
      }
      function FetchOAContractJSON () {
          return $http.get('../../../abis/AngelTokenCrowdFund.json')
                      .then(function(atcfjson) {
                        return atcfjson.data;
                      });
      }
      function FetchCafLaMContractJSON () {
          return $http.get('../../../abis/CafLaMCrowdFund.json')
                      .then(function(atclcfjson) {
                        return atclcfjson.data;
                      });
      }
}]);
