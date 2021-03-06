angular.module('myApp').directive('editPost', function ($location, $cookieStore, Post) {
    return {

        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'modules/posts/views/editPost.html',
        link: function (scope, elem, attrs) {

            scope.update = function (data, textNow) {
                var dataOld = data.text;
                var id = data.id;

                var text;
                if (textNow) {
                    text = textNow;
                } else {
                    text = dataOld;
                }
                var author = $cookieStore.get('user');

                var dateObj = new Date(), locale = "en-us";
                var month = dateObj.toLocaleString(locale, {month: "short"});
                var day = dateObj.getUTCDate();
                var year = dateObj.getUTCFullYear();

                var newDate = day + " " + month + " " + year;

                var arr = {
                    'id': id,
                    'author': author,
                    'text': text,
                    'date': newDate
                };

                Post.all().then(function (data) {
                    data.splice(id, 1, arr);

                    $location.path("/posts");
                });


            };
        }

    };
});
