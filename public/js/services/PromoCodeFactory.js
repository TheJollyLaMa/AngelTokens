'use strict';

app.factory('PromoCodeFactory', ['$http', 'ShoppingCartFactory', function($http, ShoppingCartFactory) {
    return {showPromoCodes: showPromoCodes,runPromotional: runPromotional}
        function showPromoCodes(promo_code) {
          var request = {method: 'GET', url: 'https://www.caffeinelamanna.com/php/get_promo_codes.php'};
          var total = ShoppingCartFactory.cart.getTotalPrice();
          return $http(request).then(function(response){
                var promo_discount_rate = 0;
                var promo_discount_amount = 0;
                for (var i=0; i < response.data.length; i++){
                    //console.log($scope.promo_code_data[i].promo_code);
                    if (promo_code == response.data[i].promo_code) {
                        promo_discount_rate = response.data[i].discount_rate;
                        promo_discount_rate = Number(promo_discount_rate);
                        promo_discount_amount = promo_discount_rate * total;
                        console.log(promo_discount_amount);
                    }
                }return promo_discount_amount;
        });
      }

      function runPromotional(promo_code) {
        var request = {method: 'GET', url: 'https://www.caffeinelamanna.com/php/get_promo_codes.php'};
        return $http(request).then(function(response){
              var uses = 0, limit = 0;
              for (var i=0; i < response.data.length; i++){
                  if (promo_code == response.data[i].promo_code) {
                      uses = response.data[i].uses;
                      uses = Number(uses);
                      limit = response.data[i].limit_on_uses;
                      limit = Number(limit);
                  }
              }return {uses: uses, limit: limit};
      });
    }
}]);
