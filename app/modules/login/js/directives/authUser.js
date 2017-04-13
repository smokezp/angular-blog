app.directive('authUser', function (users, $cookieStore) {
    return {
        restrict: 'E',
        scope: {
            //data: '='
        },
        templateUrl: 'modules/login/views/authUser.html',
        link: function (scope, elem) {
            scope.authLogin = function () {
                if (scope.user.login && scope.user.password) {
                    users.success(function (data) {
                        if (data[0].login == scope.user.login && data[0].password == scope.user.password) {
                            $cookieStore.put('user', scope.user.login);
                            alert("welcome!!");
                            window.location.href = '#/posts';
                        } else {
                            alert("Wrong login or password");
                        }
                    });
                } else {
                    alert("Please enter login and password");

                }
            }

        }


    };
});
