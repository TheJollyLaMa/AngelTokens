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
    .when("/AngelsRoom", {
      controller: "AngelsRoomController",
      templateUrl: "AngelsRoom/angels_room.html"
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
app.controller("StoreFrontController", ["$scope", function ($scope, $window) {$scope.test = "testing data binding in the store front";}]);
app.controller("BehindTheCounterController", ["$scope", function ($scope) {$scope.test = "testing data binding behind the counter";}]);
app.controller("AngelsRoomController", ["$scope", "$window", "$http", function ($scope, $window, $http) {
     $scope.newcolor = "";
     $scope.colors = [];

     $scope.loadTheBlock = function () {
       $http.get('abis/Color.json').then(function(c) {
            $scope.contract = c.data;
       });
       const web3 = window.web3;
       web3.eth.getAccounts().then(function(accounts){$scope.account = accounts[0];});
       web3.eth.net.getId().then(function(net_id){
          $scope.networkId = net_id;
          $scope.networkData = $scope.contract.networks[$scope.networkId];
          if($scope.networkData) {
            const abi = $scope.contract.abi;
            const address = $scope.networkData.address;
            $scope.ColorsContract = new web3.eth.Contract(abi,address);
            $scope.ColorsContract.methods
              .totalSupply().call()
                .then(function(res){
                  $scope.totalSupply = res;
                  // load colors/tokens
                  for (var i = 1; i <= res; i++) {
                    $scope.ColorsContract.methods
                      .colors(i - 1).call()
                        .then(function(color){
                          $scope.colors.push(color);

                        });
                  }
            });
          }else{$window.alert("Smart contract not connected to selected network.")}
        });
      }
// #fcba03   #55326e #32436e #ed8311
    $scope.mint = function (newcolor) {
        //need an error catch for instance when contract rejects a previously minted ID
        // as in : ID is not Unique!
        console.log(newcolor);
        $scope.ColorsContract.methods
        .mint(newcolor)
        .send({ from: $scope.account })
        .once('receipt', function(receipt) {
          $scope.colors.push(newcolor);
          console.log(newcolor)
          console.log(receipt);
          console.log($scope.colors);
        })
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
                     console.log(balance);
                     document.getElementById("output").innerHTML = balance + " ETH";
                 }
             });
         } catch (err) {
             document.getElementById("output").innerHTML = err;
         }
     }
}]);
