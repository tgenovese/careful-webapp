'use strict';

describe('Car detail view', function() {

  beforeEach(function() {
    browser.get('/#!/car/detail/1');
  });

  it('should display detail page of car with specified id', function() {
    expect(element(by.binding('carId')).getText()).to.eventually.equal('1');
  });

});
