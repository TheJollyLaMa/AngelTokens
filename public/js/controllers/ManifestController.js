app.controller("ManifestController", ["$scope", "$route", "$window", "$http", "BlockFactory", function ($scope, $route, $window, $http, BlockFactory) {
    $scope.test = "testing data binding in the manifest tokens room";
     $scope.newtoken = "";
     $scope.ids = {};
     $scope.uris = {};
     $scope.AngelTokens = [];
     $scope.token_ids_owned = [];
     $scope.mintDataArray = [];
     $scope.new_alm = {};
     $scope.loadTheBlock = async function () {
       const web3 = window.web3;
       $scope.AngelTokenjson = await BlockFactory.FetchTokenJSON();
       $scope.account = await web3.eth.getAccounts().then(function(accounts){return accounts[0];});
       $scope.display_account = $scope.account.toString().substring(0,4) + "   ....   " + $scope.account.toString().substring($scope.account.toString().length - 4);
       $scope.AngelTokenContract = await web3.eth.net.getId().then(function(net_id){
          if($scope.AngelTokenjson.networks[net_id]) {
           return c = new web3.eth.Contract($scope.AngelTokenjson.abi,$scope.AngelTokenjson.networks[net_id].address);
         }else{return $window.alert("Smart contract not connected to selected network.")}
        });
       $scope.blockNum = await web3.eth.getBlockNumber();
       $scope.totalAlms = await $scope.AngelTokenContract.methods.getAlmsLength().call().then((len) => {return len;});
       $scope.AngelTokens = await $scope.fetchAlms();

      }

      $scope.fetchAlms = async function () {
        var alm = {};
        var AngelTokens = [];
        console.log($scope.totalAlms);
        for (var i = 1; i <= $scope.totalAlms; i++) {
          // load alms
          await $scope.AngelTokenContract.methods.alms(i-1).call().then(async (alm) => {
              var uri_str = await web3.eth.abi.decodeParameters(['string', 'uint256', 'string'], alm.uri);
              alm.uri = uri_str[0] + uri_str[1] + uri_str[2];
              console.log(alm.uri);
              // console.log(alm.mint_data);
              var mint_str = await web3.eth.abi.decodeParameters(['uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'string'], alm.mint_data);
              console.log(mint_str);
              alm.num_issued = mint_str[0];
              alm.mint_date = mint_str[1];
              alm.cost = mint_str[2];
              alm.angel_coefficient = mint_str[3];
              alm.status = mint_str[4];
              alm.product = mint_str[5];
              alm.bal = await $scope.AngelTokenContract.methods.balanceOf($scope.account,alm.id).call()
              if(alm.status == 1) {alm.status = "waiting...";
              }else if(alm.status == 2) {alm.status = "executed...";
              }else if(alm.status == 3) {alm.status = "shipped...";
              }else if(alm.status == 4) {alm.status = "fulfilled...";
              }else{alm.status = "no status";}
              AngelTokens[i-1] = alm;
          });
        };
        return AngelTokens;
      }
    // $scope.AngelTokensManifested = async function () {$scope.token = await $scope.AngelTokenContract.methods.ManifestedAngelTokens().call();console.log($scope.token);};
    $scope.manifest_angel_token = function (new_alm) {
        var today = new Date();
        today = String(today.getDate()).padStart(2, '0') + String(today.getMonth() + 1).padStart(2, '0') + today.getFullYear();
        //need an error catch for instance when contract rejects a previously minted ID
        // as in : ID is not Unique! Use a slightly different name! (add a number to it if your endeavor mints frequently)
        $scope.AngelTokenContract.methods
        .tokenGenesis(new_alm.ename, new_alm.esym, new_alm.issue_num, today, new_alm.cost, new_alm.angel_coefficient, new_alm.product)
        .send({ from: $scope.account })
        .once('receipt', async function(receipt) {
          var ManifestEvent = receipt.events.ManifestedAngelToken.returnValues;
          var post_uri = 'http://localhost:3000/token_manifest_event/';
          console.log(post_uri);
          $scope.new_token_uri = ManifestEvent[1];
          console.log($scope.new_token_uri);
          // $scope.lastmintData = await web3.eth.abi.decodeParameters('string',MintDataEvent[0]);
          // console.log($scope.lastmintData);
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
