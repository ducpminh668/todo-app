(function (angular) {
    'use strict';

    angular
        .module('todoApp.pages')
        .component('layout', {
            templateUrl: 'app/pages/shared/layout/layout.html',
            controller: layoutController,
            controllerAs: 'vm',
            bindings: {

            }
        });

    layoutController.$inject = ['AuthenticationService', '$state'];

    function layoutController(AuthenticationService, $state) {
        var vm = this;
        vm.logout = function () {
            AuthenticationService.logout();
            $state.go('login');
        }
    }
})(angular);
