describe('test directive allPosts ', function() {
    var el;
    beforeEach(module('templates'));
    beforeEach(module('myApp'));

    beforeEach(inject(function ($compile, $rootScope) {
        var scope = $rootScope.$new();

        el=angular.element('<main-links></main-links>');

        $compile(el)(scope);
        scope.$apply();
        //console.log(scope.data);
    }));

    it('show test posts',function () {
//console.log(el);

        expect(el.text()).toContain('MAIN');
        expect(el.text()).toContain('POSTS');
    });

});

