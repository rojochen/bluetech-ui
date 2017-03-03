import {
    RouteConfig
} from './config/RouteConfig';
import {
    MultiEditService
} from './components/MultiEditService.js';



export const appModule = angular.module('bluetechUI.rensiang-demo', ['bluetechUI', 'ui.router'])
    .config(($stateProvider, $urlServiceProvider) => new RouteConfig($stateProvider, $urlServiceProvider))
    .component('multiEditService', MultiEditService)
    .name;