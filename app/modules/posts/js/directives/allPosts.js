angular.module('myApp').directive('allPosts', function ($location, $cookieStore) {
   // console.log('DSSDFLDSFU');
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'modules/posts/views/allPosts.html',
        // controller: function () {
        //     console.log('SDJSDFJDJF');
        // },

        link: function (scope, elem, attrs) {
           // console.log('asdasd');
            scope.delete = function (array, id) {
                array.splice(id, 1);
            };
            scope.edit = function (id) {
                $location.path("/posts/edit/" + id);
            };

            scope.check = function () {
                return $cookieStore.get('user');
            };
        }
    };
});
