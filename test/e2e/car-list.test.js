'use strict';

describe('Car list view', function() {

  beforeEach(function() {
    browser.get('/#!/car/list');
  });

  it('should display 2 cars', function() {
    var carList = element.all(by.repeater('car in vm.cars'));
    expect(carList).to.eventually.have.length(2);
  });

});
