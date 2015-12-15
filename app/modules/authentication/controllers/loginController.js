'use strict';
 
angular.module('Authentication')
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {

        $rootScope.dataLoaded = true;
        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = function () {
            $scope.signingOn = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/dirlist');
                } else {
                    $scope.error = response.message;
                    $scope.signingOn = false;
                }
            });
        };
    }]);