import {
    RouteConfig
} from './config/RouteConfig';
import {
    MultiEditService
} from './components/MultiEditService.js';

<<<<<<< HEAD
// export const appModule = angular.module('bluetechUI.rensiang-demo', ['bluetechUI', 'ui.router'])
export const appModule = angular.module('bluetechUI.rensiang-demo', [])
    .config(($stateProvider, $urlServiceProvider) => new RouteConfig($stateProvider, $urlServiceProvider))
=======

// export const appModule = angular.module('bluetechUI.rensiang-demo', [])
export const appModule = angular.module('bluetechUI.rensiang-demo', ['bluetechUI', 'ui.router'])
    .config(($stateProvider, $urlServiceProvider) => new RouteConfig2($stateProvider, $urlServiceProvider))
>>>>>>> f76203752eedd31c28d1253ae49acf230cb89083
    .component('multiEditService', MultiEditService)
    .name;