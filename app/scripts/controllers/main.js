'use strict';

/**
 * @ngdoc function
 * @name worldCupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the worldCupApp
 */
angular.module('worldCupApp')
  .controller('MainCtrl', function ($scope, Fixtures) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var date = new Date(),
      day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear(),
      today = new Date(year,month,day);

    function getTime( date ) {
      var _date = date.split('/');
      return new Date(_date[2],_date[1]-1,_date[0]).getTime();
    }

    for(var i = 0; i <= Fixtures.length-1;i++) {

      var fixtureDate = getTime(Fixtures[i].date);
      $scope.Fixtures = Fixtures;

      if( today.getTime() === fixtureDate ) {
        $scope.fixtureToday = true;
        $scope.fixture = Fixtures[i];
        break;
      } else if( today < fixtureDate ) {
        $scope.fixtureToday = false;
        $scope.fixture = Fixtures[i];
        break;
      }

    }
  });
