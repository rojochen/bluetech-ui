import {PortletCtrl} from "./../controllers/PortletCtrl.js";

class PnotifyServiceCtrl extends PortletCtrl{
    constructor($log, pnotifyService){
        super();
        this.$log = $log;
        this.pnotifyService = pnotifyService;
    }

    $onInit(){
        this.$log.debug('do component init');
    }

    pnotify_success(){
        this.pnotifyService.pnotifySuccess('title', 'content text');
    }
    pnotify_info(){
        this.pnotifyService.pnotifyInfo('title', 'content text', 1000);
    }
    pnotify_error(){
        this.pnotifyService.pnotifyError('title', 'content text');
    }
    pnotify_warn(){
        this.pnotifyService.pnotifyWarn('title', 'content text');
    }
    pnotify_dark(){
        this.pnotifyService.pnotifyDark('title', 'content text');
    }
}

PnotifyServiceCtrl.$inject = ['$log', 'pnotifyService'];

export {PnotifyServiceCtrl};