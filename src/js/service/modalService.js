// define([], function () {
//     'use strict';
//     var app = angular.module("bluetechUI");



//     return app;
// });


// ((() => {

// }))();

import app from '../blue.js';
// export function modalService() {
btmodalService.$inject = ['$log'];

function btmodalService($log) {
    const modalService = {
        openModal(id) {
            $(`#${id}`).modal('show');
        },
        closeModal(id) {
            $(`#${id}`).modal('hide');
        }
    };
    return btmodalService;
}

export let modalService = app.factory('modalService', btmodalService);


// }