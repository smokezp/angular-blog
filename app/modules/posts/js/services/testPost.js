describe('Test service post', function () {


    //beforeEach(module('myApp'));
    var service, $httpBackend;


    beforeEach(function () {
        module('myApp');
        inject(function ($injector) {
            service = $injector.get('Post');
            $httpBackend = $injector.get('$httpBackend');
            $httpBackend.when('GET', "/posts.json").respond([
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
        });
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('Testing function all posts', function () {
        it('http get data from json file', function () {
            // var result = service.all();
            // expect(result.$$state.status).toBe(1);

            service.all().then(function (response) {
                // console.log(response[0].text);
                expect(response[0].id).toBe(0);
                expect(response[0].text).toBe("dfgdfgdfgfgdfgdfghjgjghjghjghj");
                expect(response[0].date).toBe("Apr 8, 2014");
                expect(response[0].author).toBe("alexey");
            });
            $httpBackend.flush();
        });
    });

    describe('Testing function add post', function () {
        it('add into promise one post', function () {
            // var result = service.all();
            // expect(result.$$state.status).toBe(1);
            //console.log(service.add({author: "qwerty", text: "jklkjlkl", date: "21 Apr 2017"}));
            service.add({author: "qwerty", text: "jklkjlkl", date: "21 Apr 2017"});


            service.all().then(function (response) {
                //  console.log(response[4].text);
                expect(response[4].id).toBe(4);
                expect(response[4].text).toBe("jklkjlkl");
                expect(response[4].date).toBe("21 Apr 2017");
                expect(response[4].author).toBe("qwerty");
            });
            //.then(function(response) {
            // console.log(response);

            //expect(response[0].text).toBe("dfgdfgdfgfgdfgdfghjgjghjghjghj");
            // });
            $httpBackend.flush();
        });
    });

    describe('Testing function findById post', function () {
        it('find into promise one post', function () {
//console.log(service.findById(1));
            var id = 0;
            service.findById(id).then(function (response) {
                //console.log(response);

                expect(response.id).toBe(id);
                expect(response.text).toBe("dfgdfgdfgfgdfgdfghjgjghjghjghj");
                expect(response.date).toBe("Apr 8, 2014");
                expect(response.author).toBe("alexey");
            });

            $httpBackend.flush();
        });
    });


});

