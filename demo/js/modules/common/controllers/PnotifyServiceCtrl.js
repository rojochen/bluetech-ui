class PnotifyServiceCtrl extends PortletCtrl{
    constructor($scope, $log, pnotifyService){
        super();
        this.PnotifyServiceFun($scope, $log, pnotifyService);
    }

    PnotifyServiceFun($scope, $log, pnotifyService){
        super.PortletFun();

        /* begin pnotifyService頁面 */
        $scope.pnotify_success = () => {
        pnotifyService.pnotifySuccess('title', 'content text');
        }
        $scope.pnotify_info = () => {
        pnotifyService.pnotifyInfo('title', 'content text', 1000);
        }
        $scope.pnotify_error = () => {
        pnotifyService.pnotifyError('title', 'content text');
        }
        $scope.pnotify_warn = () => {
        pnotifyService.pnotifyWarn('title', 'content text');
        }
        $scope.pnotify_dark = () => {
        pnotifyService.pnotifyDark('title', 'content text');
        }
        /* end pnotifyService頁面 */
    }
}

PnotifyServiceCtrl.$inject = ['$scope', '$log', 'pnotifyService'];

import {PortletCtrl} from "./../controllers/PortletCtrl.js";

export {PnotifyServiceCtrl};