class FooterCompoentCtrl {
    constructor() {
        console.log(this);
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