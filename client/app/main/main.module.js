(function() {
  'use strict';

  angular
    .module('sartorial.main', [])
    .run(routeRunBlock);

  /** @ngInject */
  function routeRunBlock(routeHelper) {
    routeHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'main',
        config: {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main',
          docTitle: 'Home Page',
          bodyClass: 'home',
          resolve: {
            tech: function(webDevTec) {
              return webDevTec.getTec();
            }
          }
        }
      }
    ];
  }

})();
