describe('form login ', function () {
    var el;
    var form;
    var scope;
    beforeEach(module('templates'));
    beforeEach(module('myApp'));
    //angular.module('ui.bootstrap',[]);

    //beforeEach(module('modules/posts/views/allPosts.html'));

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        // scope.user.login =
        //     {
        //         "id": 0,
        //         "text": "dfgdfgdfgfgdfgdfghjgjghjghjghj",
        //         "date": "Apr 8, 2014",
        //         "author": "alexey"
        //     };
        //
        // scope.user.password =
        //     {
        //         "id": 1,
        //         "text": "dhgfjhh vbnbmbnmbnm",
        //         "date": "Apr 8, 2014",
        //         "author": "alexeytytyt"
        //     };
        //scope.delete(scope.post[0],scope.post[0].id);

        el = angular.element('<auth-user></auth-user>');

        $compile(el)(scope);


        // scope.$watch('myForm', function(theForm) {
        //     if(theForm) {
        //         scope.formDebugText = 'Form in Scope';
        //     }
        //     else {
        //         scope.formDebugText = 'Form is Undefined';
        //     }
        //    // console.log(scope.formDebugText);
        // });
        //-----------    console.log(scope);
        scope.$apply();
        form = scope;
        //-----------      console.log(scope);
        //console.log(scope.myForm);

        //console.log(form);
        //console.log(scope.data);
    }));

    it('auth user ', function () {
        //scope. authLogin;

       // scope.authLogin();
       // authLogin
        // console.log(form.$$childTail.myForm.$pending);
        form.$$childTail.myForm.login.$setViewValue('qwerty');
        form.$$childTail.myForm.password.$setViewValue('qwerty');
        form.$$childTail.authLogin();


        //console.log(;




       //--- expect(form.$$childTail.myForm.$valid).toBe(false);
        //expect(window.alert).toHaveBeenCalledWith('welcome');

        //console.log(form.$$childTail.myForm.login);

        //  console.log();
        //console.log(form.id);
        //console.log(el.myForm);

//         console.log();
        // form.myForm.login.$setViewValue('qwerty');
//         console.log(form.login);
//         //var dirElementInput = dirElement.find('input');
// //el.$setViewValue('Not a number');
//         console.log(form);
        //expect(el.text()).toContain('dfgdfgdfgfgdfgdfghjgjghjghjghj');
    });


//     it('delete post',function () {
//         console.log(el);
//         // console.log(el.find('div'));
//         // console.log(el);
// //.click()
//         //expect(el.text()).toContain('');
//     });

});

