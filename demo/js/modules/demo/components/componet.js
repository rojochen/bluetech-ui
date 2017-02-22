export class BtFooter {
    constructor() {
        this.templateUrl = '../views/btFooter.html';
        this.controller = this.footerComponentCtrl;
        this.controllerAs = 'vm';
        this.bindings = {
            name: '@'
        }
    }
    footerComponentCtrl() {
        vm = this;
        console.log(vm.name);
    }
}
BtFooter.$inject = [];