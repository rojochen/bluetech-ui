import bluetechUI from './../../dist/js/bluetechUI.min.js';
import bluetechUICommon from './modules/common/module.js';
import bluetechUIYvonne from './modules/yvonne/module.js';
import bluetechStyle from './../../dist/css/bluetechStyle.min.css';
import bluetechUIRenSiang from './modules/rensiang-demo/module.js';
import bluetechUIYun from './modules/yun/module.js';
import bluetechUIDemo from './modules/npv-demo/module.js';




angular.module('app', ['bluetechUI', 'bluetechUI.common', 'bluetechUI.yvonne', 'bluetechUI.rensiang-demo', 'bluetechUI.yun', 'bluetechUI.demo']);
angular.bootstrap(document, ['app']);