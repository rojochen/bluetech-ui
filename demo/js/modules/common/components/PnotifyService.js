class PnotifyServiceCtrl {
    constructor($scope, $log, pnotifyService) {
        // this.PnotifyServiceFun($scope, $log, pnotifyService);
        // const vm =this;
        // let vm = this;
        console.log(this);
        this.aaa = () => {
            alert('aaa');
        }
        this.pnotify_success = () => {
            pnotifyService.pnotifySuccess('title', 'content text');
        }
        this.pnotify_info = () => {
            pnotifyService.pnotifyInfo('title', 'content text', 1000);
        }
        this.pnotify_error = () => {
            pnotifyService.pnotifyError('title', 'content text');
        }
        this.pnotify_warn = () => {
            pnotifyService.pnotifyWarn('title', 'content text');
        }
        this.pnotify_dark = () => {
            pnotifyService.pnotifyDark('title', 'content text');
        }
    }

    PnotifyServiceFun($scope, $log, pnotifyService) {
        /* begin pnotifyService頁面 */

        /* end pnotifyService頁面 */
    }
}

import template from "./../views/pnotifyService.html";
export const PnotifyService = {
    template,
    controller: PnotifyServiceCtrl,
    controllerAs:"vm"

}

PnotifyService.$inject = ['$scope', '$log', 'pnotifyService'];