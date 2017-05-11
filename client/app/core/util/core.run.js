(function() {
  'use strict';

  angular
    .module('sartorial.core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
