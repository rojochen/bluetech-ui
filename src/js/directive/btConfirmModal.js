define([], function () {
    'use strict';
    var app = angular.module("bluetechUI");

    app.directive('btConfirmModal', ['$timeout', function($timeout){
        function link(scope, element, attrs){
            // var totalCount = scope.ngModel.totalCount;
            // console.log(totalCount);

        }

        return {
            restrict: 'E',
            scope: {
                // ngModel: '='
            },
            link: link,
            template: `dddwww`
        };
    }])

    return app;
});