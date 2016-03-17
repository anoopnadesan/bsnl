angular.module('Navigation', [])
.component('navBar', {
    templateUrl: '/src/components/navbar/nav.html',
    $routeConfig: [
        {path: '/login/', name: 'Login', component: 'login'},
        {path: '/directory/', name: 'Directory', component: 'directory'},
    ]
});
