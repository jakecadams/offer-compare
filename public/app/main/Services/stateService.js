angular.module('offerCompareApp.services', [])
  .service("StateService", function ($http) {

    this.getStates = function(){
      return $http.get('/api/state').success(function(states) {
        return states;
      });

    }

    this.getCities = function(stateId){
      return $http.get('/api/city?id='+stateId).success(function(cities) {
        return cities;
      });

    }  
  })
  .service("mainService", function ($http) {

    this.presentLocation = {};
        
  });