(function (angular) {
    'use strict';

    angular
        .module('todoApp.services.api')
        .factory('TaskService', Service);

    Service.$inject = ['$http'];

    function Service($http) {
        var services = {
            getAllTask: getAllTask,
            getTaskByID: getTaskByID,
            updateTask: updateTask,
            deleteTask: deleteTask,
            createTask: createTask
        }

        function getAllTask() {
            return $http.get('/api/tasks')
                .then(function (res) {
                    return res.data.data;
                });
        }

        function getTaskByID() {

        }

        function createTask(todo) {
            $http.post('/api/tasks', todo)
                .then(function (res) {
                    return res.data.message;
                });
        }

        function updateTask(todo) {
            $http.put('/api/tasks', todo)
                .then(function (res) {
                    return res.data.message;
                });
        }

        function deleteTask(todo) {
            $http.delete('/api/tasks', {data : todo})
                .then(function (res) {
                    return res.data.message;
                });
        }

        return services;
    }
})(angular);
