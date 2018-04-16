(function (angular) {
    'use strict';

    angular
        .module('todoApp.components')
        .component('taskItem', {
            templateUrl: 'app/components/Task/TaskItem/taskItem.html',
            controller: taskItemController,
            controllerAs: 'vm',
            bindings: {
                todo: '=',
                onChange: '&'
            }
        });

    taskItemController.$inject = ['TaskService'];

    function taskItemController(TaskService) {
        var vm = this;
        vm.updateTodo = function (todo) {
            // Todo: update todo
            TaskService.updateTask(todo);
            vm.onChange();
        }

        vm.deleteTodo = function (todo) {
            //Todo : delete todo
            TaskService.deleteTask(todo);
            vm.onChange();
        }
    }
})(angular);
