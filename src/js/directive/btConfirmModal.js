// define([], function () {
//     'use strict';
//     var app = angular.module("bluetechUI");



//     return app;
// });

//     let app = angular.module("bluetechUI");

// export function btConfirmModal() {

// };




(()=> {
     angular.module("bluetechUI").directive('btConfirmModal', ['$timeout', $timeout => {
        function link(scope, element, attrs) {
            const id = attrs['modalId'],
                keyboard = attrs['keyboard'] ? attrs['keyboard'] == 'true' : true,
                backdrop = attrs['backdrop'] ? attrs['backdrop'] : ' ';
            // console.log(id);
            // console.log(keyboard);
            // console.log(backdrop);


            scope.keyboard = keyboard;
            scope.backdrop = backdrop;


            scope.confirm = () => {
                scope.onConfirmEvent({
                    e: {
                        status: 'yes'
                    }
                });
            }


            scope.cancel = () => {
                scope.onConfirmEvent({
                    e: {
                        status: 'no'
                    }
                });
            }


            $(document).on('show.bs.modal', '.modal', function (event) {
                const zIndex = 1050 + (10 * $('.modal:visible').length);
                $(this).css('z-index', zIndex);
                // console.log(zIndex);
            });


            $(document).on('keydown', e => {
                // console.log('ddd-esc');
                if ($('.modal').is(':visible') && e.target.nodeName === 'BODY') {
                    const closeModal = $('.modal:visible').attr('id');
                    $(`#${closeModal}`).modal('hide');
                }
            })


            element.on('$destroy', () => {
                // console.log("on destroy");
                scope.$destroy();
            });


            // console.log(scope.ngModel);
            scope.isShow = false;
            if (id && scope.ngModel && scope.ngModel.title && scope.ngModel.content) {
                scope.title = scope.ngModel.title;
                scope.content = scope.ngModel.content;
                scope.btn_1 = scope.ngModel.btn_1 ? scope.ngModel.btn_1 : '確定';
                scope.btn_2 = scope.ngModel.btn_2 ? scope.ngModel.btn_2 : '取消';
                scope.id = id;
                scope.isShow = true;
            } else if (!id) {
                scope.isShow = false;
                scope.dangerText = '請填寫 modal-id。';
            } else {
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
            link,
            template: `<div class="modal fade bs-example-modal-sm" id="{{id}}" tabindex="-1" role="dialog" aria-hidden="true" data-keyboard="{{keyboard}}" data-backdrop="{{backdrop}}">
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
                                                <button type="button" class="btn btn-default" ng-bind="btn_2" ng-click="cancel()"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p ng-if="!isShow" ng-bind="dangerText"></p>`
        };
    }]);
})();