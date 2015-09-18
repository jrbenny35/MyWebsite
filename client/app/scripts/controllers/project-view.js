'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProjectViewCtrl
 * @description
 * # ProjectViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProjectViewCtrl', function (
    $scope,
    $routeParams,
    Projects
  ) {

    $scope.viewProject = true;
    $scope.project = Projects.one($routeParams.id).get().$object;

  });
