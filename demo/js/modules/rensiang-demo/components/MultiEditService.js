import template from "./../views/multiEditService.html";
import multiEditServiceCtrl from "./../controller/MultiEditServiceCtrl.js";
// class multiEditServiceCtrl {
//     constructor() {
//         console.log("asdf");
//     }
// }
export const MultiEditService = {
    template,
    controller: multiEditServiceCtrl,
    controllerAs: 'vm'
}