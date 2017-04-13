var app = angular.module("myApp", ['ngRoute', 'ngCookies']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/posts', {
            controller: "PostController",
            templateUrl: "/modules/posts/views/posts.html"
        })
        .when('/logout', {
            resolve: {
                "check": function ($location, $cookieStore) {
                    if (checkUser($location, $cookieStore, "/posts")) {
                        $cookieStore.remove('user');
                    }
                }
            }

            // templateUrl: "modules/posts/views/allPosts.html"
            //templateUrl: "/modules/posts/views/posts.html"
        })
        .when('/login', {
            resolve: {
                "check": function ($location, $cookieStore) {
                    checkUser($location, $cookieStore, "/");
                }
            },
            //controller: "AuthController",
            templateUrl: "/modules/login/views/login.html"

        })
        .when('/add-post', {
            resolve: {
                "check": function ($location, $cookieStore) {
                    if (!checkUser($location, $cookieStore, "/add-post")) {
                        alert("Please login");
                    }
                }
            },
            //controller: "",
            template: '<add-post></add-post>'
        })
        .when('/posts/edit/:id', {
            resolve: {
                "check": function ($location, $cookieStore) {
                    checkUser($location, $cookieStore, "");
                },
                post: ['Post', '$route', function (Post, $route) {
                    return Post.findById($route.current.params.id);
                }]
            },
            templateUrl: '/modules/posts/views/edit.html',
            controller: 'PostController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

function checkUser($location, $cookieStore, redirect) {
    var userLogin = $cookieStore.get('user');
    // console.log(userLogin);
    if (userLogin) {
        if (redirect != "") {
            $location.path(redirect);
        }

    } else {
        $location.path('/login');
    }
    return userLogin;
}