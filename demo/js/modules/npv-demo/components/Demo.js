import template from './../views/demo.html';
import {DemoCtrl} from './../controllers/DemoCtrl.js';

export const ConfirmModal = {
    template,
    controller: DemoCtrl,
    controllerAs: 'vm'
}