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
                'attractionGroupId': "="
            },
            controller: ['$scope', function ($scope) {
                var orderedAttractions = $filter('orderBy')($scope.attractionGroup, '+date');
                $scope.labels = orderedAttractions.map(function (item) {
                    return moment(item.date).format(utils.DATETIME_FORMAT);
                });
                $scope.series = ['Tiempo Medio ' + $scope.attractionGroupId];
                var dataAtttraction = orderedAttractions.map(function (item) {
                    return item.waitTime;
                });
                $scope.data = [dataAtttraction];
                $scope.options = chartOptions;
            }],
            templateUrl: '/App/Views/ChartAttraction.html'
        };
    }
})();