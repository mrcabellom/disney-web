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
                    var mappedAttractions = selectedAttractions.map(function(item){
                        return item.id;
                    });
                    attractionsService.getAttractionsAggregate($scope.startDate, $scope.endDate, mappedAttractions).then(function (result) {
                        $scope.aggregations = result;
                    });
                };
            }],
            templateUrl: '/App/Views/SelectAggregate.html'
        };
    }
})();
