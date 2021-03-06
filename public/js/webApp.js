var app = angular.module("webApp", ["ngRoute", "ui.bootstrap"]);
app.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider

    .when("/", {
      controller: "StoreFrontController",
      templateUrl: "StoreFront/Store_Front.html"
    })
    /* resolve to BehindTheCounter only if Wallet Account ($scope.account) belongs to Website Owner or other Authorized Personal*/
    // resolve: {check: function ($location, AuthFactory) {if (!AuthFactory.isUserLoggedIn()) {$location.path('/Store_Front/RoastMeister');}}},
    .when("/BehindTheCounter/Manifest_Tokens", {
      controller: "BehindTheCounterController",
      templateUrl: "BehindTheCounter/manifest_tokens.html"
    })
    .when("/BehindTheCounter/whats_it_about", {
      controller: "BehindTheCounterController",
      templateUrl: "BehindTheCounter/whats_it_about.html"
    })
    .when("/BehindTheCounter", {
       controller: "BehindTheCounterController",
       templateUrl: "BehindTheCounter/behind_the_counter.html"
    })
    .when("/treasure_chest", {
      controller: "TreasureChestController",
      templateUrl: "treasure_chest/token_manifest.html"
    })
    .when("/AngelsRoom", {
      controller: "StoreFrontController",
      templateUrl: "AngelsRoom/angels_room.html"
    })
    .when("/AngelsRoom/last_round", {
      controller: "StoreFrontController",
      templateUrl: "AngelsRoom/last_round.html"
    })
    .when("/AngelsRoom/this_round", {
      controller: "StoreFrontController",
      templateUrl: "AngelsRoom/this_round.html"
    })
    .when("/AngelsRoom/next_round", {
      controller: "StoreFrontController",
      templateUrl: "AngelsRoom/next_round.html"
    })
    .when("/StoreFront", {
      controller: "StoreFrontController",
      templateUrl: "StoreFront/store_front.html"
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
    templateUrl:"StoreFront/ShoppingCart.html"
  };});
app.directive("atnavbarstorefront",function(){
  return{
    data:{stock:"=",action:"&"},
    controller:"StoreFrontController",
    replace:!0,
    restrict:"E",
    templateUrl:"StoreFront/ATNavbarStoreFront.html"
  };});
app.directive("atnavbarstorefrontangelsroom",function(){
  return{
    data:{stock:"=",action:"&"},
    controller:"StoreFrontController",
    replace:!0,
    restrict:"E",
    templateUrl:"AngelsRoom/ATNavbarStoreFrontAngelsRoom.html"
  };});
app.directive("atnavbarbehindthecounter",function(){
  return{
    data:{stock:"=",action:"&"},
    controller:"BehindTheCounterController",
    replace:!0,
    restrict:"E",
    templateUrl:"BehindTheCounter/ATNavbarBehindTheCounter.html"
  };});
app.directive("atnavbarbehindthecountermanifest",function(){
    return{
      data:{stock:"=",action:"&"},
      controller:"BehindTheCounterController",
      replace:!0,
      restrict:"E",
      templateUrl:"BehindTheCounter/ATNavbarBehindTheCounterManifest.html"
};});
app.directive("followme",function(){
    return{
      data:{stock:"=",action:"&"},
      controller:"BehindTheCounterController",
      replace:!0,
      restrict:"E",
      templateUrl:"BehindTheCounter/followme.html"
};});
