(function() {
	'use strict';

	require.config({
		baseUrl: '',
		paths: {
			bluetechUI: 'js/bluetechUI.min',
			btModule: 'js/module/demoModule',
			demoController: 'js/controller/demoController',
			paginationService: 'js/service/btpaginationService',
			btController: 'js/controller/demoBt',
			header: 'js/component/header',
			footer: 'js/component/footer'
		}
	});	
	require(['bluetechUI', 'btModule', 'demoController', 'paginationService', 'btController', 'header', 'footer'], function(bluetechUI, btModule, demoController, paginationService, btController, header, footer) {
		angular.bootstrap(document, ['btModule']);
	});
})();