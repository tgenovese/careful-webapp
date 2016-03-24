describe('CarListController', function() {
  'use strict';

  var $httpBackend, WS_ROOT, createController;

  beforeEach(module('controllers', 'app.config'));

  beforeEach(inject(function(_$httpBackend_, $controller, _WS_ROOT_) {
    $httpBackend = _$httpBackend_;
    WS_ROOT = _WS_ROOT_;

    // backend definition common for all tests
    $httpBackend
      .whenRoute('GET', WS_ROOT + '/car')
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

    $httpBackend
      .whenRoute('POST', WS_ROOT + '/car')
      .respond(function(method, url, data, headers, params_) {
        return [200, {
          make: 'Mazda',
          model: 'MX-5',
          boughtOn: '2015-02-17T00:00:00.000Z',
          id: 42
        }];
      });

    createController = function() {
      return $controller('CarListController');
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should create "cars" model with 2 cars', function() {
    $httpBackend.expectRoute('GET', WS_ROOT + '/car');
    var ctrl_ = createController();
    expect(ctrl_.cars).to.be.empty;
    $httpBackend.flush();
    expect(ctrl_.cars).to.have.length(2);
  });

  it('should add default new car in scope', function() {
    var ctrl_ = createController();
    $httpBackend.flush();
    expect(ctrl_.newCar).to.be.an('object');
    expect(ctrl_.newCar).to.contain.all.keys(['firstRegistration', 'boughtOn']);
  });

  it('addCar should POST new car and then refresh the list', function() {
    $httpBackend.expectRoute('POST', WS_ROOT + '/car');
    $httpBackend.expectRoute('GET', WS_ROOT + '/car');
    var ctrl_ = createController();
    var car = ctrl_.addCar();
    $httpBackend.flush();
    expect(car.id).to.equal(42);
  });

});
