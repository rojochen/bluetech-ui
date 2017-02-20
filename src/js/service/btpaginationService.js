// define([], function () {
//     'use strict';
//     var app = angular.module("bluetechUI");



//     return app;
// });


// ((() => {

// }))();
import app from '../blue.js';
// export function paginationService() {
btpaginationService.$inject = ['$log'];

function btpaginationService1($log) {
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
    return btpaginationService1;
}

export let paginationService = app.factory('paginationService', btpaginationService1);
// }