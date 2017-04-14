app.directive('editPost', function ($location, $cookieStore, Post) {
    return {

        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'modules/posts/views/editPost.html',
        link: function (scope, elem, attrs) {

            //var el = document.getElementById('textarea');
            // console.log(scope.post);


            // el.value = scope.post.text;
            //     scope.editPost={
            //         text: data.text
            //     };

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

                    //console.log(data);
                    $location.path("/posts");
                });


            };
        }

    };
});
