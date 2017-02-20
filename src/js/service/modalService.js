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
    return {
        openModal(id) {
            $(`#${id}`).modal('show');
        },
        closeModal(id) {
            $(`#${id}`).modal('hide');
        }
    };
    
}

export let modalService = app.factory('modalService', btmodalService);


// }