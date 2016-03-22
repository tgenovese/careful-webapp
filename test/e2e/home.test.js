'use strict';

describe('Home view', function() {

  it('should redirect / to /car/list', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).to.eventually.equal('/car/list');
  });

});
