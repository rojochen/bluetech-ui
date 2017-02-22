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



export const appModule = angular.module('bluetechUI.common', ['bluetechUI', 'ngRoute'])
    .config(($routeProvider, $locationProvider) => new RouteConfig($routeProvider, $locationProvider))
    .component('btFooter', BtFooter)
    .component('btHeader', Header)
    .controller('sliderMenu', ($timeout) => new SliderMenu($timeout))
    .controller('demoCtrl', ($scope, $log, paginationService, pnotifyService, modalService) => new DemoCtrl($scope, $log, paginationService, pnotifyService, modalService))
    .name;