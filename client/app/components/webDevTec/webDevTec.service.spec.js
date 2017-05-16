(function() {
  'use strict';

  describe('service webDevTec', function() {
    var webDevTec;
    var $httpBackend;
    var $log;

    beforeEach(module('sartorial.components'));
    beforeEach(inject(function(_webDevTec_, _$httpBackend_, _$log_) {
      webDevTec = _webDevTec_;
      $httpBackend = _$httpBackend_;
      $log = _$log_;
    }));

    it('should be registered', function() {
      expect(webDevTec).not.toEqual(null);
    });

    describe('jsonUrl variable', function() {
      expect(webDevTec.jsonUrl).not.toEqual(null);
    })

    describe('getTec function', function() {
      it('should exist', function() {
        expect(webDevTec.getTec).not.toEqual(null);
      });

      it('should return data', function() {
        $httpBackend.when('GET',  webDevTec.jsonUrl + '/webDevTec.json').respond(200, [{pprt: 'value'}]);
        var data;
        webDevTec.getTec().then(function(fetchedData) {
          data = fetchedData;
        });
        $httpBackend.flush();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
      });

      // TODO: Finish Test
    });
  });
})();
