(function () {
    'use strict';
    angular.module('disneyApp').directive('attractionsAggregate', AttractionsAggregate);

    AttractionsAggregate.$inject = ['attractionsService'];

    function AttractionsAggregate(attractionsService) {
        return {
            restrict: 'E',
            controller: ['$scope', function ($scope) {
                
                $scope.getAttractionsAggregate = function () {
                    attractionsService.getAttractionsAggregate($scope.startDate, $scope.endDate, "attraction1").then(function (result) {
                        $scope.aggregations = result;
                    });
                };
            }],
            templateUrl: '/App/Views/SelectAggregate.html'
        };
    }
})();
