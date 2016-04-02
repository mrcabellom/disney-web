(function () {
    'use strict';

    angular.module('disneyApp').factory('attractionsService', AttractionSercice);

    AttractionSercice.inject = ['$http', 'Attraction'];

    function AttractionSercice($http, Attraction) {

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

        factory.getAttractionsAggregate = function () {

            var params = {
                enddate:"",
                startdate:"",
                attractionId:""
            };

            return $http.get(endPointApi + 'aggregate', {params: params}).then(function (result) {
                return result.data;
            });
        };


        return factory;

    }

})();