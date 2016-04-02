(function () {
    'use strict';
    angular.module('disneyApp').directive('attractionsList', AttractionsList);

    AttractionsList.$inject = ['attractionsService'];

    function AttractionsList(attractionsService) {
        return {
            restrict: 'E',
            controller: ['$scope', function ($scope) {
                attractionsService.getAttractions().then(function (attractions) {
                    $scope.attractions = attractions;
                });
            }],
            templateUrl: function (tElement, tAttrs) {
               return tAttrs.template === 'list' ? '/App/Views/Attractions.html' : '/App/Views/SelectAttractions.html';
            }
        };
    }
})();
