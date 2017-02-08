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
			demoController: 'demo/js/controller/demoController',  //要在bluetechUI前面才可...？？
			paginationService: 'demo/js/service/btpaginationService',
			bluetechUI: 'build/js/bluetech-ui',  //bt-datepicker-range沒有出現
			// btPagination: 'demo/js/directives/btPagination',
			// btDatepicker: 'demo/js/directives/btDatepicker',
			// btDatepickerRange: 'demo/js/directives/btDatepickerRange',
			
		}
	});	
	require(['bluetech', 'btModule', 'btController', 'header', 'footer', 'demoController', 'paginationService', 'bluetechUI'], function(bluetech, btModule, btController, header, footer, demoController, paginationService, bluetechUI) {
		angular.bootstrap(document, ['btModule']);
	});
	// require(['bluetech', 'btModule', 'btController', 'header', 'footer', 'demoController', 'paginationService', 'btPagination', 'btDatepicker', 'btDatepickerRange'], function(bluetech, btModule, btController, header, footer, demoController, paginationService, btPagination, btDatepicker, btDatepickerRange) {
	// 	angular.bootstrap(document, ['btModule']);
	// });
})();