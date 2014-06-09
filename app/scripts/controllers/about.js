'use strict';

/**
 * @ngdoc function
 * @name worldCupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the worldCupApp
 */
angular.module('worldCupApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
