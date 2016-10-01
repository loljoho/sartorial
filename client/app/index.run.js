(function() {
  'use strict';

  angular
    .module('sartorial')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
