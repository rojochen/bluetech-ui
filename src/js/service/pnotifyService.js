// define([], function () {
//     'use strict';
//     var app = angular.module("bluetechUI");



//     return app;
// });


// ((() => {

// }))();

 // export function pnotifyService() {
        
(()=>{
    function btpnotifyService($log) {
        const paginationInfo = null;
        return {
            pnotifySuccess(title, content) {
                new PNotify({
                    title,
                    text: content,
                    type: 'success',
                    styling: 'bootstrap3'
                });
            },
            pnotifyInfo(title, content) {
                new PNotify({
                    title,
                    text: content,
                    type: 'info',
                    styling: 'bootstrap3'
                });
            },
            pnotifyError(title, content) {
                new PNotify({
                    title,
                    text: content,
                    type: 'error',
                    styling: 'bootstrap3'
                });
            },
            pnotifyWarn(title, content) {
                new PNotify({
                    title,
                    text: content,
                    type: 'warn',
                    styling: 'bootstrap3'
                });
            },
            pnotifyDark(title, content) {
                new PNotify({
                    title,
                    text: content,
                    styling: 'bootstrap3',
                    addclass: 'dark'
                });
            }
        };
        
    }
    btpnotifyService.$inject = ['$log'];
     angular.module("bluetechUI").factory('pnotifyService', btpnotifyService);
})();

// }