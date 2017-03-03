import template from "./../views/confirmModal.html";
import {ConfirmModalCtrl} from "./../controllers/ConfirmModalCtrl.js";

export const ConfirmModal = {
    template,
    controller: ConfirmModalCtrl,
    controllerAs: 'vm'
}