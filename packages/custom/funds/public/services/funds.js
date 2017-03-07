(function() {
    'use strict';

    function Funds($http, $q) {
        return {
            name: 'funds',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/funds/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.funds')
        .factory('Funds', Funds);

    Funds.$inject = ['$http', '$q'];

})();
