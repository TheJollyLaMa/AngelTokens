app.controller("TreasureChestController", ["$scope", "BlockFactory", function ($scope, BlockFactory) {
  $scope.loadTheBlock = async function () {
    const web3 = window.web3;
    $scope.AngelTokenjson = await BlockFactory.FetchTokenJSON();
    $scope.account = await web3.eth.getAccounts().then(function(accounts){return accounts[0];});
    $scope.display_account = $scope.account.toString().substring(0,4) + "   ....   " + $scope.account.toString().substring($scope.account.toString().length - 4);
    $scope.AngelTokenContract = await web3.eth.net.getId().then(function(net_id){
       if($scope.AngelTokenjson.networks[net_id]) { console.log("Angel Token Contract Address: " + $scope.AngelTokenjson.networks[net_id].address);
         var c = new web3.eth.Contract($scope.AngelTokenjson.abi,$scope.AngelTokenjson.networks[net_id].address);
        return c;
      }else{return $window.alert("Smart contract not connected to selected network.")}
     });
    // $scope.blockNum = await web3.eth.getBlockNumber();
    $scope.totalAlms = await $scope.AngelTokenContract.methods.getAlmsLength().call().then((len) => {return len;});
    $scope.AngelTokens = await $scope.fetchAlms();
    $scope.$digest();
   }
   // $scope.AngelTokensManifested = async function () {$scope.token = await $scope.AngelTokenContract.methods.ManifestedAngelTokens().call();console.log($scope.token);};

}]);
