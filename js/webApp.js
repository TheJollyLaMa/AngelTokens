"use strict";
var app = angular.module("webApp", ["ngRoute"]);
app.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider

    .when("/", {
      controller: "AngelsRoomController",
      templateUrl: "AngelsRoom/angels_room.html"
    })
    .when("/StoreFront", {
      controller: "StoreFrontController",
      templateUrl: "StoreFront/store_front.html"
    })
    .when("/AngelsRoom", {
      controller: "AngelsRoomController",
      templateUrl: "AngelsRoom/angels_room.html"
    })
     .when("/BehindTheCounter", {
       controller: "BehindTheCounterController",
       templateUrl: "BehindTheCounter/behind_the_counter.html"
    })
    .otherwise({redirectTo: "/"})
  }
]);
app.controller("StoreFrontController", ["$scope", "$window", function ($scope, $window) {

    $scope.test = "testing data binding in the store front";
    $scope.getBalance = function () {
        var address, wei, balance;
        address = document.getElementById("address").value;
        $scope.address = address;
        try {
            web3.eth.getBalance(address, function (error, wei) {
                if (!error) {
                    var balance = web3.fromWei(wei, 'ether');
                    document.getElementById("output").innerHTML = balance + " ETH";
                }
            });
        } catch (err) {
            document.getElementById("output").innerHTML = err;
        }
    }

}]);
app.controller("BehindTheCounterController", ["$scope", function ($scope) {
    $scope.test = "testing data binding behind the counter";
}]);
app.controller("AngelsRoomController", ["$scope", function ($scope) {
     $scope.test = "testing data binding in the Angel's Room";
}]);
