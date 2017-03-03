export class yvvone {
	constructor($stateProvider, $urlServiceProvider) {

		$stateProvider.
		state('activityGroup', {
			url: '/activityGroup',
			component: 'activityGroup'
		});
		// 共用那邊才可以設定
		// $urlServiceProvider.rules.otherwise({
		// 	state: 'ActivityGroup'
		// });
	}
}


yvvone.$inject = ['$stateProvider', '$urlServiceProvider'];