// app.factory('users', ['$http', function($http) {
//     return $http.get('users.json')
//         .success(function(data) {
//             return data;
//         })
//         .error(function(err) {
//             return err;
//         });
// }]);
//
//
//

//-------------------------------------

app.factory('User', ['$http','$q', function($http, $q) {

    return {

        all: function () {

            var defer = $q.defer();
            $http.get('/users.json').then(function (req) {
                defer.resolve(req.data);
            }, defer.reject);
            return defer.promise;

        }
    }
}]);

