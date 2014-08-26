'use strict';

angular.module('offerCompareApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('states', {
        url: '/',
        templateUrl: 'app/states/states.html',
        controller: 'statesController'
      });
  });