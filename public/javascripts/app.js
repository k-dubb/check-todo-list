(function() {
    var app = angular.module('Check', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    // home page
      .state('home', {
        url: '/',
        templateUrl: '/templates/_homeView.html'
      })
      // show user's to-do lists
      .state('user', {
        url: '/user',
        templateUrl: '/templates/_userView.html'
      })
      // build your own to-do list
      .state('create', {
        url: '/user/create',
        templateUrl: '/templates/_createView.html'
      })
  });


})();