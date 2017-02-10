define(['bluetech'], function () {
    'use strict';

    var app = angular.module("bluetechUI", ['bluetech']),
        btDatepicker = require('directive/btDatepicker.js'),
        btDatepickerRange = require('directive/btDatepickerRange.js'),
        btPagination = require('directive/btPagination.js'),
        paginationService = require('service/btpaginationService.js'),
        pnotifyService = require('service/pnotifyService.js');
  
    return app;
});