import {
    PortletCtrl
} from "./../../common/controllers/PortletCtrl.js";

class MultiEditServiceCtrl extends PortletCtrl {
    constructor($log, pnotifyService, modalService) {
        super();
        this.$log = $log;
        this.pnotifyService = pnotifyService;
        this.modalService = modalService;

    }
    $onInit() {
        /* lightbox open */
        $(document).on('hidden.bs.modal', '.modal', function () {
            $('.modal:visible').length && $(document.body).addClass('modal-open');
        });
        $(document).on('show.bs.modal', '.modal', function () {
            $("element.style").css("padding-right", "0");
        });

        /* lightbox end */
        this.$log.debug('do component init');
        "命名規則 ‘開頭要小寫’ ,‘開頭先動詞後名詞’"
        // table假資料
        this.editMultiServiceA();
        //修改confirm
        this.editMultiConfirm = {
            title: '修改主約類型多筆維護畫面',
            content: '確定修改主約類型多筆維護？'
        }
        // 重置confirm
        this.editMultiResetConfirm = {
            title: '重置主約類型多筆維護畫面',
            content: '確定重置主約類型多筆維護？'
        }
        // 違約金
        this.punitiveTableData = [{
            'punitiveNo': 1,
            'punitiveType': '電信折扣(月租型)',
            'punitiveStartDate': '0.0',
            'punitiveEndDate': '0.0',
            'punitiveGold': '0'
        }, {
            'punitiveNo': 2,
            'punitiveType': '電信折扣(月租型)',
            'punitiveStartDate': '0.0',
            'punitiveEndDate': '0.0',
            'punitiveGold': '0'
        }]
        //  折扣
        this.discountTableData = [{
            'discountItem': '166402-月租費優惠165元*30個月'
        }];
        //續約適用活動期間 start
        this.renewalSuitableDateStart = new Date();
        //續約適用活動期間 end
    }
    //修改confirm start
    openConfirmModal() {
        this.modalService.openModal('masterMultiItemEditUpload');
    }

    eventConfirm(e) {
        this.$log.debug(e);
        if (e.status === 'yes') {
            this.pnotifyService.pnotifySuccess('Success', '修改完成');
            this.modalService.closeModal('masterMultiItemEdit');
        } else {
            this.pnotifyService.pnotifyError('Cancel', '修改取消');
        }
        this.modalService.closeModal('masterMultiItemEditUpload');
    }
    //修改confirm end
    // 重置confirm start
    masterMultiItemEditReset() {
        this.modalService.openModal('masterMultiItemEditReset');
    }
    resetConfirm(e) {
        this.$log.debug(e);
        if (e.status === 'yes') {
            this.pnotifyService.pnotifySuccess('Success', '重置完成');
        } else {
            this.pnotifyService.pnotifyError('Cancel', '重置取消');
        }
        this.modalService.closeModal('masterMultiItemEditReset');
    }
    //重置confirm end

    masterMultiItemEditUploadOk() {
        this.pnotifyService.pnotifySuccess('Success', '更新完成！ ');
        $timeout(function () {
            $('#masterMultiItemEdit').modal('hide');
        }, 400);
    }

    //假資料
    editMultiServiceA() {
        this.multiEditSeviceTableData = [{
            'multiEditSeviceNo': 1,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 21,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.2',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 2,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 20,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 19,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 3,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.2',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 18,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 4,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.2',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 17,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 16,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 5,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.2',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 15,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 6,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 13,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 7,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '1',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 8,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 9,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '2',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 14,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 11,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 10,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 12,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }];

    }
}
MultiEditServiceCtrl.$inject = ['$log', 'pnotifyService', 'modalService'];
export {
    MultiEditServiceCtrl
};