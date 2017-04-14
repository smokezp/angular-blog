app.factory('Post', ['$http', '$q', '$route', function ($http, $q, $route) {

    var Posts = define();

    function define() {
        var defer = $q.defer();
        $http.get('/posts.json').then(function (req) {
            defer.resolve(req.data);
        }, defer.reject);
        return defer.promise;
    }

    return {


        add: function (post) {
            // console.log(Posts);
            var defer = $q.defer();
            Posts.then(function (req) {
                // console.log(req.length);
                // console.log(req);
                // console.log(post);

                post['id'] = req.length;
                req.push(post);
                // console.log(post);
                // console.log(req);
                defer.resolve(req);
            }, defer.reject);


            Posts = defer.promise;
            //console.log(Posts);
            //return defer.promise;
        },
        all: function () {
            return Posts;

            // var defer = $q.defer();
            // $http.get('/posts.json').then(function (req) {
            //     defer.resolve(req.data);
            // }, defer.reject);
            // return defer.promise;
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
