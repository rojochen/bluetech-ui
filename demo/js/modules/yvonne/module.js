import {yvvone} from './config/RouteConfig';
import {ActivityGroup} from './../yvonne/components/ActivityGroup.js';



export const bluetechUIYvonne = angular.module('bluetechUI.yvonne', ['bluetechUI', 'ui.router'])
    .config(($stateProvider, $urlServiceProvider) => new yvvone($stateProvider, $urlServiceProvider))
    .component('activityGroup', ActivityGroup)
    // .controller('demoCtrl', () => new DemoCtrl())
    .name;