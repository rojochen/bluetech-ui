(() => {
    modalService.$inject = ['$log'];

    function modalService($log) {
        let modalService = {
            openModal: (id) => {
                $('#'+id).modal('show');
            },
            closeModal: (id) => {
                $('#'+id).modal('hide');
            }
        };
        return modalService;
    }

    app.factory('modalService', modalService);
})();