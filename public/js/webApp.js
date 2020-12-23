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
app.controller("StoreFrontController", ["$scope", function ($scope, $window) {$scope.test = "testing data binding in the store front";}]);
app.controller("BehindTheCounterController", ["$scope", function ($scope) {$scope.test = "testing data binding behind the counter";}]);
app.controller("AngelsRoomController", ["$scope", "$route", "$window", "$http", function ($scope, $route, $window, $http) {
     $scope.newtoken = "";
     $scope.ids = {};
     $scope.uris = {};
     $scope.AngelTokens = [];
     $scope.token_ids_owned = [];
     $scope.mintDataArray = [];
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
            $scope.totalAlms = await $scope.AngelTokenContract.methods
                                                  .getAlmsLength().call()
                                                  .then((len) => {
                                                    console.log(len);
                                                    return len;});
            $scope.AngelTokens = await $scope.fetchAlms();
            // mintBytes = await $scope.AngelTokenContract.methods.mintData().call();
            // $scope.mintData = await web3.eth.abi.decodeParameters(['string'],mintBytes);
            // catch event from solidity contract
          }else{$window.alert("Smart contract not connected to selected network.")}
        });
      }

      $scope.fetchAlms = async function () {
        var alm = {};
        var AngelTokens = [];
        console.log($scope.totalAlms);
        $scope.AngelTokenContract.methods.alms(0).call().then((alm) => {console.log(alm);});

        // alm = await $scope.AngelTokenContract.methods.balanceOf($scope.account, $scope.token_ids_owned).call();
        for (var i = 1; i <= $scope.totalAlms; i++) {
          // load alms
            // alm = await $scope.AngelTokenContract.methods.balanceOf($scope.account, $scope.token_ids_owned[i]).call();
              // alm = await $scope.AngelTokenContract.methods.alms(1).call().then((alm) => {console.log(alm);});
              console.log(alm);
              AngelTokens[i-1] = alm;
              // if(alm.owner == $scope.account){
              //     if(alm.status == 1) {alm.status = "waiting...";
              //     }else if(alm.status == 2) {alm.status = "executed...";
              //     }else if(alm.status == 3) {alm.status = "shipped...";
              //     }else if(alm.status == 4) {alm.status = "fulfilled...";
              //     }else{alm.status = "no status";}
              //     AngelTokens[i-1] = alm;
              // }

        };
        return AngelTokens;
      }
    // $scope.AngelTokensManifested = async function () {$scope.token = await $scope.AngelTokenContract.methods.ManifestedAngelTokens().call();console.log($scope.token);};
    $scope.manifest_angel_token = function (new_alm) {
        //need an error catch for instance when contract rejects a previously minted ID
        // as in : ID is not Unique! Use a slightly different name! (add a number to it if your endeavor mints frequently)
        console.log(new_alm.ename);
        console.log($scope.account);
        $scope.AngelTokenContract.methods
        .tokenGenesis(new_alm.ename, new_alm.esym, new_alm.issue_num, new_alm.mint_date, new_alm.cost, new_alm.angel_coefficient, new_alm.status, new_alm.product)
        .send({ from: $scope.account })
        .once('receipt', async function(receipt) {
          var ManifestEvent = receipt.events.ManifestedAngelToken.returnValues;
          var post_uri = 'http://localhost:3000/token_manifest_event/';
          var MintDataEvent = receipt.events.MintDataEvent.returnValues;
          console.log(post_uri);
          $scope.new_token_uri = ManifestEvent[0];
          console.log($scope.new_token_uri);
          $scope.lastmintData = await web3.eth.abi.decodeParameters('string',MintDataEvent[0]);
          console.log($scope.lastmintData);
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
