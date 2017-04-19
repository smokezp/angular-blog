angular.module('myApp').factory('Post', ['$http', '$q', '$route', function ($http, $q, $route) {

    var Posts = define();

    function define() {
        var defer = $q.defer();
        $http.get('/posts.json').then(function (req) {
            console.log(req);
            defer.resolve(req.data);
        }, defer.reject);
        return defer.promise;
    }

    return {
        add: function (post) {
            var defer = $q.defer();
            Posts.then(function (req) {
                post['id'] = req.length;
                req.push(post);
                defer.resolve(req);
            }, defer.reject);

            Posts = defer.promise;
        },
        all: function () {
            return Posts;

        },
        findById: function () {
            var defer = $q.defer();
            Posts.then(function (req) {
                console.log(req);
                var post = req.find(function (elem) {
                    return elem.id === +$route.current.params.id;
                });
                defer.resolve(post);
            }, defer.reject);
            return defer.promise;
        }

    };


}]);
