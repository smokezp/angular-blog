angular.module('myApp').factory('User', ['$http', '$q', function ($http, $q) {

    return {

        all: function () {

            var defer = $q.defer();
            $http.get('/users.json').then(function (req) {
                defer.resolve(req.data);
            }, defer.reject);
            return defer.promise;

        }
    }
}]);

