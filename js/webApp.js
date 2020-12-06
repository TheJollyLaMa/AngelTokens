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
app.controller("StoreFrontController", ["$scope", function ($scope, $window) {
    $scope.test = "testing data binding in the store front";
}]);
app.controller("BehindTheCounterController", ["$scope", function ($scope) {
    $scope.test = "testing data binding behind the counter";
}]);
app.controller("AngelsRoomController", ["$scope", "$window", "$http", function ($scope, $window, $http) {
     $scope.test = "testing data binding in the Angel's Room";

     $http.get('abis/Color.json').then(function(c) {
       $scope.contract = c.data;
       // console.log($scope.contract);
       $scope.loadTheBlock();
     });

     $scope.loadTheBlock = function () {
       const web3 = window.web3
       //load account from metamask
       web3.eth.getAccounts().then(function(accounts){
          $scope.account = accounts[0];
       });
       web3.eth.net.getId().then(function(net_id){
          $scope.networkId = net_id;
          console.log(net_id);
          $scope.networkData = $scope.contract.networks[$scope.networkId];
          console.log($scope.networkData);

          if($scope.networkData) {
            const abi = $scope.contract.abi;
            const address = $scope.networkData.address;
            $scope.ColorsContract = new web3.eth.Contract(abi,address);
            $scope.totalSupply = $scope.ColorsContract.methods.totalSupply().call();
            // load colors
            for (var i = 1; i <= $scope.totalSupply; i++) {
              $scope.color[i] = $scope.ColorsContract.methods.colors(i - 1).call();
            }
          }else {
            $window.alert("Smart contract not connected to selected network.")
          }
        });

      }

     $scope.getBalance = function () {
         var address, wei, balance;
         address = document.getElementById("address").value;
         console.log(address);
         $scope.address = address;
         try {
             web3.eth.getBalance(address, function (error, wei) {
                 if (!error) {
                     var balance = web3.utils.fromWei(wei, 'ether');
                     document.getElementById("output").innerHTML = balance + " ETH";
                 }
             });
         } catch (err) {
             document.getElementById("output").innerHTML = err;
         }
     }
}]);
