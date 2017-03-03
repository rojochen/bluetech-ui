import {PortletCtrl} from "./../controllers/PortletCtrl.js";

class ConfirmModalCtrl extends PortletCtrl{
    constructor($log, pnotifyService, modalService){
        super();
        this.$log = $log;
        this.pnotifyService = pnotifyService;
        this.modalService = modalService;
    }

    $onInit(){
        this.$log.debug('do component init');
        
        this.confirmModal = {
            title: 'title-text',
            content: 'content-text'
        }
    }

    openConfirmModal(){
        this.modalService.openModal('rr');
    }

    eventConfirm(e){
        this.$log.debug(e);
        if(e.status === 'yes'){
            this.pnotifyService.pnotifySuccess('confirmModal 狀態', '點選確定按鈕');
        }else{
            this.pnotifyService.pnotifyError('confirmModal 狀態', '點選取消按鈕');
        } 
        this.modalService.closeModal('rr');
    }
}

ConfirmModalCtrl.$inject = ['$log', 'pnotifyService', 'modalService'];

export {ConfirmModalCtrl};