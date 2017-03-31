var app = angular.module('app', ['ngRoute']);



app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/logReg.html'
  })
  .when('/bids', {
    templateUrl: 'partials/bids.html'
  })
  .when('/result', {
    templateUrl: 'partials/result.html'
  })
  .otherwise( {
    redirectTo: '/'
  })
})
