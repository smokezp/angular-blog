angular.module('myApp').directive('addPost', function ($location, $cookieStore, Post) {
    return {
        restrict: 'E',
        scope: {
            // data: '='
        },
        templateUrl: 'modules/posts/views/addPost.html',

        link: function (scope, elem, attrs) {

            scope.create = function (text) {
                var author = $cookieStore.get('user');

                var dateObj = new Date(), locale = "en-us";
                var month = dateObj.toLocaleString(locale, {month: "short"});
                var day = dateObj.getUTCDate();
                var year = dateObj.getUTCFullYear();

                var newDate = day + " " + month + " " + year;
                var arr = {
                    'author': author,
                    'text': text,
                    'date': newDate

                };
                Post.add(arr);
                $location.path("/posts");
            };

        }


    };
});
