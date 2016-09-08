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

bookStoreApp.controller('BookStoreCtrl', ['$scope', '$rootScope', 'BookStoreService', function($scope, $rootScope, BookStoreService) {
  $scope.formData = {};
  $scope.books = [];

  BookStoreService.getBooks().then(function(response) {
    $scope.books = response;
  });

  // $scope.addTodo = function() {
  //   TodoService.addTodo($scope.formData).then(function(response) {
  //     $scope.todos.push($scope.formData)
  //     $scope.formData = {};
  //   });
  // }

  // $scope.removeTodo = function(todo) {
  //   TodoService.removeTodo(todo).then(function(response) {
  //     $scope.todos.splice($scope.todos.indexOf(todo), 1)
  //   });
  // }
}]);
