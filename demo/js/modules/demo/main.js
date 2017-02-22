import {bluetechUI} from './../../../../dist/js/bluetechUI.min.js';
import {ngRoute} from 'angular-route/angular-route.min';
import {RouteConfig} from './config/RouteConfig';
import {SliderMenu} from './controllers/SliderMenu.js';


export const  appModule = angular.module('bluetechUI.demo',['bluetechUI','ngRoute'])
     .config(($routeProvider,$locationProvider)=>new RouteConfig($routeProvider,$locationProvider))
     .controller('sliderMenu',($timeout)=> new SliderMenu($timeout))
     .name;