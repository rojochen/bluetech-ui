(function() {
	'use strict';

	require.config({
		baseUrl: '',
		paths: {
			bluetechUI: 'js/bluetechUI.min',
			ngRoute: 'angular-route/angular-route.min',
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
	require(['btModule', 'demoController', 'btController', 'header', 'footer'], function(btModule, demoController, btController, header, footer) {
		angular.bootstrap(document, ['btModule']);
	});
})();