


import {RouteConfig} from './config/RouteConfig';
import {SliderMenu} from './components/SliderMenu.js';
import {BtFooter} from './components/Footer.js';
import {Header} from './components/Header.js';
import {ConfirmModal} from './components/ConfirmModal.js';
import {Datepicker} from './components/Datepicker.js';
import {DatepickerRange} from './components/DatepickerRange.js';
import {Pagination} from './components/Pagination.js';
import {PnotifyService} from './components/PnotifyService.js';



export const appModule = angular.module('bluetechUI.common', [])
    .config(($stateProvider, $urlServiceProvider, $logProvider) => new RouteConfig($stateProvider, $urlServiceProvider, $logProvider))
    .component('btFooter', BtFooter)
    .component('btHeader', Header)
    .component('sliderMenu', SliderMenu)
    .component('confirmModal', ConfirmModal)
    .component('datepicker', Datepicker)
    .component('datepickerRange', DatepickerRange)
    .component('pagination', Pagination)
    .component('pnotifyService', PnotifyService)
    .controller('demoCtrl', () => new DemoCtrl())
    .name;