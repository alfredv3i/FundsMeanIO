(function() {
    'use strict';

    function Funds($stateProvider) {

        $stateProvider

        // .state('login', {
        //     url: '/login',
        //     templateUrl: 'funds/views/login.html',
        //     controller: 'LoginCtrl',
        //     controllerAs: 'loginCtrl',
        //     data: {
        //         requiresLogin: false,
        //         requiresAdmin: false
        //     }
        // })
        //
        // .state('register', {
        //     url: '/register',
        //     templateUrl: 'funds/views/register.html',
        //     controller: 'LoginCtrl',
        //     controllerAs: 'loginCtrl',
        //     data: {
        //         requiresLogin: false,
        //         requiresAdmin: false
        //     }
        // })

        .state('funds', {
            url: '/funds',
            templateUrl: 'funds/views/fundform.html',
            controller: 'FundingCtrl',
            controllerAs: 'fundCtrl',
            data: {
                requiresLogin: true,
                requiresAdmin: false
            }
        })

        .state('fundpage', {
            url: '/fundpage',
            templateUrl: 'funds/views/fundlist.html',
            controller: 'FundingCtrl',
            controllerAs: 'fundCtrl',
            data: {
                requiresLogin: true,
                requiresAdmin: false
            }
        })

        .state('adminpage', {
            url: '/adminpage',
            templateUrl: 'funds/views/adminpage.html',
            controller: 'AdminCtrl',
            controllerAs: 'adminCtrl',
            data: {
                requiresLogin: true,
                requiresAdmin: true
            }
        });
    }

    angular
        .module('mean.funds')
        .config(Funds);

    Funds.$inject = ['$stateProvider'];

})();

// angular.module('FundingApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
//
//         $urlRouterProvider.otherwise('/home/welcome');
//
//         $stateProvider
//
//             .state('home', {
//                 url: '/home',
//                 templateUrl: 'views/partials/header.html',
//                 controller: 'LoginCtrl',
//             })
//
//             .state('home.welcome', {
//                 url: '/welcome',
//                 templateUrl: 'views/partials/homepage.html',
//                 controller: 'LoginCtrl',
//                 data: {
//                     requiresLogin: false,
//                     requiresAdmin: false
//                 }
//             })
//
//             .state('home.login', {
//                 url: '/login',
//                 templateUrl: 'views/partials/login.html',
//                 controller: 'LoginCtrl',
//                 controllerAs: 'loginCtrl',
//                 data: {
//                     requiresLogin: false,
//                     requiresAdmin: false
//                 }
//             })
//
//             .state('home.register', {
//                 url: '/register',
//                 templateUrl: 'views/partials/register.html',
//                 controller: 'LoginCtrl',
//                 controllerAs: 'loginCtrl',
//                 data: {
//                     requiresLogin: false,
//                     requiresAdmin: false
//                 }
//             })
//
//             .state('home.funds', {
//                 url: '/funds',
//                 templateUrl: 'views/partials/fundform.html',
//                 controller: 'FundingCtrl',
//                 controllerAs: 'fundCtrl',
//                 data: {
//                     requiresLogin: true,
//                     requiresAdmin: false
//                 }
//             })
//
//             .state('home.fundpage', {
//                 url: '/fundpage',
//                 templateUrl: 'views/partials/fundlist.html',
//                 controller: 'FundingCtrl',
//                 controllerAs: 'fundCtrl',
//                 data: {
//                     requiresLogin: true,
//                     requiresAdmin: false
//                 }
//             })
//
//             .state('home.adminpage', {
//                 url: '/adminpage',
//                 templateUrl: 'views/partials/adminpage.html',
//                 controller: 'AdminCtrl',
//                 controllerAs: 'adminCtrl',
//                 data: {
//                     requiresLogin: true,
//                     requiresAdmin: true
//                 }
//             });
//     }])
//
//     .run(['$rootScope', '$state', '$timeout', '$window', function($rootScope, $state, $timeout, $window) {
//         $rootScope.$on('$stateChangeStart', function(event, toState) {
//                 console.log(event);
//                 $rootScope.userName = $window.localStorage.getItem('userName');
//                 if ($window.localStorage.getItem('loggedIn') == 'true') {
//                     $rootScope.loggedIn = true;
//                 } else {
//                     $rootScope.loggedIn = false;
//                 }
//                 if ($window.localStorage.getItem('isAdmin') == 'true') {
//                     $rootScope.isAdmin = true;
//                 } else {
//                     $rootScope.isAdmin = false;
//                 }
//             if (toState.data.requiresLogin) {
//                 if (!$rootScope.loggedIn) {
//                     $timeout(function() {
//                         $state.go('home.login');
//                     });
//
//                 }
//             }
//             if (toState.data.requiresAdmin) {
//                 if (!$rootScope.isAdmin) {
//                     $timeout(function() {
//                         $state.go('home.fundpage');
//                     });
//                 }
//             }
//             if (toState.url == '/welcome') {
//                 $rootScope.inWelcome = true;
//             } else {
//                 $rootScope.inWelcome = false;
//             }
//         })
//     }]);
