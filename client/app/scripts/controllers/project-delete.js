'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProjectDeleteCtrl
 * @description
 * # ProjectDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProjectDeleteCtrl', function (
    $scope,
    $routeParams,
    Projects,
    $location
  ) {

    $scope.project = Projects.one($routeParams.id).get().$object;
    $scope.deleteProject = function(){
      $scope.project.remove().then(function(){
        $location.path('/projects');
      });
    };
    $scope.back = function(){
      $location.path('/projects', + $routeParams.id);
    };
  });
