import {
    RouteConfig
} from './config/RouteConfig.js';
import {
    ActivityGroup
} from './components/ActivityGroup.js';


export const bluetechUIYvonne = angular.module('bluetechUI.yvonne', ['bluetechUI', 'ui.router'])
    .config(($stateProvider, $urlServiceProvider) => new RouteConfig($stateProvider, $urlServiceProvider))
    .component('activityGroup', ActivityGroup)
    .name;