export class ModalService{
        constructor($log){
            this.$log = $log;            
        }
        openModal(id){
             $('#'+id).modal('show');
        }
        closeModal(id){
            $('#'+id).modal('hide');
        }
}
 ModalService.$inject = ['$log'];
