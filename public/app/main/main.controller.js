'use strict';

angular.module('offerCompareApp')
  .controller('MainCtrl', function ($scope, $http, StateService) {
    $scope.StateService = StateService;
  })
  