class FooterCompoentCtrl{
    constructor(){
        console.log(this);
      
    }
}
 export const BtFooter = {
    //  template: `<div class="pull-right">
    //                            {{vm.name}} 
    //                         </div>
    //                         <div class="clearfix"></div>`,
    templateUrl:"./js/modules/demo/views/btFooter.html",
    controller:FooterCompoentCtrl,
    controllerAs:'vm',
    bindings:{ name:'@'}
 }
// export class BtFooter {
//     constructor() {
//         this.template  = `<div class="pull-right">
//                                 HELLOW WORLD
//                             </div>
//                             <div class="clearfix"></div>`;
//         this.controller =  FooterCompoentCtrl;
//         this.controllerAs = 'vm';
//         this.bindings = {
//             name: '@'
//         }
//     }
 
// }
// BtFooter.$inject = [];