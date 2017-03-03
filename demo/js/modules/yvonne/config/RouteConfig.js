export class RouteConfig {
	constructor($stateProvider, $urlServiceProvider) {

		// ui-sref 吃state
		// url是打url的樣子

		$stateProvider.
		state('bluetechUI/yvonne/activity-group', {
			url: '/bluetechUI/yvonne/activity-group',
			component: 'activityGroup'
		});
		// 共用那邊才可以設定
		// $urlServiceProvider.rules.otherwise({
		// 	state: 'ActivityGroup'
		// });
	}
}


RouteConfig.$inject = ['$stateProvider', '$urlServiceProvider'];