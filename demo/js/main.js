(function () {
	'use strict';

	require.config({
		waitSeconds: 90,
		baseUrl: '',
		paths: {
			bluetechUI: '../../dist/js/bluetechUI.min',
			ngRoute: '../../node_modules/angular-route/angular-route.min',
			btModule: 'js/module/demoModule',
			demoController: 'js/controller/demoController',
			btController: 'js/controller/demoBt',
			header: 'js/component/header',
			footer: 'js/component/footer'
		},
		shim: {
			'ngRoute': {
				exports: 'ngRoute',
				deps: ['bluetechUI']
			}
		}

	});
	require(['btModule', 'demoController', 'btController', 'header', 'footer'], function (btModule, demoController, btController, header, footer) {
		angular.bootstrap(document, ['btModule']);
	});
})();