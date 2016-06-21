'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'form',
  'datefact',
  'services'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/', {
      templateUrl: 'components/form/form.html',
      controller: 'formCtrl'
    })
    .when('/:month/:day/:year', {
      templateUrl: 'components/datefact/datefact.html',
      controller: 'datefactCtrl'
    })
    .otherwise({ redirectTo: '/' });
}]);
