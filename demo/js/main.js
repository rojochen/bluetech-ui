(function() {
	'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl: '',
		paths: {
			bluetech: 'node_modules/bluetech/dist/js/bluetech',
			btModule: 'demo/js/module/demoModule',
			btController: 'demo/js/controller/demoBt',
			header: 'demo/js/component/header',
			footer: 'demo/js/component/footer',
			btPagination: 'demo/js/directives/btPagination',
			paginationService: 'demo/js/service/btpaginationService',
			btDatepicker: 'demo/js/directives/btDatepicker',
			btDatepickerRange: 'demo/js/directives/btDatepickerRange',
			demoController: 'demo/js/controller/demoController'
		}
	});	
	require(['bluetech', 'btModule', 'btController', 'header', 'footer', 'btPagination', 'paginationService', 'btDatepicker', 'btDatepickerRange', 'demoController'], function(bluetech, btModule, btController, header, footer, btPagination, paginationService, btDatepicker, btDatepickerRange, demoController) {
		angular.bootstrap(document, ['btModule']);
	});
})();