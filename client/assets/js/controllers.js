(function(angular) {
  'use strict';

  var carefulCtrls = angular.module('controllers', ['services']);

  carefulCtrls.controller('CarListController', CarListController);
  CarListController.$inject = ['Car'];
  function CarListController(Car) {
    this.cars = Car.query({sort: 'boughtOn'});
  }
})(angular);
