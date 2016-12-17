'use strict';

/**
 * @ngdoc overview
 * @name bkfoodadminApp
 * @description
 * # bkfoodadminApp
 *
 * Main module of the application.
 */
angular
  .module('bkfoodadminApp', [
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
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl',
        controllerAs: 'report'
      })
      .when('/apptour', {
        templateUrl: 'views/apptour.html',
        controller: 'ApptourCtrl',
        controllerAs: 'apptour'
      })
      .when('/charts', {
        templateUrl: 'views/charts.html',
        controller: 'ChartsCtrl',
        controllerAs: 'charts'
      })
      .when('/management', {
        templateUrl: 'views/management.html',
        controller: 'ManagementCtrl',
        controllerAs: 'management'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/addmod', {
        templateUrl: 'views/addmod.html',
        controller: 'AddmodCtrl',
        controllerAs: 'addmod'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
