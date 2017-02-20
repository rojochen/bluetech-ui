// define([], function () {
//     'use strict';
//     var app = angular.module("bluetechUI");



//     return app;
// });


// ((() => {

// }))();

import app from '../blue.js';
// export function modalService() {
modalService.$inject = ['$log'];

function modalService($log) {
    const modalService = {
        openModal(id) {
            $(`#${id}`).modal('show');
        },
        closeModal(id) {
            $(`#${id}`).modal('hide');
        }
    };
    return modalService;
}

let modalService = app.factory('modalService', modalService);

export let modalService;
// }