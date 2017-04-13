app.directive('allPosts', function ($location, $cookieStore) {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'modules/posts/views/allPosts.html',
        link: function (scope, elem, attrs) {

            scope.delete = function (array, id) {
                array.splice(id, 1);
            };
            scope.edit = function (id) {
                $location.path("/posts/edit/" + id);
            };

            scope.check = function () {
                var userLogin1 = $cookieStore.get('user');
                return userLogin1;
            };
        }

    };
});
