(function (angular) {
    'use strict';

    angular
        .module('todoApp.pages')
        .component('homePage', {
            templateUrl: 'app/pages/home/home.html',
            controller: homeController,
            controllerAs: 'vm',
            bindings: {

            }
        });

        homeController.$inject = [];

        function homeController() {
            
        }
})(angular);
