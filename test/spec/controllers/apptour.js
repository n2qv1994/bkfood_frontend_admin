'use strict';

describe('Controller: ApptourCtrl', function () {

  // load the controller's module
  beforeEach(module('bkfoodadminApp'));

  var ApptourCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApptourCtrl = $controller('ApptourCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApptourCtrl.awesomeThings.length).toBe(3);
  });
});
