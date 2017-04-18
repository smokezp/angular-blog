angular.module('myApp').controller('PostController', ['$scope', 'post', function ($scope, post) {
    $scope.post = post;
}]);
