import bluetechUI from './../../dist/js/bluetechUI.min.js';
// import angular from 'angular/angular.min.js';
import bluetechUICommon from './modules/common/module.js';
import bluetechStyle from './../../dist/css/bluetechStyle.min.css';
class aaa{
     static convert() {
       console.log('aaa');
    }
}
aaa.convert();

angular.module('app',['bluetechUI', 'bluetechUI.common']);
angular.bootstrap(document, ['app']);