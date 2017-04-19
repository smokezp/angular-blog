describe('test directive allPosts ', function() {
    var el;
    beforeEach(module('myApp'));
    angular.module('ui.bootstrap',[]);
    beforeEach(module('modules/posts/views/allPosts.html'));

    beforeEach(inject(function ($compile, $rootScope) {
        var scope = $rootScope;
        scope.data=[
            {
                "id": 0,
                "text": "dfgdfgdfgfgdfgdfghjgjghjghjghj",
                "date": "Apr 8, 2014",
                "author": "alexey"

            }
        ];

        el=angular.element('<all-posts data="post"></all-posts>');
        $compile(el)(scope);



    }));

    it('show test posts',function () {
        expect(el.text()).toContain('dfgdfgdfgfgdfgdfghjgjghjghjghj');
    })
});

