
export class RouteConfig {
 	constructor($routeProvider,$locationProvider){
		$routeProvider.eagerInstantiationEnabled(false);
		$locationProvider.hashPrefix('');
		$routeProvider
				// .when('/', {
				// 	templateUrl: "../demo/view/index.html"
				// })
				.when('/', {
					templateUrl: "./../views/datepicker.html"
				})
				.when('/datepicker', {
					templateUrl: './../views/datepicker.html'
				})
				.when('/datepicker_range', {
					templateUrl: './../views/datepicker_range.html'
				})
				.when('/pagination', {
					templateUrl: './../views/pagination.html'
				})
				.when('/pnotifyService', {
					templateUrl: './../views/pnotifyService.html'
				})
				.when('/confirmModal', {
					templateUrl: './../views/confirmModal.html'
				})
				.otherwise({
					redirectTo: '/'
				});		
	}
 }


RouteConfig.$inject = ['$routeProvider','$locationProvider'];