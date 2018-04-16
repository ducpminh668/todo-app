(function (angular) {
    'use strict';

    angular
        .module('todoApp.pages')
        .component('login', {
            templateUrl: 'app/pages/login/login.html',
            controller: loginController,
            controllerAs: 'vm',
        });

    loginController.$inject = ['AuthenticationService', '$state'];

    function loginController(AuthenticationService, $state) {
        var vm = this;

        vm.login = (isValid) => {
            if (isValid) {
                AuthenticationService.login(vm.username, vm.password, function (result) {        
                    if (result == true) {
                        $state.go('index');
                    } else {
                        vm.error = 'Username or password is incorrect';
                    }
                });
            }
        }


    }
})(angular);
