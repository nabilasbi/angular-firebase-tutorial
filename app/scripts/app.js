'use strict';

/**
 * @ngdoc overview
 * @name angularFirebaseTutorialApp
 * @description
 * # angularFirebaseTutorialApp
 *
 * Main module of the application.
 */
angular
  .module('angularFirebaseTutorialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
