(function() {
	'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl: '../',
		paths: {
			bluetech: 'node_modules/bluetech/dist/js/bluetech',
			btModule: 'demo/js/module/demoModule',
		}
	});	
	require(['bluetech'], function(bluetech) {
		angular.bootstrap(document, ['btModule']);
	});
})();