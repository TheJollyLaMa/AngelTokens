var app = angular.module("webApp", ["ngRoute"]);
app.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider

    .when("/", {
      controller: "StoreFrontController",
      templateUrl: "StoreFront/Store_Front.html"
    })
    .when("/BehindTheCounter/Manifest_Tokens", {
      controller: "BehindTheCounterController",
      templateUrl: "BehindTheCounter/manifest_tokens.html"
    })
    .when("/AngelsRoom", {
      controller: "AngelsRoomController",
      templateUrl: "AngelsRoom/angels_room.html"
    })
    .when("/AngelsRoom/whats_it_about", {
      controller: "AngelsRoomController",
      templateUrl: "AngelsRoom/whats_it_all.html"
    })
    .when("/AngelsRoom/last_round", {
      controller: "AngelsRoomController",
      templateUrl: "AngelsRoom/last_round.html"
    })
    .when("/AngelsRoom/next_round", {
      controller: "AngelsRoomController",
      templateUrl: "AngelsRoom/next_round.html"
    })
    .when("/treasure_chest", {
      controller: "AngelsRoomController",
      templateUrl: "treasure_chest/token_manifest.html"
    })
    .when("/BehindTheCounter", {
       controller: "BehindTheCounterController",
       templateUrl: "BehindTheCounter/behind_the_counter.html"
    })
    .when("/StoreFront", {
      controller: "StoreFrontController",
      templateUrl: "StoreFront/Store_Front.html"
    })
    .when("/StoreFront/about_store_front", {
      controller: "StoreFrontController",
      templateUrl: "StoreFront/about_store_front.html"
    })
    .when("/Store_Front/OrderBeans", {
      controller: "StoreFrontController",
      templateUrl: "Store_Front/OrderBeans.html"
    })
    .when("/Store_Front/Subscription", {
      controller: "StoreFrontController",
      templateUrl: "Store_Front/Subscription.html"
    })
    .when("/Store_Front/Discount", {
      controller: "StoreFrontController",
      templateUrl: "Store_Front/Discount.html"
    })
    .otherwise({redirectTo: "/"})
  }
]);
app.filter('bytetobase', function () {
    return function (buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);};});
app.directive("shoppingcart",function(){
  return{
    data:{stock:"=",action:"&"},
    controller:"StoreFrontController",
    replace:!0,
    restrict:"E",
    templateUrl:"Store_Front/ShoppingCart.html"
  }
app.directive('progress', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            console.log(value);
            element.css({
                'width': $scope.progress
            });
        });
    };
});
});
