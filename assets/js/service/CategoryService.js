bookStoreApp.service('CategoryService', function($http, $q) {
  return {
    'getCategories': function() {
      var defer = $q.defer();
      $http.get('/category').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});
