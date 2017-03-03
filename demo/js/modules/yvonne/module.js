import {RouteConfig} from './config/RouteConfig';
import {ActivityGroup} from './../yvonne/components/ActivityGroup.js';




export const bluetechUIYvonne = angular.module('bluetechUI.yvonne', ['bluetechUI', 'ui.router'])
    .config(($stateProvider, $urlServiceProvider) => new RouteConfig($stateProvider, $urlServiceProvider))
    .component('activityGroup', ActivityGroup)
    .name;