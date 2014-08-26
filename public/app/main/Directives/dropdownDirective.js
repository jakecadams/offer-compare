angular.module('offerCompareApp.directives', [])
  .directive('dropdownState', function (StateService, mainService){
    return {
      restrict: 'E',
      scope: {
        present : '=present'
      },
      templateUrl: "app/main/Templates/dropdown-directive.tmpl.html",
      link: function(scope, element, attrs){
          scope.offer = {
            salary: 50000
          }

          if(scope.present){
            scope.showIt = false;
            scope.showConversion = false;
          } else {
            scope.showIt = true;
          }

          scope.change = function(){
            scope.presentLocation = mainService.presentLocation;
            scope.conversion = convert("index");
            scope.showConversion = true;
          }

          var convert = function(param){
            var presentIndex = scope.presentLocation.city[param];
            var futureIndex = scope.currentCity[param];
            var salary = parseFloat(scope.offer.salary);
            console.log(presentIndex);
            console.log(futureIndex);

            return salary + (((presentIndex-futureIndex)/futureIndex) * salary);
          }

          scope.currentState = {name:"State"};
          scope.getStates = function(){
                            StateService.getStates()
                              .then(function (data){
                                scope.states = data.data;
                              })
                              .catch(function (error) {
                                console.error(error);
                              });
                          }

          scope.getStates();
          scope.selectState = function(state){
            scope.currentState = state;
            scope.getCities(scope.currentState.id);
            if(scope.present){
              mainService.presentLocation.state = state;
            }
          }

          scope.currentCity = {name:"City"};
          scope.getCities = function(stateId){
                            StateService.getCities(stateId)
                              .then(function (data){
                                scope.cities = data.data;
                              })
                              .catch(function (error) {
                                console.error(error);
                              });
                          }

          scope.selectCity = function(city){
            scope.currentCity = city;
            if(scope.present){
              mainService.presentLocation.city = city;
            }
          }

      }
    }
  });


