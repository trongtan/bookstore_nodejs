'use strict';

var bookStoreApp = angular.module('bookStoreApp', ['ngRoute', 'ngTextTruncate']);

bookStoreApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/book/index.html',
      controller: 'BookStoreCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);

bookStoreApp.controller('BookStoreCtrl', ['$scope', '$rootScope', 'BookService', 'CategoryService',
  function($scope, $rootScope, BookService, CategoryService) {
  $scope.formData = {};
  $scope.books = [];
  $scope.categories = [];

  BookService.getBooks().then(function(response) {
    $scope.books = response;
  });

  CategoryService.getCategories().then(function(response) {
    $scope.categories = response;
  });
}]);
