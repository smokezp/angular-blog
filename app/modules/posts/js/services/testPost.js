// describe('Testing angularjs', function () {
//
//     beforeEach(module('myApp', ['ngMock']));
//
//     var userService, httpBackend;
//
//     beforeEach(function () {
//         angular.module('myApp', ['ngMock']).service('Post',  function (_userService_, $httpBackend) {
//
//             userService = _userService_;
//             httpBackend = $httpBackend;
//         });
//     });
//
//
//
//
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


//------------------------------------------------------------------


// describe('posts data', function () {
//
//     describe('get all posts data', function () {
//
//         it('http get data from json file', inject(function (postData) {
//             postData.all();
//
//             expect();
//
//         }));
//     });
// });