(function(angular) {
  'use strict';

  var carefulServices = angular.module('services', ['ngResource', 'app.config'])
    .constant('CAR_WS', '/car/:carId')
    .constant('FILLUP_WS', '/car/:carId/fillUps/:fillUpId');

  carefulServices.factory('Car', Car);
  Car.$inject = ['$resource', 'WS_ROOT', 'CAR_WS', 'FILLUP_WS'];
  function Car($resource, WS_ROOT, CAR_WS, FILLUP_WS) {
    return $resource(WS_ROOT + CAR_WS, {carId: '@id'}, {
      listFillUps: {
        method: 'GET',
        url: WS_ROOT + FILLUP_WS,
        isArray: true
      },
      saveFillUp: {
        method: 'POST',
        url: WS_ROOT + FILLUP_WS,
        params: {carId: '@car', fillUpId: '@id'}
      }
    });
  }
})(angular);
