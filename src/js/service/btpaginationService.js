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
    return {
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
     
}

export let paginationService = app.factory('paginationService', btpaginationService1);
// }