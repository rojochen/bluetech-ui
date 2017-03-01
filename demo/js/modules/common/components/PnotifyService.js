class PnotifyServiceCtrl{
    constructor($scope, $log, pnotifyService){
        this.PnotifyServiceFun($scope, $log, pnotifyService);
    }

    PnotifyServiceFun($scope, $log, pnotifyService){
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

import template from "./../views/pnotifyService.html";
export const PnotifyService = {
    template,
    controller: PnotifyServiceCtrl
}

PnotifyService.$inject = ['$scope', '$log', 'pnotifyService'];