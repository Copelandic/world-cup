'use strict';

angular.module('worldCupApp')
  .factory('Fixtures', function () {

    var fix = {};

    fix.teams = ['Brazil', 'Croatia', 'Mexico', 'Cameroon', 'Spain', 'Netherlands', 'Chile', 'Australia', 'Colombia', 'Greece', 'Ivory Coast', 'Japan', 'Uruguay', 'Costa Rica', 'England', 'Italy', 'Switzerland', 'Ecuador', 'France', 'Honduras', 'Argentina', 'Bosnia & Herzegovina', 'Iran', 'Nigera', 'Germany', 'Portugal', 'Ghana', 'United States', 'Belgium', 'Algeria', 'Russia', 'South Korea'];
    fix.stadium = ['Arena de São Paulo, São Paulo', 'Estádio das Dunas, Natal', 'Arena Fonte Nova, Salvador', 'Arena Pantanal, Cuiabá', 'Estádio Mineirão, Belo Horizonte', 'Arena Pernambuco, Recife', 'Estádio Castelão, Fortaleza', 'Arena Amazônia, Manaus', 'Estádio Nacional Mané Garrincha, Brasília', 'Estádio Beira-Rio, Porto Alegre', 'Estádio do Maracanã, Rio de Janeiro', 'Arena da Baixada, Curitiba'];
    fix.channels = ['BBC One', 'ITV', 'BBC Three', 'ITV 4'];


    return [
      {teamOne: 'Brazil', teamTwo: 'Croatia', date: '12/06/2014', location: fix.stadium[0], kickoff: '21:00', channel: 'ITV'},
      {teamOne: 'Mexico', teamTwo: 'Cameroon', date: '13/06/2014', location: fix.stadium[1], kickoff: '17:00', channel: 'ITV'},
      {teamOne: 'Spain', teamTwo: 'Netherlands', date: '13/06/2014', location: fix.stadium[2], kickoff: '20:00', channel: 'BBC One'},
      {teamOne: 'Chile', teamTwo: 'Australia', date: '13/06/2014', location: fix.stadium[3], kickoff: '23:00', channel: 'ITV'},
      {teamOne: 'Colombia', teamTwo: 'Greece', date: '14/06/2014', location: fix.stadium[4], kickoff: '17:00', channel: 'BBC One'},
      {teamOne: 'Ivory Coast', teamTwo: 'Japan', date: '14/06/2014', location: fix.stadium[5], kickoff: '02:00', channel: 'ITV'},
      {teamOne: 'Uruguay', teamTwo: 'Costa Rica', date: '14/06/2014', location: fix.stadium[6], kickoff: '20:00', channel: 'BBC One'},
      {teamOne: 'England', teamTwo: 'Italy', date: '14/06/2014', location: fix.stadium[7], kickoff: '23:00', channel: 'BBC One'},
      {teamOne: 'Switzerland', teamTwo: 'Ecuador', date: '15/06/2014', location: fix.stadium[8], kickoff: '17:00', channel: 'ITV'},
      {teamOne: 'France', teamTwo: 'Honduras', date: '15/06/2014', location: fix.stadium[9], kickoff: '20:00', channel: 'BBC One'},
      {teamOne: 'Argentina', teamTwo: 'Bosnia & Herzegovina', date: '15/06/2014', location: fix.stadium[10], kickoff: '23:00', channel: 'BBC One'},
      {teamOne: 'Iran', teamTwo: 'Nigeria', date: '16/06/2014', location: fix.stadium[11], kickoff: '20:00', channel: 'BBC One'},
      {teamOne: 'Germany', teamTwo: 'Portugal', date: '16/06/2014', location: fix.stadium[2], kickoff: '17:00', channel: 'ITV'},
      {teamOne: 'Ghana', teamTwo: 'United States', date: '16/06/2014', location: fix.stadium[1], kickoff: '23:00', channel: 'BBC One'},
      {teamOne: 'Belgium', teamTwo: 'Algeria', date: '17/06/2014', location: fix.stadium[4], kickoff: '17:00', channel: 'ITV'},
      {teamOne: 'Russia', teamTwo: 'South Korea', date: '17/06/2014', location: fix.stadium[3], kickoff: '23:00', channel: 'BBC One'},
      {teamOne: 'Brazil', teamTwo: 'Mexico', date: '17/06/2014', location: fix.stadium[6], kickoff: '20:00', channel: 'BBC One'},
      {teamOne: 'Cameroon', teamTwo: 'Croatia', date: '18/06/2014', location: fix.stadium[7], kickoff: '23:00', channel: 'ITV'},
      {teamOne: 'Spain', teamTwo: 'Chile', date: '18/06/2014', location: fix.stadium[10], kickoff: '20:00', channel: 'BBC One'},
      {teamOne: 'Australia', teamTwo: 'Netherlands', date: '18/06/2014', location: fix.stadium[9], kickoff: '17:00', channel: 'ITV'},
      {teamOne: 'Colombia', teamTwo: 'Ivory Coast', date: '19/06/2014', location: fix.stadium[8], kickoff: '17:00', channel: 'BBC One'},
      {teamOne: 'Japan', teamTwo: 'Greece', date: '19/06/2014', location: fix.stadium[1], kickoff: '23:00', channel: 'BBC One'},
      {teamOne: 'Uruguay', teamTwo: 'England', date: '19/06/2014', location: fix.stadium[0], kickoff: '20:00', channel: 'ITV'},
      {teamOne: 'Italy', teamTwo: 'Costa Rica', date: '20/06/2014', location: fix.stadium[5], kickoff: '17:00', channel: 'BBC One'},
      {teamOne: 'Switzerland', teamTwo: 'France', date: '20/06/2014', location: fix.stadium[2], kickoff: '20:00', channel: 'ITV'},
      {teamOne: 'Honduras', teamTwo: 'Ecuador', date: '20/06/2014', location: fix.stadium[11], kickoff: '23:00', channel: 'ITV'},
      {teamOne: 'Argentina', teamTwo: 'Iran', date: '21/06/2014', location: fix.stadium[4], kickoff: '17:00', channel: 'ITV'},
      {teamOne: 'Nigera', teamTwo: 'Bosnia & Herzegovina', date: '21/06/2014', location: fix.stadium[3], kickoff: '23:00', channel: 'BBC One'},
      {teamOne: 'Germany', teamTwo: 'Ghana', date: '21/06/2014', location: fix.stadium[6], kickoff: '20:00', channel: 'BBC One'},
      {teamOne: 'United States', teamTwo: 'Portugal', date: '22/06/2014', location: fix.stadium[7], kickoff: '23:00', channel: 'BBC One'},
      {teamOne: 'Belgium', teamTwo: 'Russia', date: '22/06/2014', location: fix.stadium[10], kickoff: '17:00', channel: 'BBC One'},
      {teamOne: 'South Korea', teamTwo: 'Algeria', date: '22/06/2014', location: fix.stadium[9], kickoff: '20:00', channel: 'ITV'},
      {teamOne: 'Cameroon', teamTwo: 'Brazil', date: '23/06/2014', location: fix.stadium[8], kickoff: '21:00', channel: 'ITV'},
      {teamOne: 'Croatia', teamTwo: 'Mexico', date: '23/06/2014', location: fix.stadium[5], kickoff: '21:00', channel: 'ITV 4'},
      {teamOne: 'Australia', teamTwo: 'Spain', date: '23/06/2014', location: fix.stadium[11], kickoff: '17:00', channel: 'ITV'},
      {teamOne: 'Netherlands', teamTwo: 'Chile', date: '23/06/2014', location: fix.stadium[0], kickoff: '17:00', channel: 'ITV 4'},
      {teamOne: 'Japan', teamTwo: 'Colombia', date: '24/06/2014', location: fix.stadium[3], kickoff: '21:00', channel: 'BBC One'},
      {teamOne: 'Ivory Coast', teamTwo: 'Greece', date: '24/06/2014', location: fix.stadium[6], kickoff: '21:00', channel: 'BBC Three'},
      {teamOne: 'Italy', teamTwo: 'Uruguay', date: '24/06/2014', location: fix.stadium[1], kickoff: '17:00', channel: 'ITV 4'},
      {teamOne: 'Costa Rica', teamTwo: 'England', date: '24/06/2014', location: fix.stadium[4], kickoff: '17:00', channel: 'ITV'},
      {teamOne: 'Honduras', teamTwo: 'Switzerland', date: '25/06/2014', location: fix.stadium[7], kickoff: '21:00', channel: 'BBC Three'},
      {teamOne: 'Ecuador', teamTwo: 'France', date: '25/06/2014', location: fix.stadium[10], kickoff: '21:00', channel: 'BBC One'},
      {teamOne: 'Nigeria', teamTwo: 'Argentina', date: '25/06/2014', location: fix.stadium[9], kickoff: '17:00', channel: 'ITV'},
      {teamOne: 'Bosnia & Herzegovina', teamTwo: 'Iran', date: '25/06/2014', location: fix.stadium[2], kickoff: '17:00', channel: 'ITV 4'},
      {teamOne: 'United States', teamTwo: 'Germany', date: '26/06/2014', location: fix.stadium[5], kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Portugal', teamTwo: 'Ghana', date: '26/06/2014', location: fix.stadium[8], kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'South Korea', teamTwo: 'Belgium', date: '26/06/2014', location: fix.stadium[0], kickoff: '21:00', channel: 'ITV'},
      {teamOne: 'Algeria', teamTwo: 'Russia', date: '26/06/2014', location: fix.stadium[11], kickoff: '21:00', channel: 'ITV 4'}
    ];

  });



