(function(){
    modalService.$inject = ['$log'];

    function modalService($log) {
        var modalService = {
            openModal: function (id) {
                $('#'+id).modal('show');
            },
            closeModal: function(id){
                $('#'+id).modal('hide');
            }
        };
        return modalService;
    }

    app.factory('modalService', modalService);
})();