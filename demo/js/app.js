import {ng} from 'angular';
// import * as angular from 'angular';
// import {ng as angular} from 'angular';
// import angular from 'angular';
// require('angular');

import bluetechUI from './../../dist/js/bluetechUI.min.js';
import bluetechUICommon from './modules/common/module.js';
import bluetechStyle from './../../dist/css/bluetechStyle.min.css';

angular.module('app',['bluetechUI', 'bluetechUI.common']);
angular.bootstrap(document, ['app']);

// export default 'app';