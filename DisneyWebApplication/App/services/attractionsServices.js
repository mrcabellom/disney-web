(function () {
    'use strict';

    angular.module('disneyApp').factory('attractionsService', AttractionSercice);

    AttractionSercice.inject = ['$http', 'Attraction','utils'];

    function AttractionSercice($http, Attraction, utils) {

        var endPointApi ='https://apidisneyapp.azurewebsites.net/api/attractions/',
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

        factory.getAttractionsAggregate = function (startDate, endDate, attractions) {

            var attractionEncodeUri = attractions.map(function (item) {
                return encodeURIComponent(item);
            });            

            var params = {
                enddate: moment(endDate).format(utils.DATETIME_FORMAT),
                startdate: moment(startDate).format(utils.DATETIME_FORMAT),
                attractions: attractionEncodeUri
            };
            return $http.get(endPointApi + 'aggregate', {params: params}).then(function (result) {
                return result.data;
            });
        };
        
        return factory;

    }

})();