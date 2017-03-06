import {PortletCtrl} from "./../../common/controllers/PortletCtrl.js";

class MultiEditServiceCtrl extends PortletCtrl {
    constructor($log, pnotifyService, modalService) {
        super();
        this.$log = $log;
        this.pnotifyService = pnotifyService;
        this.modalService = modalService;

    }
    $onInit() {
        this.$log.debug('do component init');
        "命名規則 ‘開頭要小寫’ ,‘開頭先動詞後名詞’"
        this.editMultiServiceA();
    }
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