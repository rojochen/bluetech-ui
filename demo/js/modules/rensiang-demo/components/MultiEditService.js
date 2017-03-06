import template from "./../views/multi-edit-service.html";
import {
    MultiEditServiceCtrl
} from "./../controller/MultiEditServiceCtrl.js";

export const MultiEditService = {
    template,
    controller: MultiEditServiceCtrl,
    controllerAs: 'vm'
}