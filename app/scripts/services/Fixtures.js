'use strict';

angular.module('worldCupApp')
  .factory('Fixtures', function () {

    return [
      {teamOne: 'Brazil', teamOneClassName: 'brazil', teamTwo: 'Croatia', teamTwoClassName: 'croatia', date: '08/06/2014', location: 'Arena de São Paulo, São Paulo', kickoff: '21:00', channel: 'ITV'},
      {teamOne: 'Mexico', teamOneClassName: 'mexico', teamTwo: 'Cameroon', teamTwoClassName: 'cameroon', date: '09/06/2014', location: 'Estádio das Dunas, Natal', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Spain', teamOneClassName: 'spain', teamTwo: 'Netherlands', teamTwoClassName: 'netherlands', date: '09/06/2014', location: 'Arena Fonte Nova, Salvador', kickoff: '20:00', channel: 'BBC'},
      {teamOne: 'Chile', teamOneClassName: 'chile', teamTwo: 'Australia', teamTwoClassName: 'australia', date: '09/06/2014', location: 'Arena Pantanal, Cuiabá', kickoff: '23:00', channel: 'BBC'},
      {teamOne: 'Colombia', teamOneClassName: 'colombia', teamTwo: 'Greece', teamTwoClassName: 'greece', date: '14/06/2014', location: 'Estádio Mineirão, Belo Horizonte', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Ivory Coast', teamOneClassName: 'ivory-coast', teamTwo: 'Japan', teamTwoClassName: 'japan', date: '14/06/2014', location: 'Arena Pernambuco, Recife', kickoff: '02:00', channel: 'BBC'},
      {teamOne: 'Uruguay', teamOneClassName: 'uruguay', teamTwo: 'Costa Rica', teamTwoClassName: 'costa-rica', date: '14/06/2014', location: 'Estádio Castelão, Fortaleza', kickoff: '20:00', channel: 'BBC'},
      {teamOne: 'England', teamOneClassName: 'england', teamTwo: 'Italy', teamTwoClassName: 'italy', date: '14/06/2014', location: 'Arena Amazônia, Manaus', kickoff: '23:00', channel: 'BBC'},
      {teamOne: 'Switzerland', teamOneClassName: 'switzerland', teamTwo: 'Ecuador', teamTwoClassName: 'ecuador', date: '15/06/2014', location: 'Estádio Nacional Mané Garrincha, Brasília', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'France', teamOneClassName: 'france', teamTwo: 'Honduras', teamTwoClassName: 'honduras', date: '15/06/2014', location: 'Estádio Beira-Rio, Porto Alegre', kickoff: '20:00', channel: 'BBC'},
      {teamOne: 'Argentina', teamOneClassName: 'argentina', teamTwo: 'Bosnia and Herzegovina', teamTwoClassName: 'bos-herz', date: '15/06/2014', location: 'Estádio do Maracanã, Rio de Janeiro', kickoff: '23:00', channel: 'BBC'},
      {teamOne: 'Iran', teamOneClassName: 'iran', teamTwo: 'Nigeria', teamTwoClassName: 'nigeria', date: '16/06/2014', location: 'Arena da Baixada, Curitiba', kickoff: '20:00', channel: 'BBC'},
      {teamOne: 'Germany', teamOneClassName: 'germany', teamTwo: 'Portugal', teamTwoClassName: 'portugal', date: '16/06/2014', location: 'Arena Fonte Nova, Salvador', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Ghana', teamOneClassName: 'ghana', teamTwo: 'United States', teamTwoClassName: 'usa', date: '16/06/2014', location: 'Estádio das Dunas, Natal', kickoff: '23:00', channel: 'BBC'},
      {teamOne: 'Belgium', teamOneClassName: 'belgium', teamTwo: 'Algeria', teamTwoClassName: 'algeria', date: '17/06/2014', location: 'Estádio Mineirão, Belo Horizonte', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Russia', teamOneClassName: 'russia', teamTwo: 'South Korea', teamTwoClassName: 'south-korea', date: '17/06/2014', location: 'Arena Pantanal, Cuiabá', kickoff: '23:00', channel: 'BBC'},
      {teamOne: 'Brazil', teamOneClassName: 'brazil', teamTwo: 'Mexico', teamTwoClassName: 'mexico', date: '17/06/2014', location: 'Estádio Castelão, Fortaleza', kickoff: '20:00', channel: 'BBC'},
      {teamOne: 'Cameroon', teamOneClassName: 'cameroon', teamTwo: 'Croatia', teamTwoClassName: 'croatia', date: '18/06/2014', location: 'Arena Amazônia, Manaus', kickoff: '23:00', channel: 'BBC'},
      {teamOne: 'Spain', teamOneClassName: 'spain', teamTwo: 'Chile', teamTwoClassName: 'chile', date: '18/06/2014', location: 'Estádio do Maracanã, Rio de Janeiro', kickoff: '19:00', channel: 'BBC'},
      {teamOne: 'Australia', teamOneClassName: 'australia', teamTwo: 'Netherlands', teamTwoClassName: 'netherlands', date: '18/06/2014', location: 'Estádio Beira-Rio, Porto Alegre', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Colombia', teamOneClassName: 'colombia', teamTwo: 'Ivory Coast', teamTwoClassName: 'ivory-coast', date: '19/06/2014', location: 'Estádio Nacional Mané Garrincha, Brasília', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Japan', teamOneClassName: 'japan', teamTwo: 'Greece', teamTwoClassName: 'greece', date: '19/06/2014', location: 'Estádio das Dunas, Natal', kickoff: '23:00', channel: 'BBC'},
      {teamOne: 'Uruguay', teamOneClassName: 'uruguay', teamTwo: 'England', teamTwoClassName: 'england', date: '19/06/2014', location: 'Arena de São Paulo, São Paulo', kickoff: '20:00', channel: 'BBC'},
      {teamOne: 'Italy', teamOneClassName: 'italy', teamTwo: 'Costa Rica', teamTwoClassName: 'costa-rica', date: '20/06/2014', location: 'Arena Pernambuco, Recife', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Switzerland', teamOneClassName: 'switzerland', teamTwo: 'France', teamTwoClassName: 'france', date: '20/06/2014', location: 'Arena Fonte Nova, Salvador', kickoff: '20:00', channel: 'BBC'},
      {teamOne: 'Honduras', teamOneClassName: 'honduras', teamTwo: 'Ecuador', teamTwoClassName: 'ecuador', date: '20/06/2014', location: 'Arena da Baixada, Curitiba', kickoff: '23:00', channel: 'BBC'},
      {teamOne: 'Argentina', teamOneClassName: 'argentina', teamTwo: 'Iran', teamTwoClassName: 'iran', date: '21/06/2014', location: 'Estádio Mineirão, Belo Horizonte', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Nigera', teamTwo: 'Bosnia and Herzegovina', teamTwoClassName: 'bos-herz', date: '21/06/2014', location: 'Arena Pantanal, Cuiabá', kickoff: '23:00', channel: 'BBC'},
      {teamOne: 'Germany', teamOneClassName: 'germany', teamTwo: 'Ghana', teamTwoClassName: 'ghana', date: '21/06/2014', location: 'Fortaleza', kickoff: '20:00', channel: 'BBC'},
      {teamOne: 'United States', teamOneClassName: 'usa', teamTwo: 'Portugal', teamTwoClassName: 'portugal', date: '22/06/2014', location: 'Manaus', kickoff: '23:00', channel: 'BBC'},
      {teamOne: 'Belgium', teamOneClassName: 'belgium', teamTwo: 'Russia', teamTwoClassName: 'russia', date: '22/06/2014', location: 'Rio de Janeiro', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'South Korea', teamOneClassName: 'south-korea', teamTwo: 'Algeria', teamTwoClassName: 'algeria', date: '22/06/2014', location: 'Porto Alegre', kickoff: '20:00', channel: 'BBC'},
      {teamOne: 'Cameroon', teamOneClassName: 'cameroon', teamTwo: 'Brazil', teamTwoClassName: 'brazil', date: '23/06/2014', location: 'Brasília', kickoff: '21:00', channel: 'BBC'},
      {teamOne: 'Croatia', teamOneClassName: 'croatia', teamTwo: 'Mexico', teamTwoClassName: 'mexico', date: '23/06/2014', location: 'Recife', kickoff: '21:00', channel: 'BBC'},
      {teamOne: 'Australia', teamOneClassName: 'australia', teamTwo: 'Spain', teamTwoClassName: 'spain', date: '23/06/2014', location: 'Curitiba', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Netherlands', teamOneClassName: 'netherlands', teamTwo: 'Chile', teamTwoClassName: 'chile', date: '23/06/2014', location: 'São Paulo', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Japan', teamOneClassName: 'japan', teamTwo: 'Colombia', teamTwoClassName: 'colombia', date: '24/06/2014', location: 'Cuiabá', kickoff: '21:00', channel: 'BBC'},
      {teamOne: 'Ivory Coast', teamOneClassName: 'ivory-coast', teamTwo: 'Greece', teamTwoClassName: 'greece', date: '24/06/2014', location: 'Fortaleza', kickoff: '21:00', channel: 'BBC'},
      {teamOne: 'Italy', teamOneClassName: 'italy', teamTwo: 'Uruguay', teamTwoClassName: 'uruguay', date: '24/06/2014', location: 'Natal', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Costa Rica', teamOneClassName: 'costa-rica', teamTwo: 'England', teamTwoClassName: 'england', date: '24/06/2014', location: 'Belo Horizonte', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Honduras', teamOneClassName: 'honduras', teamTwo: 'Switzerland', teamTwoClassName: 'switzerland', date: '25/06/2014', location: 'Manaus', kickoff: '21:00', channel: 'BBC'},
      {teamOne: 'Ecuador', teamOneClassName: 'ecuador', teamTwo: 'France', teamTwoClassName: 'france', date: '25/06/2014', location: 'Rio de Janeiro', kickoff: '21:00', channel: 'BBC'},
      {teamOne: 'Nigeria', teamOneClassName: 'nigeria', teamTwo: 'Argentina', teamTwoClassName: 'argentina', date: '25/06/2014', location: 'Porto Alegre', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Bosnia and Herzegovina', teamOneClassName: 'bos-herz', teamTwo: 'Iran', teamTwoClassName: 'iran', date: '25/06/2014', location: 'Salvador', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'United States', teamOneClassName: 'usa', teamTwo: 'Germany', teamTwoClassName: 'germany', date: '26/06/2014', location: 'Recife', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'Portugal', teamOneClassName: 'portugal', teamTwo: 'Ghana', teamTwoClassName: 'ghana', date: '26/06/2014', location: 'Brasília', kickoff: '17:00', channel: 'BBC'},
      {teamOne: 'South Korea', teamOneClassName: 'south-korea', teamTwo: 'Belgium', teamTwoClassName: 'belgium', date: '26/06/2014', location: 'São Paulo', kickoff: '21:00', channel: 'BBC'},
      {teamOne: 'Algeria', teamOneClassName: 'algeria', teamTwo: 'Russia', teamTwoClassName: 'russia', date: '26/06/2014', location: 'Curitiba', kickoff: '21:00', channel: 'BBC'}
    ];

  });



