describe('Test service user', function () {
    var service, $httpBackend;


    beforeEach(function () {
        module('myApp');
        inject(function ($injector) {
            service = $injector.get('User');
            $httpBackend = $injector.get('$httpBackend');
            $httpBackend.when('GET', "/users.json").respond([
                {
                    "login": "qwerty",
                    "password": "qwerty"
                }
            ]);
        });
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    describe('Test function all', function () {
        it('get login and password from json file', function () {
            service.all().then(function (response) {
                // console.log(response[0].text);

                expect(response[0].login).toBe('qwerty');
                expect(response[0].password).toBe('qwerty');
            });
            $httpBackend.flush();
        });

    });

});

