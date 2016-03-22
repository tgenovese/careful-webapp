describe('CarListController', function() {
  'use strict';

  var $httpBackend, WS_ROOT, createController, carRequestHandler_;

  beforeEach(module('controllers', 'app.config'));

  beforeEach(inject(function(_$httpBackend_, $controller, _WS_ROOT_) {
    $httpBackend = _$httpBackend_;
    WS_ROOT = _WS_ROOT_;

    // backend definition common for all tests
    carRequestHandler_ = $httpBackend
      .when('GET', WS_ROOT + '/car?sort=boughtOn')
      .respond([
        {
          make: 'Subaru',
          model: 'Impreza',
          boughtOn: '2013-01-02T00:00:00.000Z'
        },
        {
          make: 'Mazda',
          model: 'MX-5',
          boughtOn: '2015-02-17T00:00:00.000Z'
        }
      ]);

    createController = function() {
      return $controller('CarListController');
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should create "cars" model with 2 cars', function() {
    $httpBackend.expectGET(WS_ROOT + '/car?sort=boughtOn');
    var ctrl_ = createController();
    expect(ctrl_.cars).to.be.empty;
    $httpBackend.flush();
    expect(ctrl_.cars).to.have.length(2);
  });

});
