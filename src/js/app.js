define(['bluetech'], () => {
    const app = angular.module("bluetechUI", ['bluetech']);
    //directive
    // btDatepicker = require('directive/btDatepicker.js'),
    // btDatepickerRange = require('directive/btDatepickerRange.js'),
    // btPagination = require('directive/btPagination.js'),
    // btConfirmModal = require('directive/btConfirmModal.js'),

    const btDirective = require("directive/dist/btDirective");

    //service

    const btService = require("./service/dist/btService");
    // paginationService = require('service/btpaginationService.js'),
    // pnotifyService = require('service/pnotifyService.js'),
    // modalService = require('service/modalService.js');

    return app;
});