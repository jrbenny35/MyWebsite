'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ContactViewCtrl
 * @description
 * # ContactViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ContactViewCtrl', function (
    $scope,
    $routeParams,
    Contact  ) {

    $scope.viewContact = true;
    $scope.contact = Contact.one($routeParams.id).get().$object;

  });
