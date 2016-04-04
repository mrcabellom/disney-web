(function () {
    'use strict';
    angular.module('disneyApp').directive('attractionsAggregate', AttractionsAggregate);

    AttractionsAggregate.$inject = ['attractionsService','$filter'];

    function AttractionsAggregate(attractionsService, $filter) {
        return {
            restrict: 'E',
            controller: ['$scope', function ($scope) {
                
                $scope.getAttractionsAggregate = function () {
                    var selectedAttractions = $filter('filter')($scope.attractions, { selected: true }, true);
                    attractionsService.getAttractionsAggregate($scope.startDate, $scope.endDate, selectedAttractions).then(function (result) {
                        $scope.aggregations = result;
                    });
                };
            }],
            templateUrl: '/App/Views/SelectAggregate.html'
        };
    }
})();
