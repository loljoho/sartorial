(function() {
  'use strict';

  angular
    .module('sartorial.components')
    .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec($resource) {
    var url = 'assets/data/:resource.json';

    var paramDefaults = {
      resource: '@resource'
    };

    var actions = {
      get: {
        method: 'GET',
        cache: true
      },
      getTec: {
        method: 'GET',
        cache: true,
        params: {
          resource: 'webDevTec'
        },
        transformResponse: function(data) {
          return angular.fromJson(data);
        }
      }
    };

    return $resource(url, paramDefaults, actions);

  }
})();
