import {
    RouteConfig
} from './config/RouteConfig';
import {
    ARPBSet
} from './components/ARPBSet.js';


// export const appModule = angular.module('bluetechUI.rensiang-demo', [])
export const appModule = angular.module('bluetechUI.yun', ['bluetechUI', 'ui.router'])
    .config(($stateProvider, $urlServiceProvider) => new RouteConfig($stateProvider, $urlServiceProvider))
    .component('aRPBSet', ARPBSet)
    .name;