'use strict';

function DirList ($http) {

	this.getDir = function (responseCall) {
        return $http.get("data/directory/directory.json");
    };

    return this;
}
angular.module('Directory', []).factory('dirList', ['$http', DirList]);