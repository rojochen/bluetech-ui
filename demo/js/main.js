(function() {
	'use strict';

	require.config({
		baseUrl: '',
		paths: {
			bluetechUI: 'js/bluetechUI.min',
			ngRoute: 'angular-route/angular-route.min',
			btModule: 'js/module/demoModule',
			demoController: 'js/controller/demoController',
			paginationService: 'js/service/btpaginationService',
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
	require(['btModule', 'demoController', 'paginationService', 'btController', 'header', 'footer'], function(btModule, demoController, paginationService, btController, header, footer) {
		angular.bootstrap(document, ['btModule']);
	});
})();