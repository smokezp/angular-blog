describe('test directive allPosts ', function() {
    var el;
    beforeEach(module('templates'));
    beforeEach(module('myApp'));
    //angular.module('ui.bootstrap',[]);

    //beforeEach(module('modules/posts/views/allPosts.html'));

    beforeEach(inject(function ($compile, $rootScope) {
        var scope = $rootScope.$new();
        scope.post=[
            {
                "id": 0,
                "text": "dfgdfgdfgfgdfgdfghjgjghjghjghj",
                "date": "Apr 8, 2014",
                "author": "alexey"

            },
            {
                "id": 1,
                "text": "dhgfjhh vbnbmbnmbnm",
                "date": "Apr 8, 2014",
                "author": "alexeytytyt"
            }
        ];
        //scope.delete(scope.post[0],scope.post[0].id);

        el=angular.element('<all-posts data="post"></all-posts>');

        $compile(el)(scope);
        scope.$apply();
        //console.log(scope.data);
    }));

    it('show test posts',function () {
//console.log(el.text());
        expect(el.text()).toContain('dfgdfgdfgfgdfgdfghjgjghjghjghj');
    });



//     it('delete post',function () {
//         console.log(el);
//         // console.log(el.find('div'));
//         // console.log(el);
// //.click()
//         //expect(el.text()).toContain('');
//     });

});

