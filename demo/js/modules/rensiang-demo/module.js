import {
    RouteConfig
} from './config/RouteConfig';
import {
    MultiEditService
} from './components/MultiEditService.js';

// export const appModule = angular.module('bluetechUI.rensiang-demo', [])
export const appModule = angular.module('bluetechUI.rensiang-demo', ['bluetechUI', 'ui.router'])
    .config(($stateProvider, $urlServiceProvider) => new RouteConfig2($stateProvider, $urlServiceProvider))
    .component('multiEditService', MultiEditService)
    .name;