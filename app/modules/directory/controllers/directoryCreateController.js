'use strict';

directoryApp.controller('DirNewController',
    function DirNewController($scope,$rootScope,$timeout,dirList) {
        $rootScope.currentMenuItem = 'adddir';
        $rootScope.dataLoaded = false;
        $scope.service = 'service';
        $scope.reset = function(){
            $scope.service = 'service';
            $scope.firstName = "Anoop";
            $scope.lastName = "Nadesan";
            $scope.email = "anoopn.kollam@gmail.com";
        }
        $scope.callAtTimeout = function() {
            $scope.reset();
            $rootScope.dataLoaded = true;
        }
        $timeout( function(){ $scope.callAtTimeout(); }, 1000);
    }
);