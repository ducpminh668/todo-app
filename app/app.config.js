(function (angular) {
    'use strict';

    angular.module('todoApp').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('register', {
                url: '/register',
                template: '<register></register>'
            })
            .state('login', {
                url: '/login',
                template: '<login></login>'
            })

            .state('layout', {
                url: '',
                template: '<layout></layout>',
                abstract: true
            })
            .state('index', {
                url: '/',
                template: '<home-page></home-page>',
                parent: 'layout'
            })


        $urlRouterProvider.otherwise('/');
    }
})(angular);

