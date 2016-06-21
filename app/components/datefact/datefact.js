angular.module('datefact', [])

.controller('datefactCtrl', ['$scope', '$routeParams', 'dateFacts', function($scope, $routeParams, dateFacts) {
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  var isValid = dateFacts.validateParams(params);
  

  $scope.date = {
    month: months[$routeParams.month - 1],
    day: $routeParams.day,
    year: $routeParams.year
  };

  $scope.age = dateFacts.calcBDay($routeParams.year, $routeParams.month, $routeParams.day);
  
  dateFacts.getFact($routeParams.month, $routeParams.day)
  .then(function(fact) {
    $scope.fact = fact;
  });
}]);
