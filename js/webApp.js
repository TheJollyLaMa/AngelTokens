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
app.controller("AngelsRoomController", ["$scope", "$route", "$window", "$http", function ($scope, $route, $window, $http) {
     $scope.newtoken = "";
     $scope.ids = {};
     $scope.uris = {};
     $scope.AngelTokens = {};
     $scope.newtoken = "";
     $scope.loadTheBlock = async function () {
       await $http.get('abis/AngelToken.json').then(function(c) {$scope.AngelTokenjson = c.data;});
       const web3 = window.web3;
       await web3.eth.getAccounts().then(function(accounts){$scope.account = accounts[0];});
       await web3.eth.net.getId().then(async function(net_id){
          $scope.networkId = net_id;
          $scope.networkData = await $scope.AngelTokenjson.networks[$scope.networkId];
          if($scope.networkData) {
            const abi = $scope.AngelTokenjson.abi;
            const address = $scope.networkData.address;
            $scope.AngelTokenContract = new web3.eth.Contract(abi,address);
            $scope.AngelTokens = await $scope.AngelTokenContract.methods
                                    .totalSupply().call()
                                      .then( async function(res){
                                        $scope.totalSupply = res;
                                        console.log(res)

                                        var ids = {};
                                        var uris = {};
                                        var AngelTokens = {};

                                        for (var i = 1; i <= res; i++) {
                                          // load token ids and uris
                                          await $scope.AngelTokenContract.methods.angel_tokens(i - 1).call()
                                              .then(function(id){
                                                // console.log(id);
                                                ids[i] = id;
                                                return id;})
                                              .then(async function(id) {
                                                // console.log(id)
                                                await $scope.AngelTokenContract.methods.angel_token_id_to_uri_map(id).call()
                                                    .then(function(uri){
                                                      // console.log(uri);
                                                      uris[i] = uri;
                                                      AngelTokens[id] = uri;
                                                      // console.log(AngelTokens[id]);
                                                    })
                                              });
                                        }
                                        // console.log(AngelTokens);
                                        return AngelTokens;});
            // catch event from solidity contract
            // $scope.AngelTokenManifested = await $scope.AngelTokenContract.methods.ManifestedAngelTokens().call()

            console.log($scope.AngelTokens);

          }else{$window.alert("Smart contract not connected to selected network.")}
        });
      }

// #fcba03   #55326e #32436e #ed8311
    $scope.mint = function (newtoken) {
        //need an error catch for instance when contract rejects a previously minted ID
        // as in : ID is not Unique!
        console.log(newtoken);
        // newtoken += "AngelToken";
        $scope.AngelTokenContract.methods
        .mint(newtoken)
        .send({ from: $scope.account })
        .once('receipt', function(receipt) {
          $scope.angel_tokens.push(newtoken);
          console.log(newtoken)
          console.log(receipt);
          console.log($scope.angel_tokens);
        });
        // $route.reload();

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
