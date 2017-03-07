(function() {
    'use strict';

    /* jshint -W098 */

    function FundsController($scope, Global, Funds, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'funds'
        };

        $scope.checkCircle = function() {
            Funds.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.funds')
        .controller('FundsController', FundsController);

    FundsController.$inject = ['$scope', 'Global', 'Funds', '$stateParams'];

})();
