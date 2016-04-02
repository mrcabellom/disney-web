var appModels = angular.module('disneyApp');

appModels.factory('Attraction', function () {

    function Attraction(attractionData) {
        if (attractionData) {
            this.setData(attractionData);
        }
    }

    Attraction.prototype.setData = function (attractionData) {
        angular.extend(this, attractionData);
    };

    Attraction.prototype.hasFastPass = function () {
        return this.waitTime.fastPass.available;
    };

    Attraction.prototype.isClosed = function () {
        return this.waitTime.status === 'Closed';
    };

    Attraction.prototype.isOperating = function () {
        return this.waitTime.status === 'Operating';
    };

    Attraction.prototype.isDown = function () {
        return this.waitTime.status === 'Down';
    };

    Attraction.prototype.getWaitTime = function () {
        return this.waitTime.postedWaitMinutes;
    };

    Attraction.prototype.getStatus = function () {
        return this.waitTime.status;
    };

    return Attraction;
});