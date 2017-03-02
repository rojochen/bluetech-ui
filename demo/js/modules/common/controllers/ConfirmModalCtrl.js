class ConfirmModalCtrl extends PortletCtrl{
    constructor($scope, $log, pnotifyService, modalService){
        super();
        this.ConfirmModalFun($scope, $log, pnotifyService, modalService)
    }

    ConfirmModalFun($scope, $log, pnotifyService, modalService){
        super.PortletFun();

        /* begin btConfirmModal頁面 */
        $scope.confirmModal = {
        title: 'title-text',
        content: 'content-text'
        }
        $scope.openConfirmModal = () => {
        modalService.openModal('rr');
        };
        $scope.eventConfirm = (e) => {
        $log.debug(e);
        if(e.status === 'yes'){
            pnotifyService.pnotifySuccess('confirmModal 狀態', '點選確定按鈕');
        }else{
            pnotifyService.pnotifyError('confirmModal 狀態', '點選取消按鈕');
        }
        modalService.closeModal('rr');
        };
        /* end btConfirmModal頁面 */
        
    }
}

ConfirmModalCtrl.$inject = ['$scope', '$log', 'pnotifyService', 'modalService'];

import {PortletCtrl} from "./../controllers/PortletCtrl.js";

export {ConfirmModalCtrl};