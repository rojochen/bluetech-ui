define(['bluetechUI','btModule'], function (bluetechUI,btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.directive('btConfirmModal', ['$timeout', function($timeout){
        function link(scope, element, attrs){
            var id = attrs['modalId'];
            // console.log(id);


            scope.confirm = function(){
                scope.onConfirmEvent({e:{status: 'yes'}});
            }


            element.on('$destroy', function () {
                // console.log("on destroy");
                scope.$destroy();
            });


            // console.log(scope.ngModel);
            scope.isShow = false;
            if(id && scope.ngModel && scope.ngModel.title && scope.ngModel.content){
                scope.title = scope.ngModel.title;
                scope.content = scope.ngModel.content;
                scope.btn_1 = scope.ngModel.btn_1?scope.ngModel.btn_1:'確定';
                scope.btn_2 = scope.ngModel.btn_2?scope.ngModel.btn_2:'取消';
                scope.id = id;
                scope.isShow = true;
            }else if(!id){
                scope.isShow = false;
                scope.dangerText = '請填寫 modal-id。';
            }else{
                scope.isShow = false;
                scope.dangerText = 'model 格式不齊全，未填寫title或content。';
            }
            
        }

        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                onConfirmEvent: '&'
            },
            link: link,
            template: `<div class="modal fade bs-example-modal-sm" id="{{id}}" tabindex="-1" role="dialog" aria-hidden="true">
                                <div class="modal-dialog modal-sm">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <h4 class="modal-title" ng-bind="title"></h4>
                                        </div>
                                        <div class="modal-body">
                                            <p ng-bind="content"></p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" ng-bind="btn_1" ng-click="confirm()"></button>
                                            <button type="button" class="btn btn-default" data-dismiss="modal" ng-bind="btn_2"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p ng-if="!isShow" ng-bind="dangerText"></p>`
        };
    }])

    return app;
});