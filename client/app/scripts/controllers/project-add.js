'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProjectAddCtrl
 * @description
 * # ProjectAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProjectAddCtrl', function (
    $scope,
    Projects,
    $location) {

    $scope.project = {};//Make sure this objects spelling matches ng-models

    $scope.saveProject = function(){
      Projects.post($scope.project).then(function(){
        $location.path('admin/');
      });
    };
  });
