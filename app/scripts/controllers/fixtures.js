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

    for(var i = 0; i <= Fixtures.length-1;i++) {

      var teamOne = Fixtures[i].teamOne;
      var teamTwo = Fixtures[i].teamTwo;
      console.log(teamOne);
      console.log(teamTwo);
      var teamOneResult = teamOne.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^\s+|\s+$/, '').replace(/\s+/g, '-').toLowerCase();
      var teamTwoResult = teamTwo.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^\s+|\s+$/, '').replace(/\s+/g, '-').toLowerCase();
      Fixtures[i].teamOneClassName = teamOneResult;
      Fixtures[i].teamTwoClassName = teamTwoResult;

      $scope.newTeamOneClassName = teamOneResult;
      $scope.newTeamTwoClassName = teamTwoResult;
    }

    $scope.remove = function(index) {
      $scope.fixtures.splice(index, 1);
    };
  });
