app.factory('Post', ['$http', '$q', '$route', function ($http, $q,$route) {
    return {
        all: function () {
            var defer = $q.defer();
            $http.get('/posts.json').then(function (req) {
                defer.resolve(req.data);
            }, defer.reject);
            return defer.promise;
        },
        findById: function (id) {
            var defer = $q.defer();
            $http.get('/posts.json').then(function (req) {
                var post = req.data.find(function (elem) {
                    return elem.id === +$route.current.params.id;
                });
                defer.resolve(post);
            }, defer.reject);
            return defer.promise;
        }
    }
}]);
