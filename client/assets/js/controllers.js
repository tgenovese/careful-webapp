(function(angular, moment) {
  'use strict';

  var carefulCtrls = angular.module('controllers', ['pascalprecht.translate', 'foundation.core', 'services']);

  carefulCtrls.controller('CarListController', CarListController);
  CarListController.$inject = ['FoundationApi', 'Car'];
  function CarListController(FoundationApi, Car) {
    var vm = this;
    this.cars = Car.query({sort: 'boughtOn'});

    this.newCar = {
      firstRegistration: moment().utc().startOf('year').subtract(10, 'years').toDate(),
      boughtOn: moment().utc().startOf('month').toDate(),
      initialMileage: 100000,
      stillMine: true
    };

    this.addCar = function addCar() {
      return Car.save(this.newCar, function() {
        vm.cars = Car.query({sort: 'boughtOn'});
        FoundationApi.closeActiveElements('newCarModal');
      });
    };
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
