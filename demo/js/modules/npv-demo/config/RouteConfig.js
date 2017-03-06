export class RouteConfig {
	constructor($stateProvider, $urlServiceProvider, $logProvider) {
		$logProvider.debugEnabled(true);


		$stateProvider.
		state('bluetechUI/demo/demo', {
			url: '/bluetechUI/demo/demo',
			component: 'demo'
		});
	}
}


RouteConfig.$inject = ['$stateProvider', '$urlServiceProvider', '$logProvider'];