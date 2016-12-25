'use strict';

describe('Controller: AddmodCtrl', function () {

  // load the controller's module
  beforeEach(module('bkfoodadminApp'));

  var AddmodCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddmodCtrl = $controller('AddmodCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddmodCtrl.awesomeThings.length).toBe(3);
  });
});
