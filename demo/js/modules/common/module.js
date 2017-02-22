import {
    bluetechUI
} from './../../../../dist/js/bluetechUI.min.js';
import {
    ngRoute
} from 'angular-route/angular-route.min';
import {
    RouteConfig
} from './config/RouteConfig';
import {
    SliderMenu
} from './controllers/SliderMenu.js';
import {
    DemoCtrl
} from './controllers/DemoCtrl.js';
import {
    BtFooter
} from './components/Footer.js';

import {
    Header
} from './components/Header.js';

import {ConfirmModal} from './components/ConfirmModal.js';
import {Datepicker} from './components/Datepicker.js';
import {DatepickerRange} from './components/DatepickerRange.js';
import {Pagination} from './components/Pagination.js';
import {PnotifyService} from './components/PnotifyService.js';


export const appModule = angular.module('bluetechUI.common', ['bluetechUI', 'ngRoute'])
    .config(($routeProvider, $locationProvider) => new RouteConfig($routeProvider, $locationProvider))
    .component('btFooter', BtFooter)
    .component('btHeader', Header)
    .component('confirmModal', ConfirmModal)
    .component('datepicker', Datepicker)
    .component('datepickerRange', DatepickerRange)
    .component('pagination', Pagination)
    .component('pnotifyService', PnotifyService)
    .controller('sliderMenu', ($timeout) => new SliderMenu($timeout))
    .controller('demoCtrl', () => new DemoCtrl())
    .name;