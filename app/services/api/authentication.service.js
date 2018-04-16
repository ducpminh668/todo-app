(function (angular) {
    'use strict';

    angular
        .module('todoApp.services.api')
        .factory('AuthenticationService', Service);

    Service.$inject = ['$http', '$localStorage'];

    function Service($http, $localStorage) {
        var service = {
            login: login,
            logout: logout
        }

        function login(username, password, callback) {
            $http.post('/api/authenticate', { username: username, password: password })
                .then(fullfill, reject);

            function fullfill(response) {
                if (response.data.token) {
                    $localStorage.currentUser = { username: username, token: response.token };

                    $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
                    callback(true);
                } else {
                    callback(false);
                }
            }

            function reject(err) {
                callback(false);
            }
        }

        function logout() {
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }

        return service;
    }
})(angular);
