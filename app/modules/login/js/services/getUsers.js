app.factory('users', ['$http', function($http) {
    return $http.get('users.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
