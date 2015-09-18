'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProjectEditCtrl
 * @description
 * # ProjectEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProjectEditCtrl', function (
    $scope,
    $routeParams,
    Projects,
    $location
  ) {

    $scope.editProject = true;
    $scope.project = {};

    Projects.one($routeParams.id).get().then(function(project){
      $scope.project = project;
      $scope.updateProject = function(){
        $scope.project.save().then(function(){
          $location.path('/projects/' + $routeParams.id);
        });
      };
    });

  });
