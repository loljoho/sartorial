'use strict';

angular
  .module('sartorial', [


    //  Common/Shared Modules
    // ------------------------------

    'sartorial.core',
    'sartorial.components',


    //  Feature Area Modules
    // ------------------------------

    'sartorial.main',
    'sartorial.tech'


  ])


  /**
   * Configure some application routes
   */
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    //$stateProvider
    //  .state('home', {
    //    url: '/',
    //    templateUrl: 'app/main/main.html',
    //    controller: 'MainController',
    //    controllerAs: 'main',
    //    resolve: {
    //      $title: function() {
    //        return 'Home';
    //      },
    //      $bodyClass: function() {
    //        return 'page-home';
    //      }
    //    }
    //  });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

  });
