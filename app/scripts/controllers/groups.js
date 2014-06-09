'use strict';

/**
 * @ngdoc function
 * @name worldCupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the worldCupApp
 */
angular.module('worldCupApp')
  .controller('GroupsCtrl', function ($scope, Teams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.teams = Teams;

    $scope.add = function() {
      $scope.teams.push({
        team: $scope.newTeam,
        teamOneClassName: $scope.newTeamOneClassName,
      });
      $scope.newTeam = '';
      $scope.newTeamOneClassName = '';
    };

    $scope.remove = function(index) {
      $scope.teams.splice(index, 1);
    };
  });
