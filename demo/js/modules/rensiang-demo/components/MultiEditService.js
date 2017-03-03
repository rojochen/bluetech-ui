import template from "./../views/multiEditService.html";
import {
    MultiEditServiceCtrl
} from "./../controller/MultiEditServiceCtrl.js";
// class multiEditServiceCtrl {
//     constructor() {
//         console.log("asdf");
//     }
// }
export const MultiEditService = {
    template,
    controller: MultiEditServiceCtrl,
    controllerAs: 'vm'
}