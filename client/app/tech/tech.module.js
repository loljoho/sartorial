(function() {
  'use strict';

  angular
    .module('sartorial.tech', [])
    .run(runBlock);

  /** @ngInject */
  function runBlock(routeHelper) {
    routeHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'tech',
        config: {
          url: '/',
          templateUrl: 'app/tech/tech.html',
          controller: 'TechController',
          controllerAs: 'tech',
          docTitle: 'Technology',
          bodyClass: 'tech',
          resolve: {
            tech: function(webDevTec) {
              return webDevTec.getTec().$promise.then(function(response) {
                return response;
              });
            }
          }
        }
      }
    ];
  }

})();
