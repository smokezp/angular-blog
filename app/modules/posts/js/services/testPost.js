// describe('Testing angularjs', function () {
//
//     beforeEach(module('myApp'));
//
//     var userService, httpBackend;
//
//     beforeEach(function () {
//         angular.module('myApp').service('Post', ['_userService_', '$httpBackend', function (_userService_, $httpBackend) {
//
//             userService = _userService_;
//             httpBackend = $httpBackend;
//             console.log(httpBackend);
//             console.log(21323232);
//         }]);
//     });
//
//     // beforeEach(inject(function (_userService_, $httpBackend) {
//     //     userService = _userService_;
//     //     httpBackend = $httpBackend;
//     // }));
//
//     describe('Testing service post', function () {
//         it('http get data from json file', function () {
//
//             httpBackend.whenGET("posts.json").respond([
//                 {
//                     "id": 0,
//                     "text": "dfgdfgdfgfgdfgdfghjgjghjghjghj",
//                     "date": "Apr 8, 2014",
//                     "author": "alexey"
//
//                 },
//                 {
//                     "id": 1,
//                     "text": "dhgfjhh vbnbmbnmbnm",
//                     "date": "Apr 8, 2014",
//                     "author": "alexeytytyt"
//
//                 },
//                 {
//                     "id": 2,
//                     "text": "KLKKMk gbhghhbhbhbhb",
//                     "date": "Apr 9, 2014",
//                     "author": "alexeyvbcccvb"
//
//                 },
//                 {
//                     "id": 3,
//                     "text": "dfssadczxczxc",
//                     "date": "Apr 8, 2014",
//                     "author": "alexeyQweewewe"
//
//                 }
//             ]);
//             userService.all().then(function (subreddits) {
//                 expect(subreddits).toEqual({data: Array(4), status: 200, config: Object, statusText: "OK"});
//             });
//             httpBackend.flush();
//         });
//     });
// });



describe('Testing angularjs', function () {
    var $httpBackend, authRequestHandler;
        beforeEach(module('myApp'));

    beforeEach(inject(function ($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        // backend definition common for all tests
        authRequestHandler = $httpBackend.when('GET', 'posts.json')
            .respond([
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

                },
                {
                    "id": 2,
                    "text": "KLKKMk gbhghhbhbhbhb",
                    "date": "Apr 9, 2014",
                    "author": "alexeyvbcccvb"

                },
                {
                    "id": 3,
                    "text": "dfssadczxczxc",
                    "date": "Apr 8, 2014",
                    "author": "alexeyQweewewe"

                }
            ]);



    }));

});