define(['bluetechUI', 'ngRoute'], function(bluetechUI, ngRoute) {
    'use strict';
	
    var app = angular.module('btModule',['bluetechUI', 'ngRoute']);
    // 導頁路徑
    app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
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
				.otherwise({
					redirectTo: '/'
				});
		}]);

    return app;
});