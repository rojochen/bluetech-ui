(() => {
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