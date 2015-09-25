'use strict';

describe('Controller: ContactDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ContactDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactDeleteCtrl = $controller('ContactDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
