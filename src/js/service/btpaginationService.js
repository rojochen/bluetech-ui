(() => {
    paginationService.$inject = ['$log'];

    function paginationService($log) {
        let paginationInfo = null;
        let paginationService = {
            setInfo: (data) => {
                paginationInfo = angular.copy(data);
            },
            getInfo: () => {
                return paginationInfo;
            },
            goFirst: (id) => {
                $('#'+id).triggerHandler('goFirst');
            }
        };
        return paginationService;
    }

    app.factory('paginationService', paginationService);
})();