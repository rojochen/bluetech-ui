import {
    bluetechUI
} from './../../../../dist/js/bluetechUI.min.js';
// import angular from 'angular/angular.min.js';
import {
    uiRouter
} from 'angular-ui-router/release/angular-ui-router.min.js';
import {
    RouteConfig
} from './config/RouteConfig';
import {
    SliderMenu
} from './components/SliderMenu.js';
import {
    DemoCtrl
} from './controllers/DemoCtrl.js';
import {
    BtFooter
} from './components/Footer.js';
import {
    Header
} from './components/Header.js';
import {
    ConfirmModal
} from './components/ConfirmModal.js';
import {
    Datepicker
} from './components/Datepicker.js';
import {
    DatepickerRange
} from './components/DatepickerRange.js';
import {
    Pagination
} from './components/Pagination.js';
import {
    PnotifyService
} from './components/PnotifyService.js';
import {
    ActivityGroup
} from './../yvonne/components/ActivityGroup.js';



export const appModule = angular.module('bluetechUI.common', ['bluetechUI', 'ui.router'])
    .config(($stateProvider, $urlServiceProvider) => new RouteConfig($stateProvider, $urlServiceProvider))
    .component('btFooter', BtFooter)
    .component('btHeader', Header)
    .component('sliderMenu', SliderMenu)
    .component('confirmModal', ConfirmModal)
    .component('datepicker', Datepicker)
    .component('datepickerRange', DatepickerRange)
    .component('pagination', Pagination)
    .component('pnotifyService', PnotifyService)
    .component('activityGroup', ActivityGroup)
    .controller('demoCtrl', () => new DemoCtrl())
    .name;