(function () {
    'use strict';
    var dependencies = [
        'ui.bootstrap.datetimepicker',
        'chart.js',
        'angular.filter'
    ];
    var app = angular.module('disneyApp', dependencies);
    app.constant('utils',{
        DATETIME_FORMAT: 'YYYY-MM-DD HH'
    });
})();