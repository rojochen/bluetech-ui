import {bluetechUI} from './../../../../dist/js/bluetechUI.min.js';
import {ngRoute} from 'angular-route/angular-route.min';
import {SliderMenu} from './controllers/SliderMenu.js';


export const  appModule = angular.module('bluetechUI.demo',['bluetechUI','ngRoute'])
     .controller('sliderMenu',($timeout)=> new SliderMenu($timeout))
     .name;