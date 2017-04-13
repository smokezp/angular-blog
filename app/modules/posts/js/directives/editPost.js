app.directive('editPost', function ($location, $cookieStore) {
    return {

        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'modules/posts/views/editPost.html',
        link: function (scope, elem, attrs) {

            scope.update = function (data, textnow) {
                var dataold = data.text;
                var id = data.id;

                var text;
                if (textnow) {
                    text = textnow;
                } else {
                    text = dataold;
                }
                var author = $cookieStore.get('user');

                var dateObj = new Date(), locale = "en-us";
                var month = dateObj.toLocaleString(locale, {month: "short"});
                var day = dateObj.getUTCDate();
                var year = dateObj.getUTCFullYear();

                newdate = day + " " + month + " " + year;

                var arr = {
                    'id': id,
                    'author': author,
                    'text': text,
                    'date': newdate
                };

                posts.success(function (data) {
                    data.splice(id, 1, arr);
                });
                $location.path("/posts");

            };
        }

    };
});
