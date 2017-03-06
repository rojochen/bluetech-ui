import bluetechUI from './../../../../dist/js/bluetechUI.min.js'
import {
    RouteConfig
} from './config/RouteConfig';
import {
    ArpbSet
} from './components/ArpbSet.js';



export const appModule = angular.module('bluetechUI.yun', ['bluetechUI', 'ui.router'])
    .config(($stateProvider, $urlServiceProvider) => new RouteConfig($stateProvider, $urlServiceProvider))
    .component('arpbSet', ArpbSet)
    .name;