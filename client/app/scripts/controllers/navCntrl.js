/**
 * Created by root on 9/18/15.
 */


'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:navCtrl
 * @description
 * # navCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('navCntrl', function (
    $scope,
    $location
  ) {

    $scope.isActive = function (dest) {
      return dest === $location.path();
    };

  });
