'use strict';

directoryApp.controller('DirListController',
    function DirListController($scope,$rootScope,$timeout,dirList) {
        $rootScope.currentMenuItem = 'dirlist';
        $rootScope.dataLoaded = false;
        $scope.sortby = 'person.name';
        $scope.callAtTimeout = function() {
            dirList.getDir(function(data){
                $scope.directories = data;
                $rootScope.dataLoaded = true;
            });
        }
        $timeout( function(){ $scope.callAtTimeout(); }, 1000);
    }
);