(function (angular) {
    'use strict';

    angular
        .module('todoApp.components')
        .component('task', {
            templateUrl: 'app/components/Task/task.html',
            controller: taskController,
            controllerAs: 'vm',
            bindings: {

            }
        });

    taskController.$inject = [];
    function taskController() {
        var vm = this;
        vm.todos = [
            { text: "hoc nodejs", isDone: true },
            { text: "hoc angularjs", isDone: false },
            { text: "hoc vuejs", isDone: true },
        ];

        vm.addTodoList = function () {
            vm.todos.push({ text: "hoc reactjs", isDone: false })
        }
    }

})(angular);
