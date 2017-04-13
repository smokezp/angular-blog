app.directive('addPost', function ($location, $cookieStore, posts) {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'modules/posts/views/addPost.html',

        link: function (scope, elem, attrs) {
            scope.create = function (text) {
                var author = $cookieStore.get('user');

                var dateObj = new Date(), locale = "en-us";
                var month = dateObj.toLocaleString(locale, {month: "short"});
                var day = dateObj.getUTCDate();
                var year = dateObj.getUTCFullYear();

                newdate = day + " " + month + " " + year;

                posts.success(function (data) {
                    var last = data[data.length - 1];
                    var id = last.id + 1;
                    var arr = {
                        'id': id,
                        'author': author,
                        'text': text,
                        'date': newdate

                    };
                    data.push(arr);
                    $location.path("/posts");
                });
            };

        }


    };
});
