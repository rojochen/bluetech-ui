export class yvvone {
	constructor($stateProvider, $urlServiceProvider) {

		// ui-sref 吃state
		// url是打url的樣子

		$stateProvider.
		state('bluetechui-yvvone/activityGroup', {
			url: '/bluetechui-yvvone',
			component: 'activityGroup'
		});
		// 共用那邊才可以設定
		// $urlServiceProvider.rules.otherwise({
		// 	state: 'ActivityGroup'
		// });
	}
}


yvvone.$inject = ['$stateProvider', '$urlServiceProvider'];