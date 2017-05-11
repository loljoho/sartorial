(function() {
  'use strict';

  angular
    .module('sartorial.tech')
    .controller('TechController', TechController);

  /** @ngInject */
  function TechController($log) {
    var vm = this;

    activate();

    function activate() {
      $log.info('TechController activated');
    }
  }

})();
