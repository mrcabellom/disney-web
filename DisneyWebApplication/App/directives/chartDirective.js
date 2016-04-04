(function () {
    'use strict';
    angular.module('disneyApp').directive('chartAttraction', ChartAttractionDirective);

    ChartAttractionDirective.$inject = ['$filter', 'utils'];

    function ChartAttractionDirective($filter, utils) {

        var chartOptions = {
            scaleOverride: true,
            scaleSteps: 12,
            scaleStepWidth: 5,
            scaleStartValue: 0
        };

        return {
            restrict: 'E',
            scope: {
                'attractionGroup': "=",
            },
            controller: ['$scope', function ($scope) {
                var orderedAttractions = $filter('orderBy')($scope.attractionGroup, '+date');
                $scope.labels = orderedAttractions.map(function (item) {
                    return moment.utc(item.date).format(utils.DATETIME_FORMAT);
                });
                var firstAttraction = $filter('first')(orderedAttractions);
                $scope.series = ['Tiempo Medio ' + firstAttraction.name];
                var dataAtttraction = orderedAttractions.map(function (item) {
                    return item.waitTimeAvg;
                });
                $scope.data = [dataAtttraction];
                $scope.options = {};
            }],
            templateUrl: '/App/Views/ChartAttraction.html'
        };
    }
})();