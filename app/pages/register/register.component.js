(function (angular) {
    'use strict';

    angular
        .module('todoApp.pages')
        .component('register', {
            templateUrl: 'app/pages/register/register.html',
            controller: registerController,
            controllerAs: 'vm'
        });

    registerController.$inject = [];

    function registerController() {

    }
})(angular);
