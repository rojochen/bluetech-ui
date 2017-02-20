// // define([], function () {
// //     'use strict';
// //     var app = angular.module("bluetechUI");



// //     return app;
// // });


// // ((() => {

// // }))();

//  // export function modalService() {
//          let app = angular.module("bluetechUI");

// btmodalService.$inject = ['$log'];

// function btmodalService($log) {
//     return {
//         openModal(id) {
//             $(`#${id}`).modal('show');
//         },
//         closeModal(id) {
//             $(`#${id}`).modal('hide');
//         }
//     };
    
// }

// export let modalService = app.factory('modalService', btmodalService);
(()=>{
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
    btmodalService.$inject = ['$log'];
    angular.module("bluetechUI").factory('modalService', btmodalService);
})();

 