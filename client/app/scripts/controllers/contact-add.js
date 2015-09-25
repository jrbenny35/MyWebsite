'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ContactAddCtrl
 * @description
 * # ContactAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ContactAddCtrl', function (
    $scope,
    Contact,
    $location ) {

    $scope.contact = {}; //Assign contacts from controller to object

    $scope.saveContact = function() {
      Contact.post($scope.contact).then(function () {
        $location.path('/contact-thankyou');
      });
    };

  });
