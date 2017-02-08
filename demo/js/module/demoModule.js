define(['bluetech'], function(bluetech) {
    'use strict';
    var app = angular.module('btModule',['bluetech']);
    // 導頁路徑
    app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
		$routeProvider.eagerInstantiationEnabled(false);

		$locationProvider.hashPrefix('');
		$routeProvider
				// .when('/', {
				// 	templateUrl: "../demo/view/index.html"
				// })
				.when('/', {
					templateUrl: "../demo/view/datepicker.html"
				})
				.when('/datepicker', {
					templateUrl: '../demo/view/datepicker.html'
				})
				.when('/datepicker_range', {
					templateUrl: '../demo/view/datepicker_range.html'
				})
				.when('/pagination', {
					templateUrl: '../demo/view/pagination.html'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);

    return app;
});