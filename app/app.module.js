(function (angular) {
    'use strict';

    angular.module('todoApp', [
        'ui.router',
        'todoApp.pages',
        'todoApp.components',
        'todoApp.services',
        'ngMockE2E',
        'ngStorage',
        'xeditable'
    ]);
})(angular);

