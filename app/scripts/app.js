/* global app:true */
'use strict';

/**
 * @ngdoc overview
 * @name angularFirebaseTutorialApp
 * @description
 * # angularFirebaseTutorialApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angularFirebaseTutorialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'h ttps://boiling-fire-2316.firebaseio.com/');

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
