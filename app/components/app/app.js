'use strict';

var directoryApp = angular.module('directoryApp', ['base64','ngRoute','ngCookies', 'Authentication', 'Directory'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/login', {
        controller: 'LoginController',
        controllerAs: 'login',
        templateUrl: 'app/modules/authentication/templates/loginView.html'
    }).
    when('/dirlist', {
        controller: 'DirListController',
        controllerAs: 'dirl',
        templateUrl: 'app/modules/directory/templates/directoryListView.html'
    }).
    when('/adddir', {
        controller: 'DirNewController',
        controllerAs: 'dirc',
        templateUrl: 'app/modules/directory/templates/directoryCreateView.html'
    }).
    otherwise({
        redirectTo: '/dirlist'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
})

.run(['$rootScope', '$location', '$cookieStore', '$http', function ($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.admin = $cookieStore.get('admin') || {};

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in
        if ($location.path() !== '/login' && !$rootScope.admin.userData) {
            $location.path('/login');
        }
    });
}]);
