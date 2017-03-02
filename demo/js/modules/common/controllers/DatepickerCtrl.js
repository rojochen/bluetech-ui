import {PortletCtrl} from "./../controllers/PortletCtrl.js";

class DatepickerCtrl extends PortletCtrl{
    constructor($log){
        super();
        this.$log = $log;
    }

    $onInit(){
        this.$log.debug('do component init');

        this.datesingle = new Date('2016/02/28 9:00:00 PM');
    }

    console_single(){
        this.$log.debug(this.datesingle);
    }

    remove_single(){
        this.datesingle = '';
    }

    minMax_change(){
        this.obj = {
            'minDate': '2016-01-15',
            'maxDate': '2017-11-11'
        }
    }

    disabled_change(){
        this.disableStatus = !this.disableStatus;
    }

    eventSelect(e){
        this.$log.debug(e);
    }

    eventCancel(e){
        this.$log.debug(e);
    }
}

DatepickerCtrl.$inject = ['$log'];

export {DatepickerCtrl};