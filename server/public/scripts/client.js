var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/potato' ,{
      templateUrl: '/views/templates/potato.html',
      controller: 'PotatoController',
      controllerAs: 'potato'
    })
    .otherwise({
      redirectTo: 'home'
    });

  $locationProvider.html5Mode(true);
}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('PotatoController', function() {
  console.log('potato controller running');
  var self = this;
  self.message = "Potato controller is the best!";

});
