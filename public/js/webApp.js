var app = angular.module("webApp", ["ngRoute"]);
app.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider

    .when("/", {
      controller: "AngelsRoomController",
      templateUrl: "AngelsRoom/angels_room.html"
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
      templateUrl: "StoreFront/store_front.html"
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

        // gitMyPort, gitMyCoin, Social Index, FollowMe, Rugby, Meek Inheritance, FiWithMe, Fi2Gether ... oo I like that last one.  Fi2Gether tired of fi ing alone? git Fi2Gether today!!! works on so many levels.  see that "ether" in there?
