(function (angular) {
    'use strict';

    angular
        .module('todoApp.components')
        .component('taskItem', {
            templateUrl: 'app/components/Task/TaskItem/taskItem.html',
            controller: taskItemController,
            controllerAs: 'vm',
            bindings: {
                todo: '='
            }
        });

    taskItemController.$inject = [];

    function taskItemController() {
        var vm = this;
        vm.updateTodo = function (todo) {
            // Todo: update todo
            
        }

        vm.delelteTodo = function (todo) {
            //Todo : delete todo
        }
    }
})(angular);
