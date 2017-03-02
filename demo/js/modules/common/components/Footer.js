class FooterCompoentCtrl {

    constructor($log) {
        'ngInject';
        // console.log($log);
        // $log.debug(this);


    }
    $onInit($log) {
        // console.log(this.name);

    }
    $onChanges() {
        let vm = this;
        // this.name = "123";
    }
    click() {
        alert("hello");
    }
}
// import templateUrl from "./js/modules/demo/views/btFooter.html";
import template from "./../views/btFooter.html";

export const BtFooter = {
    template,
    controller: FooterCompoentCtrl,
    controllerAs: 'vm',
    bindings: {
        name: '@'
    }
}

// FooterCompoentCtrl.$inject = ['abc']