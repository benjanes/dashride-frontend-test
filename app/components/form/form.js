angular.module('form', [])

.controller('formCtrl', ['$scope', '$location', function($scope, $location) {

  $scope.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  $scope.submitDate = function(isValid) {
    if (isValid) {
      var newPath = '/' + (parseInt($scope.date.month) + 1) + '/' + $scope.date.day + '/' + $scope.date.year;
      $location.path(newPath);
    }
  }
}]);
