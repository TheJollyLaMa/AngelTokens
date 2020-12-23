describe('AngelsRoomController', function() {
  beforeEach(module('webApp')); // call the angular app by name
  var $controller, $rootscope;

  beforeEach(inject(function(_$controller_, _$rootScope_){
      $controller = _$controller_;
      $rootScope = _$rootScope_;
  }));

  describe('"Load The Block"', function() {
    it('sanity check on init variables', function () {
      var $scope = $rootScope.$new();
      var controller = $controller('AngelsRoomController', {$scope: $scope});
        expect($scope.test).toBe("testing data binding in the angel's room");
        expect(typeof($scope.newtoken)).toBe('string');
        expect(typeof($scope.ids)).toBe('object');
        expect(typeof($scope.uris)).toBe('object');
        expect(typeof($scope.AngelTokens)).toBe('object');
        expect(typeof($scope.token_ids_owned)).toBe('object');
        expect(typeof($scope.mintDataArray)).toBe('object');
        expect(typeof($scope.new_alm)).toBe('object');
    });
    // it('fetches the token contract json from backend for use in the frontend', function() {
    //     // falls under services.  service needs to be separated from controller
    //     expect($scope.AngelTokenjson).toEqual("");
    // });
    // it('loads web3', function () {
    //
    // });
    // it('loads the first account from web3', function () {
    //
    // });
    // it('makes a variable for displaying account in browser', function () {
    //
    // });
    // it('loads the network id', function () {
    //
    // });
    // it('loads the network data', function () {
    //
    // });
    // it('loads the token contract by abi and address', function () {
    //    // get abi from token json
    //    // get Address from network data
    //    // get contract with abi and address
    // });
    // describe('Fetch the total number of "Alms"', function () {
    //   it('loads the total number of all AngelTokens created from the length of the immutable "Alms" array', function () {
    //       // should be a service with the call "getAlmsLength"
    //   });
    // });
    // describe('Fetch the "Alms"')
    //   it('loads the tokens owned or made by the account grabbed from web3', function () {
    //     //fetch tokens should be a service with the call being "alms.length"
    //   });
  });

  // describe('Manifest New Tokens', function () {
  //     it('uses "tokenGenesis" from smart contract to make a new set of tokens for the grabbed web3 account', function () {
  //       return
  //     }).then(function (receipt) {
  //       // grab the receipt to update the gui in a promise chain
  //       // should be a manifest event with token details
  //       // should be a uri for each token
  //       // and a mintdata event with endeavor details: cost, product, angel's coefficient, mint data
  //     });
  // });
  // // describe('getBalance for sanity check', function () {
  // //   it('should return the ether balance of the account entered', function () {
  // //     //just to have a around and to make sure everything is connected. can get rid of it later
  // //
  // //   })
  // });


});
