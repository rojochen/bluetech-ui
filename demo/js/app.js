import bluetechUI from './../../dist/js/bluetechUI.min.js';
import bluetechUIDemo from './modules/demo/main.js';

angular.module('app',['bluetechUI','bluetechUI.demo']);
angular.bootstrap(document, ['app']);