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

    console.log(Fixtures[0].teamOne);

    var d = new Date();
    var currDate = d.getDate();
    var currMonth = d.getMonth() + 1; //Months are zero based
    var currYear = d.getFullYear();
    if(currMonth < 10) {
      currMonth = '0' + currMonth;
    }
    var currDay = currDate + '/' + currMonth + '/' + currYear;
    console.log(currDay);

    $scope.todaysGames = [];

    for(var i = 0; i <= Fixtures.length-1;i++) {

      var fixtureDate = Fixtures[i].date;

      var teamOne = Fixtures[i].teamOne;
      var teamTwo = Fixtures[i].teamTwo;
      var teamOneResult = teamOne.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^\s+|\s+$/, '').replace(/\s+/g, '-').toLowerCase();
      var teamTwoResult = teamTwo.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^\s+|\s+$/, '').replace(/\s+/g, '-').toLowerCase();
      Fixtures[i].teamOneClassName = teamOneResult;
      Fixtures[i].teamTwoClassName = teamTwoResult;

      if( currDay === fixtureDate ) {
        $scope.todaysGames.push(  Fixtures[i] );
        document.querySelector('.nothing').style.display='none';
      }

    }
  });
