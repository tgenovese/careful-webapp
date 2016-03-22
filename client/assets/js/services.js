(function(angular) {
  'use strict';

  var carefulServices = angular.module('services', ['ngResource', 'app.config'])
    .constant('CAR_WS', '/car/:carId');

  carefulServices.factory('Car', Car);
  Car.$inject = ['$resource', 'WS_ROOT', 'CAR_WS'];
  function Car($resource, WS_ROOT, CAR_WS) {
    return $resource(WS_ROOT + CAR_WS, {carId: '@id'});
  }
})(angular);
