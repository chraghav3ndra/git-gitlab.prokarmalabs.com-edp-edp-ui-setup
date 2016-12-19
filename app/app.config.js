'use strict';

/**
 * @ngdoc overview
 * @name edpApp
 * @description
 * # edpApp
 *
 * Main module of the application.
 */
angular
  .module('edpApp', [
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize'
  ]);
  angular
    .module("edpApp")
    .config(edpRouter);

    function edpRouter($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/home");

      $stateProvider
        .state("home", {
          url: "/home",
          controller: "HomeController",
          controllerAs: "home",
          templateUrl: "home/home.view.html"
        });
    }
