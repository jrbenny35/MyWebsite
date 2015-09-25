'use strict';

describe('Controller: ContactViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ContactViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactViewCtrl = $controller('ContactViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactViewCtrl.awesomeThings.length).toBe(3);
  });
});
