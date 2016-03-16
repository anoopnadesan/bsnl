'use strict';

function DirNewController($rootScope, $timeout, dirList) {
    var _self = this;
    
    $rootScope.currentMenuItem = 'adddir';
    $rootScope.dataLoaded = false;
    
    this.service = 'service';

    this.submit = function () {
        console.log(this.subscriberid + '\n' +
                    this.service + '\n' +
                    this.phonenumber + '\n' +
                    this.releaseDate + '\n' +
                    this.name + '\n' +
                    this.email + '\n' +
                    this.dob);
    };

    this.reset = function(){
        this.service = 'service';
        this.firstName = "Anoop";
        this.lastName = "Nadesan";
        this.email = "anoopn.kollam@gmail.com";
    };

    this.callAtTimeout = function() {
        this.reset();
        $rootScope.dataLoaded = true;
    };

    $timeout( function(){ _self.callAtTimeout(); }, 1000);
}

angular.module('Directory').controller('DirNewController', ['$rootScope', '$timeout', 'dirList', DirNewController]);