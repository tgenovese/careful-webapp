(function(angular, moment) {
  'use strict';

  var carefulCtrls = angular.module('controllers', ['foundation.core', 'services']);

  carefulCtrls.controller('CarListController', CarListController);
  CarListController.$inject = ['Car'];
  function CarListController(Car) {
    this.cars = Car.query({sort: 'boughtOn'});
  }

  carefulCtrls.controller('CarDetailController', CarDetailController);
  CarDetailController.$inject = ['$stateParams', '$translate', 'FoundationApi', 'Car'];
  function CarDetailController($stateParams, $translate, FoundationApi, Car) {
    this.carId = $stateParams.id;

    this.fillUp = {
      car: this.carId,
      when: moment().startOf('minute').toDate(),
      volume: 32,
      price: 45,
      distanceCovered: 400,
      fullTank: true
    };

    this.addFillUp = function addFillUp() {
      var car = Car.saveFillUp(this.fillUp, function() {
        FoundationApi.publish('main-notifications', {
          title: $translate.instant('fillUp.fillUp'),
          content: $translate.instant('fillUp.newFillUpAdded'),
          color: 'success',
          autoclose: 3000
        });
      });
      return car;
    };
  }
})(angular, moment);
