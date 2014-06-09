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

      var matchDate = getTime(Fixtures[i].date);

      if( today.getTime() === matchDate ) {
        $scope.matchToday = true;
        $scope.match = Fixtures[i];
        break;
      } else if( today < matchDate ) {
        $scope.matchToday = false;
        $scope.match = Fixtures[i];
        break;
      }

    }
  });
