angular.module('mean.funds').controller('FundingCtrl', ['FundService', '$scope', '$state', '$window', 'MeanUser',
    function(FundService, $scope, $state, $window, MeanUser) {

        $scope.submitFund = function() {
            if ($scope.fund) {
                FundService.save({
                    fund: $scope.fund,
                    user: MeanUser.user
                }).then(function(response) {
                    $scope.fund = {};
                    alert('Fund submitted successfully');
                }, function(error) {
                    alert('Unable to add funds \n Error ' + error.status + ': ' + error.statusText);
                });
            }
        }

        $scope.getFunds = function() {
            if (MeanUser.loggedin) {
                FundService.getFunds(MeanUser.user._id)
                    .then(function(response) {
                        $scope.funds = response.data;
                        if (!$scope.funds.length) {
                            alert('Your fund list is empty');
                        }
                    }, function(error) {
                        alert('Unable to get funds \n Error ' + error.status + ': ' + error.statusText);
                    })
            }
        }
    }
]);
