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
app.controller("StoreFrontController", ["$scope", function ($scope, $window) {$scope.test = "testing data binding in the store front";}]);
app.controller("BehindTheCounterController", ["$scope", function ($scope) {$scope.test = "testing data binding behind the counter";}]);
app.controller("AngelsRoomController", ["$scope", "$route", "$window", "$http", function ($scope, $route, $window, $http) {
     $scope.newtoken = "";
     $scope.ids = {};
     $scope.uris = {};
     $scope.AngelTokens = [];
     $scope.new_alm = {};
     $scope.loadTheBlock = async function () {
       await $http.get('../abis/AngelToken.json').then(function(c) {$scope.AngelTokenjson = c.data;});
       const web3 = window.web3;
       await web3.eth.getAccounts().then(function(accounts){$scope.account = accounts[0];$scope.display_account=accounts[0].toString().substring(0,4) + "   ....   " + accounts[0].toString().substring(accounts[0].toString().length - 4);});
       await web3.eth.net.getId().then(async function(net_id){
          $scope.networkId = net_id;
          $scope.networkData = await $scope.AngelTokenjson.networks[$scope.networkId];
          if($scope.networkData) {
            const abi = $scope.AngelTokenjson.abi;
            const address = $scope.networkData.address;
            $scope.AngelTokenContract = new web3.eth.Contract(abi,address);
            $scope.totalSupply = await $scope.AngelTokenContract.methods.totalSupply().call();
            $scope.fetchAlms().then(function(alms) {$scope.AngelTokens=alms;});
            mintBytes = await $scope.AngelTokenContract.methods.mintData().call();
            $scope.mintData = await web3.eth.abi.decodeParameters(['string','string','string','string'],mintBytes);
            // catch event from solidity contract
          }else{$window.alert("Smart contract not connected to selected network.")}
        });
      }

      $scope.fetchAlms = async function () {
        var alm = {};
        var AngelTokens = [];
        console.log($scope.totalSupply);
        for (var i = 1; i <= $scope.totalSupply; i++) {
            // load alms
            alm = await $scope.AngelTokenContract.methods.alms(i - 1).call();
            if(alm.status == 1) {alm.status = "waiting...";
            }else if(alm.status == 2) {alm.status = "executed...";
            }else if(alm.status == 3) {alm.status = "shipped...";
            }else if(alm.status == 4) {alm.status = "fulfilled...";
            }else{alm.status = "no status";}
            alm.url = await $scope.AngelTokenContract.methods.tokenURI(alm.id).call();// to check setTokenURI in contract
            AngelTokens[i-1] = alm;
        };
        return AngelTokens;
      }
    // $scope.AngelTokensManifested = async function () {$scope.token = await $scope.AngelTokenContract.methods.ManifestedAngelTokens().call();console.log($scope.token);};
    $scope.manifest_angel_token = function (new_alm) {
        //need an error catch for instance when contract rejects a previously minted ID
        // as in : ID is not Unique!
        console.log(new_alm.ename);
        console.log($scope.account);
        $scope.AngelTokenContract.methods
        .manifestAngelToken(new_alm.ename, new_alm.esym, new_alm.issue_num, new_alm.mint_date, new_alm.cost, new_alm.angel_coefficient, new_alm.status, new_alm.product)
        .send({ from: $scope.account })
        .once('receipt', async function(receipt) {
          var ManifestEvent = receipt.events.ManifestedAngelToken.returnValues;
          var post_uri = 'http://localhost:3000/token_manifest_event/';
          var MintDataEvent = receipt.events.MintDataEvent.returnValues;
          var lastmintData = MintDataEvent[0];
          console.log(post_uri);
          $scope.new_token_uri = ManifestEvent[0]; 
          console.log(new_token_uri);
          $scope.lastmintData = await web3.eth.abi.decodeParameters(['string','string','string','string'],lastmintData);
          console.log(lastmintData);
          // $http.post(uri, ManifestEvent[0]);
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
                     console.log(balance);
                     document.getElementById("output").innerHTML = balance + " ETH";
                 }
             });
         } catch (err) {
             document.getElementById("output").innerHTML = err;
         }
     }
}]);
