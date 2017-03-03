import bluetechUI from './../../dist/js/bluetechUI.min.js';
import bluetechUICommon from './modules/common/module.js';
import bluetechUIYvonne from './modules/yvonne/module.js'
import bluetechStyle from './../../dist/css/bluetechStyle.min.css';



angular.module('app',['bluetechUI', 'bluetechUI.common','bluetechUI.yvonne']);
angular.bootstrap(document, ['app']);