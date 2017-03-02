import {PortletCtrl} from "./../controllers/PortletCtrl.js";

class DatepickerRangeCtrl extends PortletCtrl{
    constructor($log){
        super();
        this.$log = $log;
    }

    $onInit(){
        this.$log.debug('do component init');

        let d1 = new Date('2016/02/23 9:00:00 AM');
        let d2 = new Date('2016/03/20 6:30:00 PM');
        this.daterange1 = [d1,d2];
    }


    console(){
        this.$log.debug(this.daterange1);
    }
    remove(){
        this.daterange1 = [];
    }
    minMax(){
        this.obj_range = {
            'minDate': '2016-01-15',
            'maxDate': '2017-11-11'
        }
    }
    disabled(){
        this.disable = !this.disable;
    }
    eventSelect_range(e){
        this.$log.debug(e);
    }
    eventCancel_range(e){
        this.$log.debug(e);
    }
}

DatepickerRangeCtrl.$inject = ['$log'];

export {DatepickerRangeCtrl};