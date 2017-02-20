// define([], function () {
//     'use strict';
//     var app = angular.module("bluetechUI");



//     return app;
// });


((() => {
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

    app.factory('modalService', modalService);
}))();