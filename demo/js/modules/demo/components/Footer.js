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
        // this.name = "123";
    }
    click() {
        alert("hello");
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