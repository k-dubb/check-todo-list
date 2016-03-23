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
      // show a user's names of to-do lists
      .state('user', {
        url: '/user',
        templateUrl: '/templates/_userView.html'
      })
      // show one to-do list
      .state('list', {
        url: '/user/list',
        templateUrl: '/templates/_listView.html'
      })
      // build your own to-do list
      .state('create', {
        url: '/user/create',
        templateUrl: '/templates/_createView.html'
      })
  });


})();