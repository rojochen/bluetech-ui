(() => {
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
    class ModalService{
        constructor($log){
            this.$log = $log;
        }
        openModal(id){
            $(`#${id}`).modal('show');
        }
        closeModal(id) {
                $(`#${id}`).modal('hide');
            }
    }
    btmodalService.$inject = ['$log'];
    angular.module("bluetechUI").factory('modalService', ($log)=> new ModalService($log));
})();