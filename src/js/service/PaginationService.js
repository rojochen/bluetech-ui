export class PaginationService{
        constructor($log){
            this.$log = $log;
            this.paginationInfo = null;
        }
        setInfo(paginationInfo){
            this.paginationInfo = paginationInfo;
        }
        getInfo(){
            return this.paginationInfo;
        }
        goFirst(id){
            $('#'+id).triggerHandler('goFirst');
        }
}
 PaginationService.$inject = ['$log'];