
export class RouteConfig {
 	constructor($routeProvider,$locationProvider){
		$routeProvider.eagerInstantiationEnabled(false);
		$locationProvider.hashPrefix('');
		$routeProvider
				// .when('/', {
				// 	templateUrl: "../demo/view/index.html"
				// })
				.when('/', {
					templateUrl: "js/modules/demo/views/datepicker.html"
				})
				.when('/datepicker', {
					templateUrl: 'js/modules/demo/views/datepicker.html'
				})
				.when('/datepicker_range', {
					templateUrl: 'js/modules/demo/views/datepicker_range.html'
				})
				.when('/pagination', {
					templateUrl: 'js/modules/demo/views/pagination.html'
				})
				.when('/pnotifyService', {
					templateUrl: 'js/modules/demo/views/pnotifyService.html'
				})
				.when('/confirmModal', {
					templateUrl: 'js/modules/demo/views/confirmModal.html'
				})
				.otherwise({
					redirectTo: '/'
				});		
	}
 }


RouteConfig.$inject = ['$routeProvider','$locationProvider'];