class DemoCtrl{
    constructor($log){
        this.$log = $log;
    }

    $onInit(){
        this.$log.debug('do component init');
    }

}

DemoCtrl.$inject = ['$log'];

export {DemoCtrl};