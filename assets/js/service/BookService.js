bookStoreApp.service('BookService', function($http, $q) {
  return {
    'getBooks': function() {
      var defer = $q.defer();
      $http.get('/book').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
}});
