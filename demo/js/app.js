import bluetechUI from './../../dist/js/bluetechUI.min.js';
// import angular from 'angular/angular.min.js';
import bluetechUICommon from './modules/common/module.js';

angular.module('app',['bluetechUI', 'bluetechUI.common']);
angular.bootstrap(document, ['app']);