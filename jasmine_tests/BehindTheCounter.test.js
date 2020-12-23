describe('BehindTheCounterController', function() {
  beforeEach(module('webApp')); // call the angular app by name
  var $controller, $rootscope;

  beforeEach(inject(function(_$controller_, _$rootScope_){
      $controller = _$controller_;
      $rootScope = _$rootScope_;
  }));

  describe('$scope.test', function() {
    it('tests to check databinding', function() {
      var $scope = $rootScope.$new();
      var controller = $controller('BehindTheCounterController', {$scope: $scope});
      expect($scope.test).toEqual("testing data binding behind the counter");
    });
  });

});
