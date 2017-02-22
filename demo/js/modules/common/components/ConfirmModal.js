class ConfirmModalCtrl{
    constructor($scope, $log, pnotifyService, modalService){
        this.ConfirmModalFun($scope, $log, pnotifyService, modalService)
    }

    ConfirmModalFun($scope, $log, pnotifyService, modalService){
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

import template from "./../views/confirmModal.html";
export const ConfirmModal = {
    template,
    controller: ConfirmModalCtrl
}

ConfirmModal.$inject = ['$scope', '$log', 'pnotifyService', 'modalService'];