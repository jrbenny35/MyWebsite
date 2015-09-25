'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ContactDeleteCtrl
 * @description
 * # ContactDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ContactDeleteCtrl', function (
    $scope,
    $routeParams,
    Contact,
    $location
  ) {

    $scope.contact = Contact.one($routeParams.id).get().$object;
    $scope.deleteContact = function(){
      $scope.contact.remove().then(function(){
        $location.path('/admin');
      });
    };
    $scope.back = function(){
      $location.path('/admin', + $routeParams.id);
    };
  });
