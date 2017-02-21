(()=>{
    // function btpaginationService1($log) {
    //     let paginationInfo = null;
    //     return {
    //         setInfo(data) {
    //             paginationInfo = angular.copy(data);
    //         },
    //         getInfo() {
    //             return paginationInfo;
    //         },
    //         goFirst(id) {
    //             $(`#${id}`).triggerHandler('goFirst');
    //         }
    //     };
        
    // }
    class PanginationService{
         constructor($log) {
            this.$log = $log;
            this.paginationInfo = null;
         }
         setInfo(paginationInfo){
             this.paginationInfo = angular.copy(paginationInfo);
         }
         getInfo(){
             return this.paginationInfo;
         }
         goFirst(id){
            
              $(`#${id}`).triggerHandler('goFirst');
         }
          
    }

    PanginationService.$inject = ['$log'];
    angular.module("bluetechUI").factory('paginationService',($log)=> new PanginationService($log));
})();
// }