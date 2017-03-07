(function() {
    'use strict';

    function Funds($stateProvider) {

        $stateProvider

            .state('funds', {
                url: '/funds',
                templateUrl: 'funds/views/fundform.html',
                controller: 'FundingCtrl',
                data: {
                    requiresLogin: true,
                    requiresAdmin: false
                }
            })

            .state('fundpage', {
                url: '/fundpage',
                templateUrl: 'funds/views/fundlist.html',
                controller: 'FundingCtrl',
                data: {
                    requiresLogin: true,
                    requiresAdmin: false
                }
            })

            .state('adminpage', {
                url: '/adminpage',
                templateUrl: 'funds/views/adminpage.html',
                controller: 'AdminCtrl',
                data: {
                    requiresLogin: true,
                    requiresAdmin: true
                }
            });
    }

    angular
        .module('mean.funds')
        .config(Funds)
        .run(FundEvent);

    Funds.$inject = ['$stateProvider'];
    FundEvent.$inject = ['$rootScope', '$state', '$timeout', '$window', 'MeanUser']

})();

function FundEvent($rootScope, $state, $timeout, $window, MeanUser) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {

        if (toState.data) {
            if (toState.data.requiresLogin && !MeanUser.loggedin) {
                $timeout(function() {
                    $state.go('auth.login');
                });
            } else if (MeanUser.loggedin && toState.data.requiresAdmin && !MeanUser.isAdmin) {
                $timeout(function() {
                    $state.go('fundpage');
                });
            } else if (!toState.data.requiresAdmin && MeanUser.isAdmin) {
                $timeout(function() {
                    $state.go('adminpage');
                });
            }
        }
    })
};
