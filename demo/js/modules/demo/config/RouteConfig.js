
export class RouteConfig {
 	constructor($routeProvider,$locationProvider){
		$routeProvider.eagerInstantiationEnabled(false);
		$locationProvider.hashPrefix('');
		$routeProvider
				// .when('/', {
				// 	templateUrl: "../demo/view/index.html"
				// })
				.when('/', {
					templateUrl: "view/datepicker.html"
				})
				.when('/datepicker', {
					templateUrl: 'view/datepicker.html'
				})
				.when('/datepicker_range', {
					templateUrl: 'view/datepicker_range.html'
				})
				.when('/pagination', {
					templateUrl: 'view/pagination.html'
				})
				.when('/pnotifyService', {
					templateUrl: 'view/pnotifyService.html'
				})
				.when('/confirmModal', {
					templateUrl: 'view/confirmModal.html'
				})
				.otherwise({
					redirectTo: '/'
				});		
	}
 }


RouteConfig.$inject = ['$routeProvider','$locationProvider'];