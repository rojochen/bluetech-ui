class FooterCompoentCtrl {
    constructor($log) {
        'ngInject';
        console.log($log);
        $log.debug(this);

    }
    $onInit($log) {
        console.log(this.name);
    }
    $onChanges() {
        let vm = this;
        vm.name = 123;
        // this.name = "123";
    }
}
export const BtFooter = {
    templateUrl: "./js/modules/demo/views/btFooter.html",
    controller: FooterCompoentCtrl,
    controllerAs: 'vm',
    bindings: {
        name: '@'
    }
}

// FooterCompoentCtrl.$inject = ['abc']