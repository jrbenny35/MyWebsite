'use strict';

describe('Controller: ContactAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ContactAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactAddCtrl = $controller('ContactAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactAddCtrl.awesomeThings.length).toBe(3);
  });
});
