(function (angular) {
    'use strict';

    angular
        .module('todoApp.components')
        .component('jumbotron', {
            templateUrl: 'app/components/Jumbotron/jumbotron.html',
            controller: jumbotronController,
            controllerAs: 'vm',
            bindings: {

            }
        });

    jumbotronController.$inject = [];

    function jumbotronController() {
        
    }
})(angular);
