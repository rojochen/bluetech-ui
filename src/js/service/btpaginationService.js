// define([], function () {
//     'use strict';
//     var app = angular.module("bluetechUI");



//     return app;
// });


((() => {
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

    app.factory('paginationService', paginationService);
}))();