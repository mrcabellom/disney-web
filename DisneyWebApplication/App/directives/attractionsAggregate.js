(function () {
    'use strict';
    angular.module('disneyApp').directive('attractionsAggregate', AttractionsAggregate);

    AttractionsAggregate.$inject = ['attractionsService'];

    function AttractionsAggregate(attractionsService) {
        return {
            restrict: 'E',
            controller: ['$scope', function ($scope) {
                
                $scope.getAttractionsAggregate = function () {
                    console.log($scope.endDate);
                    console.log($scope.startDate);
                };
            }],
            templateUrl: '/App/Views/SelectAggregate.html'
        };
    }
})();
