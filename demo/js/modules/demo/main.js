import ngRoute from 'angular-route/angular-route.min';
import SliderMenu from './controllers/SliderMenu.js';
import bluetechUI from './../../../../dist/js/bluetechUI.min.js';

export default  appModule = angular.module('bluetechUI.demo',['bluetechUI','ngRoute'])
     .controller('sliderMenu',($timeout)=> new SliderMenu($timeout));