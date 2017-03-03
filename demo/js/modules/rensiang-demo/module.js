import {RouteConfig2} from './config/RouteConfig';
import {MultiEditService} from './components/MultiEditService.js';
import {MultiEditServiceCtrl} from './controller/MultiEditServiceCtrl.js';

export const appModule = angular.module('bluetechUI.rensiang-demo', ['bluetechUI', 'ui.router'])
    .config(($stateProvider, $urlServiceProvider) => new RouteConfig2($stateProvider, $urlServiceProvider))
    .component('multiEditService', MultiEditService)
    .controller('multiEditServiceCtrl', () => new MultiEditServiceCtrl())
    .name;