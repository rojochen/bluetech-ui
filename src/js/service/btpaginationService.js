((myApp)=>{
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
    myApp.factory('paginationService', btpaginationService1);
})(app);
// }