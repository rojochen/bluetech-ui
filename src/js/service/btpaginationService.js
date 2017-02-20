(()=>{
    function btpaginationService1($log) {
        let paginationInfo = null;
        return {
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
        
    }
    btpaginationService1.$inject = ['$log'];
    angular.module("bluetechUI").factory('paginationService', btpaginationService1);
})();
// }