import bluetechUI from './../../../../dist/js/bluetechUI.min.js'
import {RouteConfig} from './config/RouteConfig.js';
import {Demo} from './components/Demo.js';



export const bluetechUIDemo = angular.module('bluetechUI.demo', ['bluetechUI', 'ui.router'])
    .config(($stateProvider, $urlServiceProvider, $logProvider) => new RouteConfig($stateProvider, $urlServiceProvider, $logProvider))
    .component('demo', Demo)
    .name;