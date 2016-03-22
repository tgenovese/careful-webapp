'use strict';

describe('Home view', function() {

  it('should redirect / to /car/list', function() {
    browser.get('/');
    browser.getLocationAbsUrl().then(function(url) {
      expect(url).to.equal('/car/list');
    });
  });

});
