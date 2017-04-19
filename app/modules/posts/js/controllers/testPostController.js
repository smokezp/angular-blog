describe('Testing angularjs', function () {

    beforeEach(module('myApp'));

    beforeEach(function () {
        angular.module('myApp').service('post', function () {
            this.foo = 'bar';
        });
    });

    describe('Testing controller post', function () {
        it('posts in scope', function () {

            var scope = {};
            var ctrl;
            inject(function ($controller) {
                ctrl = $controller('PostController', {$scope: scope});
            });
            expect(scope.post).toBeDefined();
            expect(scope.post.foo).toBe('bar');
        });
    });
});
