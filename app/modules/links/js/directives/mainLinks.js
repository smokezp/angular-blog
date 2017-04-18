angular.module('myApp').directive('mainLinks', function ($location, $cookieStore) {
    return {
        restrict: 'E',
        scope: {
            // data: '='
        },
        templateUrl: 'modules/links/views/mainLinks.html',
        link: function (scope, elem, attrs) {

            scope.check = function () {
                return $cookieStore.get('user');
            };
        }
    };
});
