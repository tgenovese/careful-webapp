describe('CarDetailController', function() {
  'use strict';

  var $httpBackend, $stateParams, WS_ROOT, createController, carRequestHandler_;

  beforeEach(module('controllers', 'app.config'));

  beforeEach(inject(function(_$httpBackend_, $controller, _WS_ROOT_) {
    $httpBackend = _$httpBackend_;
    WS_ROOT = _WS_ROOT_;

    $stateParams = {id: 2};

    // backend definition common for all tests
    carRequestHandler_ = $httpBackend
      .whenRoute('POST', WS_ROOT + '/car/:id/fillUps')
      .respond(function(method, url, data, headers, params) {
        return [200, {
          fillUps: [
            {
              car: Number(params.id),
              when: '2016-03-15T12:42:00.000Z',
              volume: 32,
              price: 45,
              distanceCovered: 400,
              fullTank: true,
              id: 1
            },
            {
              car: Number(params.id),
              when: '2016-03-15T12:54:00.000Z',
              volume: 32,
              price: 45,
              distanceCovered: 400,
              fullTank: true,
              id: 2
            }
          ],
          make: 'Mazda',
          model: 'MX-5',
          id: Number(params.id)
        }];
      });

    createController = function() {
      return $controller('CarDetailController', {$stateParams: $stateParams});
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should add current carId in scope', function() {
    var ctrl_ = createController();
    expect(ctrl_.carId).to.equal($stateParams.id);
  });

  it('should add default new fillUp in scope', function() {
    var ctrl_ = createController();
    expect(ctrl_.fillUp).to.be.an('object');
    expect(ctrl_.fillUp).to.contain.all.keys(['car', 'when', 'volume', 'price', 'distanceCovered', 'fullTank']);
  });

  it('addFillUp should POST new fillUp', function() {
    $httpBackend.expectRoute('POST', WS_ROOT + '/car/:id/fillUps');
    var ctrl_ = createController();
    var car = ctrl_.addFillUp(ctrl_.fillUp);
    $httpBackend.flush();
    expect(car.id).to.equal($stateParams.id);
  });

});
