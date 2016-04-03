(function () {
    'use strict';

    angular.module('disneyApp').factory('attractionsService', AttractionSercice);

    AttractionSercice.inject = ['$http', 'Attraction','utils'];

    function AttractionSercice($http, Attraction, utils) {

        var endPointApi = 'https://apidisneyapp.azurewebsites.net/api/attractions/',
            factory = {};

        factory.getAttractions = function () {

            return $http.get(endPointApi).then(function (result) {
                var attractions = [];
                if (result.data.entries && result.data.entries.length > 0) {
                    for (var i = 0, li = result.data.entries.length; i < li; i++) {
                        var attraction = new Attraction(result.data.entries[i]);
                        attractions.push(attraction);
                    }
                }
                return attractions;
            });
        };

        factory.getAttractionsAggregate = function (startDate, endDate, attractionId) {

            var params = {
                enddate: moment(endDate).format(utils.DATETIME_FORMAT),
                startdate: moment(startDate).format(utils.DATETIME_FORMAT),
                attractionId: attractionId
            };
            return $http.get(endPointApi + 'aggregate', {params: params}).then(function (result) {
                return [
                    {
                        "id": "1",
                        "attractionId": "attraction1",
                        "date": "2014-09-15T12:14:25.7251173",
                        "waitTime": 4
                    },
                    {
                        "id": "2",
                        "attractionId": "attraction1",
                        "date": "2014-09-16T12:14:25.7251173",
                        "waitTime": 8
                    }
                ]
            });
        };
        
        return factory;

    }

})();