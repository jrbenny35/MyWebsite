'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngRoute',
    'restangular'//Add restangular for rest functions

  ])
  .config(function ($routeProvider, RestangularProvider) {//Add RestangularProvider
    RestangularProvider.setBaseUrl('http://localhost:3000');//Set url for all rest api's

    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/admin/create/project', {
        templateUrl: 'views/project-add.html',
        controller: 'ProjectAddCtrl',
        controllerAs: 'projectAdd'
      })
      .when('/projects/:id', {
        templateUrl: 'views/project-view.html',
        controller: 'ProjectViewCtrl',
        controllerAs: 'projectView'
      })
      .when('/admin/projects/:id/delete', {
        templateUrl: 'views/project-delete.html',
        controller: 'ProjectDeleteCtrl',
        controllerAs: 'projectDelete'
      })
      .when('/admin/projects/:id/edit', {
        templateUrl: 'views/project-edit.html',
        controller: 'ProjectEditCtrl',
        controllerAs: 'projectEdit'
      })
      .when('/admin/projects/:id', {
        templateUrl: 'views/project-view.html',
        controller: 'ProjectViewCtrl',
        controllerAs: 'projectView'
      })

      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/home'
      });
  })
  .factory('ProjectsRestangular', function(Restangular){ //Setup factory to recognize id from get as _id from db
    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Projects', function(ProjectsRestangular){
    return ProjectsRestangular.service('projects');
  });
