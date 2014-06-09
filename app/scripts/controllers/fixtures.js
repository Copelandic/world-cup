'use strict';

/**
 * @ngdoc function
 * @name worldCupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the worldCupApp
 */
angular.module('worldCupApp')
  .controller('FixturesCtrl', function ($scope, Fixtures) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.fixtures = Fixtures;

    $scope.add = function() {
      $scope.fixtures.push({
        teamOne: $scope.newTeamOne,
        teamOneClassName: $scope.newTeamOneClassName,
        teamTwo: $scope.newTeamTwo,
        teamTwoClassName: $scope.newTeamTwoClassName,
        date: $scope.newDate,
        location: $scope.newDocation,
        kickoff: $scope.newKickoff,

      });
      $scope.newTeamOne = '';
      $scope.newTeamTwo = '';
      $scope.newDate = '';
      $scope.newLocation = '';
      $scope.newKickoff = '';
      $scope.newTeamOneClassName = '';
      $scope.newTeamTwoClassName = '';
    };

    $scope.remove = function(index) {
      $scope.fixtures.splice(index, 1);
    };
  });
