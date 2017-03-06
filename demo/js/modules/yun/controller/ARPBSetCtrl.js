import {
    PortletCtrl
} from "./../../common/controllers/PortletCtrl.js";

class ArpbSetCtrl extends PortletCtrl {
    constructor($log, pnotifyService, modalService) {
        super();
        this.$log = $log;
        this.pnotifyService = pnotifyService;
        this.modalService = modalService;

    }
    $onInit() {
        this.tableControl = false;
        this.showTable = function () {
            this.tableControl = true;
        }
        this.ARPBSetData = {
            title: '新增ARPB設定',
            content: '確定新增？'
        }
        this.ARPBSetCancelData = {
            title: 'ARPB設定新增',
            content: '確定取消ARPB設定新增？'
        }
        this.editARPBData = {
            title: '修改ARPBSet',
            content: '確定編輯ARPBSet？'
        }
        this.itemDeleteData = {
            title: '刪除',
            content: '確定刪除？'
        }

        this.editARPBSetCancelData = {
            title: '取消修改ARPBSet',
            content: '確定取消編輯ARPBSet？'
        }
    }

    // 確定confirm start
    ARPBSetOKBtn() {
        this.modalService.openModal('ARPBSetCheckOK');
    }

    ARPBSetBtn(e) {
        console.log(e);
        if (e.status == "yes") {
            this.modalService.closeModal('addARBSet');
            this.modalService.closeModal('ARPBSetCheckOK');
            this.masterMultiItemEditUploadOk();
        } else {
            this.modalService.closeModal('ARPBSetCheckOK');
        }
    }

    // 取消confirm start
    ARPBSetCancelBtn() {
        this.modalService.openModal('ARPBSetCheckCancel');
    }

    ARPBSetCancel(e) {
        console.log(e);
        if (e.status == "yes") {
            this.modalService.closeModal('addARBSet');
            this.modalService.closeModal('ARPBSetCheckCancel');
        } else {
            this.modalService.closeModal('ARPBSetCheckCancel');
        }
    }

    // 取消confirm end
    // 修改停機可能率
    editARPBSetOKBtn() {
        this.modalService.openModal('editARPBSetCheck');
    }

    editARPBDecide(e) {
        console.log(e);
        if (e.status == "yes") {
            this.modalService.closeModal('editARBSet');
            this.modalService.closeModal('editARPBSetCheck');
            this.modifyTypeUploadOk();
        } else {
            this.modalService.closeModal('editARPBSetCheck');
        }
    }
    // 修改停機可能率 end

    // 修改停機可能率 取消

    editARPBSetCancelBtn() {
        this.modalService.openModal('editARPBSetCancelCheck');
    }

    editARPBSetCancelDecide() {
        console.log(e);
        if (e.status == "yes") {
            this.modalService.closeModal('editARBSet');
            this.modalService.closeModal('editARPBSetCancelCheck');

        } else {
            this.modalService.closeModal('editARPBSetCancelCheck');
        }
    }
    // 修改停機可能率取消 end

    // 刪除按鈕 start
    editDeleteBtn() {
        this.modalService.openModal('itemDeleteCheck');
    }

    itemDeleteDecide(e) {
        console.log(e);
        if (e.status == "yes") {
            this.modalService.closeModal('itemDeleteCheck');
            this.editTypeDeleteOk();
        } else {
            this.modalService.closeModal('itemDeleteCheck');
        }
    }
    // 刪除按鈕 end


    masterMultiItemEditUploadOk() {
        this.pnotifyService.pnotifySuccess('Success', '新增完成！');
        $timeout(function () {
            $('#masterMultiItemEdit').modal('hide');
        }, 400);
    }
    modifyTypeUploadOk() {
        this.pnotifyService.pnotifySuccess('Success', '修改完成！');
        $timeout(function () {
            $('#masterMultiItemEdit').modal('hide');
        }, 400);
    }
    editTypeDeleteOk() {
        this.pnotifyService.pnotifySuccess('Success', '刪除完成！');
        $timeout(function () {
            $('#masterMultiItemEdit').modal('hide');
        }, 400);
    }
    editTypeResetOk() {
        this.pnotifyService.pnotifySuccess('Success', '重置完成！');
        $timeout(function () {
            $('#masterMultiItemEdit').modal('hide');
        }, 400);
    }
    //Success end


}
ArpbSetCtrl.$inject = ['$log', 'pnotifyService', 'modalService'];
export {
    ArpbSetCtrl
};