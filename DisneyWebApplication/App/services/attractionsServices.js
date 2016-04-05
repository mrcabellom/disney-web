(function () {
    'use strict';

    angular.module('disneyApp').factory('attractionsService', AttractionSercice);

    AttractionSercice.inject = ['$http', 'Attraction', 'utils', '$filter'];

    function AttractionSercice($http, Attraction, utils, $filter) {

        var endPointApi = 'https://apidisneyapp.azurewebsites.net/api/attractions/',
            factory = {};

        factory.getAttractions = function () {

            return $http.get(endPointApi).then(function (result) {
                var attractions = [];
                if (result.data && result.data.length > 0) {
                    for (var i = 0, li = result.data.length; i < li; i++) {
                        var attraction = new Attraction(result.data[i]);
                        attractions.push(attraction);
                    }
                }
                return attractions;
            });
        };

        factory.getAttractionsAggregate = function (startDate, endDate, selectedAttractions) {

            var mappedAttractions = selectedAttractions.map(function (item) {
                return encodeURIComponent(item.attractionId);
            });

            var params = {
                enddate: moment(endDate).format(utils.DATETIME_FORMAT),
                startdate: moment(startDate).format(utils.DATETIME_FORMAT),
                attractions: mappedAttractions
            };
            return $http.get(endPointApi + 'aggregate', { params: params }).then(function (result) {
                return result.data.map(function (item) {
                    var attraction = $filter('filter')(selectedAttractions, { attractionId: item.attractionId });
                    item.name = attraction[0].name;
                    return item;
                });
            });
        };

        return factory;

    }

})();