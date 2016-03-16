'use strict';

function DirListController ($rootScope, $timeout, dirList) {
    var _self = this;

    $rootScope.currentMenuItem = 'dirlist';
    $rootScope.dataLoaded = false;

    this.sortby = 'person.name';
    
    this.callAtTimeout = function() {
        dirList.getDir().then(
            this.successHandler.bind(this),
            this.failureHandler.bind(this)
            );
    };

    this.successHandler = function (response) {
        _self.directories = response.data;
        $rootScope.dataLoaded = true;
    };

    this.failureHandler = function (err) {

    };

    $timeout( function(){ _self.callAtTimeout(); }, 1000);
}

angular.module('Directory')
.controller('DirListController', ['$rootScope', '$timeout', 'dirList', DirListController]);