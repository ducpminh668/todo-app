(function (angular) {
    'use strict';

    angular
        .module('todoApp')
        .run(authFakeBackend);

    authFakeBackend.$inject = ['$httpBackend'];

    function authFakeBackend($httpBackend) {
        var testUser = { username: 'duc123', password: '123456', firstName: 'ducpminh', lastName: 'it me' };

        $httpBackend.whenPOST('/api/authenticate').respond(function (method, url, data) {
            var params = angular.fromJson(data);
            if (params.username === testUser.username && params.password === testUser.password) {
                return [200, { token: 'fake-jwt-token' }, {}];
            } else {
                return [200, {}, {}];    
            }
        });

        $httpBackend.whenGET(/^\w+.*/).passThrough();
    }
})(angular);
