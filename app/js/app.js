angular
    .module("myApp", ['ngRoute', 'ngCookies'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/posts', {
                resolve: {
                    post: ['Post', function (Post) {
                        return Post.all();
                    }]
                },
                controller: "PostController",
                template: '<all-posts data="post"></all-posts>'
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
                //controller: "LoginController",
                template: '<auth-user></auth-user>'

            })
            .when('/add-post', {
                resolve: {
                    "check": function ($location, $cookieStore) {
                        if (!checkUser($location, $cookieStore, "/add-post")) {
                            alert("Please login");
                        }
                    },
                    post: ['Post', function (Post) {
                        return Post.all();
                    }]
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
                template: '<edit-post data="post"></edit-post>',
                controller: 'PostController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])

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

