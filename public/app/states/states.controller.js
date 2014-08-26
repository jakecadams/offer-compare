'use strict';

angular.module('offerCompareApp')
  .controller('statesController', function ($scope, $http) {
    $scope.list = [];

    $scope.getList = function(){
      $http.get('/api/state').success(function(states) {
        console.log(states);
        $scope.list = states;
      });
    }

  });