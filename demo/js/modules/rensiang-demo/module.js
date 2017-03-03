import {RouteConfig2} from './config/RouteConfig';
import {MultiEditService} from './components/MultiEditService.js';

// export const appModule = angular.module('bluetechUI.rensiang-demo', ['bluetechUI', 'ui.router'])
export const appModule = angular.module('bluetechUI.rensiang-demo', [])
    .config(($stateProvider, $urlServiceProvider) => new RouteConfig2($stateProvider, $urlServiceProvider))
    .component('multiEditService', MultiEditService)
    .name;