app.directive('addPost', function ($location, $cookieStore, Post) {
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
                Post.all().then(function (data) {
                    console.log(data);
                    var last = data[data.length - 1];
                    var id = last.id + 1;

                    var arr = {
                        'id': id,
                        'author': author,
                        'text': text,
                        'date': newDate

                    };
                   // console.log(arr);
                    data.push(arr);
                   // console.log(data);
                    $location.path("/posts");
                });
            };

        }


    };
});
