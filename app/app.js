(function (angular, window) {
    'use strict';

    angular
        .module('todoApp')
        .run(main)
        .run(editableConfig);
    main.$inject = ['$localStorage', '$rootScope', '$location', '$http'];

    function main($localStorage, $rootScope, $location, $http) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }

        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
        });
    }

    editableConfig.$inject = ['editableOptions'];
    function editableConfig(editableOptions) {
        editableOptions.theme = 'bs3';
    }

    angular.element('#app-container').ready(function () {
        angular.bootstrap(document, ['todoApp']);
    });
})(angular, window);
