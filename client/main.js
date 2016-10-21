var App = angular.module('FriendModule', ['ngRoute']);

App.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/partials/_index.html',
      controller: 'IndexController'
    })
    .when('/new', {
      templateUrl: '/partials/_new.html',
      controller: 'NewController'
    })
    .when('/edit/:id', {
      templateUrl: '/partials/_edit.html',
      controller: 'UpdateController'
    })
    .when('/show/:id', {
      templateUrl: '/partials/_show.html',
      controller: 'ShowController'
    })
    .otherwise({
      redirectTo: '/'
    })
})
