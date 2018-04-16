(function (angular) {
    'use strict';

    angular
        .module('todoApp')
        .run(authFakeBackend);

    authFakeBackend.$inject = ['$httpBackend'];

    function authFakeBackend($httpBackend) {
        var testUser = { username: 'duc123', password: '123456', firstName: 'ducpminh', lastName: 'it me' };

        var todos = [
            { id: 1, text: "hoc nodejs", isDone: true },
            { id: 2, text: "hoc angularjs", isDone: false },
            { id: 3, text: "hoc vuejs", isDone: true },
        ];

        $httpBackend.whenPOST('/api/authenticate').respond(function (method, url, data) {
            var params = angular.fromJson(data);
            if (params.username === testUser.username && params.password === testUser.password) {
                return [200, { token: 'fake-jwt-token' }, {}];
            } else {
                return [200, {}, {}];
            }
        });

        $httpBackend.whenGET('/api/tasks').respond(function (method, url, data) {
            return [200, { token: 'fake-jwt-token', status: 1, message: "", data: todos }];
        });

        $httpBackend.whenPOST('/api/tasks').respond(function (method, url, data) {
            var maxId = Math.max.apply(Math, todos.map(function (o) { return o.id }));
            var todo = JSON.parse(data);
            todo.id = maxId + 1;

            todos.push(todo);
            return [200, { token: 'fake-jwt-token', status: 1, message: "Created successfully", data: "" }];
        });

        $httpBackend.whenPUT('/api/tasks').respond(function (method, url, data) {
            var todo = JSON.parse(data);
            todos = todos.map(item => {
                if (item.id == todo.id) {
                    item.text = todo.text;
                    item.isDone = todo.isDone
                }
                return item;
            });
            return [200, { token: 'fake-jwt-token', status: 1, message: "Update successfully", data: "" }];
        });

        $httpBackend.whenDELETE('/api/tasks').respond(function (method, url, data) {
            var todo = JSON.parse(data);
            todos = todos.filter(function (item) {
                return item.id !== todo.id;
            });
            return [200, { token: 'fake-jwt-token', status: 1, message: "Delete successfully", data: "" }];
        })

        $httpBackend.whenGET(/^\w+.*/).passThrough();
    }
})(angular);
