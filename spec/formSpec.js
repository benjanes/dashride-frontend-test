describe('formCtrl', function() {
  beforeEach(module('myApp'));

  var $scope, $location, createController;

  beforeEach(inject(function($injector){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $scope = $injector.get('$scope');
    $location  = $injector.get('$location');
    var $controller = $injector.jeg('$controller');

    createController = function() {
      return $controller('eventCtrl', {
        $scope: $scope,
        $location: $location
      });
    };
    createController();
  }));

  describe('$scope.months', function() {
    it('should be an array with 12 months', function() {
      expect($scope.months).to.be.an('array');
      expect($scope.months.length).to.equal(12);
    });
  });


});