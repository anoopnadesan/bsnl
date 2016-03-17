'use strict';

function LoginCtrl ($rootScope, $location, AuthenticationService) {
    $rootScope.dataLoaded = true;

    // reset login status
    AuthenticationService.ClearCredentials();

    this.login = function () {
        var _self = this;
        var _userName = this.username;
        var _password = this.password;        

        _self.signingOn = true;

        AuthenticationService.Login(_userName, _password, function(response) {
            if(response.success) {
                AuthenticationService.SetCredentials(_userName, _password);
                $location.path('/dirlist');
            } else {
                _self.error = response.message;
                _self.signingOn = false;
            }
        });
    };
}

/*angular.module('Authentication')
.controller('LoginController', ['$rootScope', '$location', 'AuthenticationService', LoginCtrl]);*/

angular.module('Authentication', ['Authentication.Service'])
.component('login', {
    templateUrl: '/src/components/login/login.html',
    controller: ['$rootScope', '$location', 'AuthenticationService', LoginCtrl],
    controllerAs: 'login'
});
