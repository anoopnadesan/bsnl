'use strict';

angular.module('app', ['ngComponentRouter', 'base64', 'ngCookies', 'Authentication', 'Directory', 'Navigation'])
.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'app')

.component('app', {
        templateUrl: 'src/components/app/app.html'
});
