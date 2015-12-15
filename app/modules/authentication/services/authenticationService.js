'use strict';
 
angular.module('Authentication')
 
.factory('AuthenticationService',
    ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        service.Login = function (username, password, callback) {
            $timeout(function(){
                var response = { success: username === 'demo' && password === 'demo' };
                if(!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
            }, 1000);
        };
 
        service.SetCredentials = function (username, password) {
            var authdata = Base64.encode(username + ':' + password);
            $rootScope.admin = {
                userData: {
                    username: username,
                    authdata: authdata
                }
            };
            $cookieStore.put('admin', $rootScope.admin);
        };
 
        service.ClearCredentials = function () {
            $rootScope.admin = {};
            $cookieStore.remove('admin');
        };
 
        return service;
    }]);