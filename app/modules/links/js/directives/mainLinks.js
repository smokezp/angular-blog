app.directive('mainLinks', function ($location, $cookieStore) {
    return {
        restrict: 'E',
        scope: {
            // data: '='
        },
        templateUrl: 'modules/links/views/mainLinks.html',
        link: function (scope, elem, attrs) {

            scope.check = function () {
                var userLogin1 = $cookieStore.get('user');
                return userLogin1;
            };
        }

    };
});
