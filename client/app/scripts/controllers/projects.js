'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProjectsCtrl', function (Projects) {

    this.projects = Projects.getList().$object;

  });
