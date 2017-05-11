(function() {
  'use strict';

  angular
    .module('sartorial.core')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig(routeHelperProvider) {

    /** @ngInject */
    var resolveAlways = {
    //  ready: function(dataservice) {
    //    return dataservice.ready();
    //  }
    };

    routeHelperProvider.configure({
    //  docTitle: '',
      resolveAlways: resolveAlways
    });

  }

})();
