'use strict';

describe('Car list view', function() {

  beforeEach(function() {
    browser.get('/#!/car/list');
  });

  it('should display 2 cars', function() {
    var carList = element.all(by.repeater('car in vm.cars'));
    expect(carList).to.eventually.have.length(2);
  });

  it('should render car specific links', function() {
    element.all(by.repeater('car in vm.cars'))
      .first()
      .element(by.css('a'))
      .click();

    expect(browser.getLocationAbsUrl()).to.eventually.equal('/car/detail/1');
  });

  it('should open new car modal when menu action is clicked', function() {
    $('[zf-open=newCarModal]').click();

    var modal = $('#newCarModal').$('.modal');
    expect(modal.getAttribute('class')).to.eventually.contain('is-active');
  });

  it('should submit new car and refresh the list', function() {
    $('[zf-open=newCarModal]').click();

    element(by.model('vm.newCar.make')).sendKeys('Porsche');
    element(by.model('vm.newCar.model')).sendKeys('911');
    element(by.model('vm.newCar.description')).sendKeys('Porsche 911 SC 3.0L');
    element(by.model('vm.newCar.registrationNumber')).sendKeys('AB-123-CD');

    $('[translate="common.add"]').click();

    var carList = element.all(by.repeater('car in vm.cars'));
    expect(carList).to.eventually.have.length(3);
  });

});
