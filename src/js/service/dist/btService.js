var app = angular.module("bluetechUI");
// define([], function () {
//     'use strict';
//     var app = angular.module("bluetechUI");



//     return app;
// });


(function () {
    paginationService.$inject = ['$log'];

    function paginationService($log) {
        var paginationInfo = null;
        var paginationService = {
            setInfo: function (data) {
                paginationInfo = angular.copy(data);
            },
            getInfo: function () {
                return paginationInfo;
            },
            goFirst: function (id) {
                $('#' + id).triggerHandler('goFirst');
            }
        };
        return paginationService;
    }

    app.factory('paginationService', paginationService);
})();
// define([], function () {
//     'use strict';
//     var app = angular.module("bluetechUI");



//     return app;
// });


(function () {
    modalService.$inject = ['$log'];

    function modalService($log) {
        var modalService = {
            openModal: function (id) {
                $('#' + id).modal('show');
            },
            closeModal: function (id) {
                $('#' + id).modal('hide');
            }
        };
        return modalService;
    }

    app.factory('modalService', modalService);
})();
// define([], function () {
//     'use strict';
//     var app = angular.module("bluetechUI");



//     return app;
// });


(function () {
    pnotifyService.$inject = ['$log'];

    function pnotifyService($log) {
        var paginationInfo = null;
        var pnotifyService = {
            pnotifySuccess: function (title, content) {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'success',
                    styling: 'bootstrap3'
                });
            },
            pnotifyInfo: function (title, content) {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'info',
                    styling: 'bootstrap3'
                });
            },
            pnotifyError: function (title, content) {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'error',
                    styling: 'bootstrap3'
                });
            },
            pnotifyWarn: function (title, content) {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'warn',
                    styling: 'bootstrap3'
                });
            },
            pnotifyDark: function (title, content) {
                new PNotify({
                    title: title,
                    text: content,
                    styling: 'bootstrap3',
                    addclass: 'dark'
                });
            }
        };
        return pnotifyService;
    }

    app.factory('pnotifyService', pnotifyService);
})();