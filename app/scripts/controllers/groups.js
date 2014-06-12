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
        teamClass: $scope.newTeamClass,
      });
      $scope.newTeam = '';
      $scope.newTeamClass = '';
    };

    for(var i = 0; i <= Teams.length-1;i++) {

      var team = Teams[i].team;
      console.log(team);
      var teamResult = team.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^\s+|\s+$/, '').replace(/\s+/g, '-').toLowerCase();
      Teams[i].teamClass = teamResult;

      $scope.newTeamClass = teamResult;
    }

    $scope.remove = function(index) {
      $scope.teams.splice(index, 1);
    };
  });
