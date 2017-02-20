// define([], function () {
//     'use strict';
//     var app = angular.module("bluetechUI");



//     return app;
// });


// ((() => {

// }))();
import app from '../blue.js';
// export function paginationService() {
paginationService.$inject = ['$log'];

function paginationService($log) {
    let paginationInfo = null;
    const paginationService = {
        setInfo(data) {
            paginationInfo = angular.copy(data);
        },
        getInfo() {
            return paginationInfo;
        },
        goFirst(id) {
            $(`#${id}`).triggerHandler('goFirst');
        }
    };
    return paginationService;
}

let paginationService = app.factory('paginationService', paginationService);
// }
export let paginationService;