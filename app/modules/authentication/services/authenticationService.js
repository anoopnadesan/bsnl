'use strict';

function AuthenticationService ($base64, $http, $cookieStore, $rootScope, $timeout) {

    this.Login = function (username, password, callback) {
        $timeout(function(){
            var _response = { success: username === 'demo' && password === 'demo' };
            if(!_response.success) {
                _response.message = 'Username or password is incorrect';
            }
            callback(_response);
        }, 1000);
    };

    this.SetCredentials = function (username, password) {
        var _authdata = $base64.encode(username + ':' + password);

        $rootScope.admin = {
            userData: {
                username: username,
                authdata: _authdata
            }
        };
        
        $cookieStore.put('admin', $rootScope.admin);
    };

    this.ClearCredentials = function () {
        $rootScope.admin = {};
        $cookieStore.remove('admin');
    }; 

    return this;   
}
 
 angular.module('Authentication', [])
 .factory('AuthenticationService', ['$base64', '$http', '$cookieStore', '$rootScope', '$timeout', AuthenticationService]);