export class RouteConfig {
	constructor($stateProvider, $urlServiceProvider) {

		$stateProvider.
		state('datepicker', {
			url: '/',
			component: 'datepicker'
		}).
		state('datepicker_range', {
			url: '/datepicker_range',
			component: 'datepickerRange'
		}).
		state('pagination', {
			url: '/pagination',
			component: 'pagination'
		}).
		state('pnotifyService', {
			url: '/pnotifyService',
			component: 'pnotifyService'
		}).
		state('confirmModal', {
			url: '/confirmModal',
			component: 'confirmModal'
		});
		// .
		// state('activityGroup', {
		// 	url: '/activityGroup',
		// 	component: 'activityGroup'
		// });

		$urlServiceProvider.rules.otherwise({
			state: 'datepicker'
		});
	}
}


RouteConfig.$inject = ['$stateProvider', '$urlServiceProvider'];