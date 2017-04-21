angular.module('myApp').factory('Post', ['$http', '$q',  function ($http, $q) {

    var Posts = define();
   // console.log(Posts);
//console.log(Posts);
    function define() {
        var defer = $q.defer();

        $http.get('/posts.json').then(function (req) {
           // console.log("dfdfdfdf");
            defer.resolve(req.data);
        }, defer.reject);
        //console.log(defer.promise);
        return defer.promise;

    }

    return {
        add: function (post) {
           // console.log(post);
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
        findById: function (id) {
            var defer = $q.defer();
            Posts.then(function (req) {

                //console.log(req);
                var post = req.find(function (elem) {
                    //console.log(elem.id);
                    //console.log(id);
                    //console.log($route.current.params.id);
                    return elem.id === +id;
                });
                defer.resolve(post);
            }, defer.reject);
            return defer.promise;
        }

    };


}]);
