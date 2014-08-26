var app = angular.module('offerCompareApp.directives', [])

app.directive('container', function (){
    return {
      restrict: 'E',
      templateUrl: "app/main/Templates/container.tmpl.html"
    }
  });