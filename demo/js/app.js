import {ng} from 'angular';
import bluetechUI from './../../dist/js/bluetechUI.min.js';
// import angular from 'angular/angular.min.js';
import bluetechUICommon from './modules/common/module.js';
import bluetechStyle from './../../dist/css/bluetechStyle.min.css';

angular.module('app',['bluetechUI', 'bluetechUI.common']);
angular.bootstrap(document, ['app']);