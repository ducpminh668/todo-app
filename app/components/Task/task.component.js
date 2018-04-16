(function (angular) {
    'use strict';

    angular
        .module('todoApp.components')
        .component('task', {
            templateUrl: 'app/components/Task/task.html',
            controller: taskController,
            controllerAs: 'vm',
            bindings: {
                onTaskChange: '&'
            }
        });

    taskController.$inject = ['TaskService'];
    function taskController(TaskService) {
        var vm = this;
        loadTask();
        function loadTask() {
            TaskService.getAllTask().then(function (data) {
                vm.todos = data;
                vm.onTaskChange({ $event: { count: vm.todos.length } });
            });
        }

        vm.notifiedFromTaskItem = function () {
            loadTask();
        }

        vm.addTodoList = function () {
            TaskService.createTask({ text: vm.todoText, isDone: false });
            vm.todoText = "";
            loadTask();
        }
    }

})(angular);
