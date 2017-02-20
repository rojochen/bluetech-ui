// define([], function () {
//     'use strict';
//     var app = angular.module("bluetechUI");



//     return app;
// });
//let app = angular.module("bluetechUI");

(() => {
    angular.module("bluetechUI").directive('btDatepicker', ['$timeout', $timeout => {
        function link(scope, element, attrs) {
            const datepickerId = attrs['datepickerId'];
            let format = attrs['format'];
            const drops = attrs['drops'] ? attrs['drops'] : 'down';
            const minDate = attrs['minDate'];
            const maxDate = attrs['maxDate'];
            const showDropdowns = attrs['showDropdowns'] ? attrs['showDropdowns'] == 'true' : false;
            const timePicker = attrs['timePicker'] ? attrs['timePicker'] == 'true' : false;
            const timePickerIncrement = attrs['timePickerIncrement'] ? Number.parseInt(attrs['timePickerIncrement']) : null;
            const timePicker24Hour = attrs['timePicker24Hour'] ? attrs['timePicker24Hour'] == 'true' : false;
            const timePickerSeconds = attrs['timePickerSeconds'] ? attrs['timePickerSeconds'] == 'true' : false;

            const optionSet = {
                locale: {
                    applyLabel: '送出',
                    cancelLabel: '清除',
                    daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                },
                showDropdowns,
                timePicker,
                timePickerIncrement,
                timePicker24Hour,
                timePickerSeconds,
                drops,
                singleDatePicker: true
            };

            const modelZIndex = $(element).parents('.modal').css('z-index');
            // console.log(datepickerId);
            // console.log(format);
            // console.log(drops);
            // console.log(minDate);
            // console.log(maxDate);
            // console.log(showDropdowns);
            // console.log(timePicker);
            // console.log(timePickerIncrement);
            // console.log(timePicker24Hour);
            // console.log(timePickerSeconds);

            const unbindWatcher = scope.$watch('ngModel', (newValue, oldValue) => {
                // console.log('$watch' + newValue);
                if (!newValue) {
                    scope.value = '';
                    $(`#${datepickerId}`).val('');
                    scope.onDateCancel({
                        e: 'cancel'
                    });
                }
            }, true);

            const unBindonDataWatcher = scope.$watch('bindonData', (newValue, oldValue) => {
                // console.log(newValue);
                if (newValue && newValue.minDate) {
                    optionSet.minDate = newValue.minDate;
                    attrs.$set('minDate', newValue.minDate);
                }
                if (newValue && newValue.maxDate) {
                    optionSet.maxDate = newValue.maxDate;
                    attrs.$set('maxDate', newValue.maxDate);
                }
                if (scope.ngModel) {
                    optionSet.startDate = scope.ngModel;
                }
                init();
            }, true);

            const unBindonDisable = scope.$watch('bindonDisable', (newValue, oldValue) => {
                // console.log('$watch' + newValue);
                const disableStatus = newValue ? newValue : false;
                element.find('input').attr('disabled', disableStatus);
            });

            element.on('$destroy', () => {
                // console.log("on destroy");
                unbindWatcher();
                unBindonDataWatcher();
                unBindonDisable();
                scope.$destroy();
            });

            var init = () => {
                $timeout(() => {
                    $(`#${datepickerId}`).daterangepicker(optionSet, (start, end, label) => {
                        scope.$apply(() => {
                            scope.ngModel = start._d;
                        });
                        scope.onDateSelect({
                            e: start._d
                        });
                    });

                    $(`#${datepickerId}`).on('cancel.daterangepicker', function (ev, picker) {
                        $(this).val('');
                        scope.$apply(() => {
                            scope.ngModel = '';
                        });
                    });

                    $(`#${datepickerId}`).on('showCalendar.daterangepicker', function () {
                        // console.log('open-1');
                        let zIndex = 2;

                        const layuiLayerZIndex = $(this).parents('.layui-layer').css('z-index');
                        if (modelZIndex) zIndex = modelZIndex;
                        if (layuiLayerZIndex) zIndex = layuiLayerZIndex;
                        // console.log(zIndex);
                        $(this).css('z-index', zIndex);
                        $('.daterangepicker').css('z-index', zIndex);
                    });

                    $(`#${datepickerId}`).on('show.daterangepicker', () => {
                        // console.log('open-2');
                    });

                    $(`#${datepickerId}`).on('hideCalendar.daterangepicker', () => {
                        console.log('close-1');
                    });

                    $(`#${datepickerId}`).on('hide.daterangepicker', function () {
                        // console.log('close-2');
                        if (!scope.ngModel) {
                            $(this).val('');
                            scope.value = '';
                        }
                    });

                    if (!scope.ngModel) {
                        scope.value = '';
                    }
                }, 100);
            }


            if (datepickerId) {
                scope.isShowDatepicker = true;
                scope.id = datepickerId;

                if (scope.ngModel) optionSet.startDate = scope.ngModel;

                if (!format && timePicker === false) {
                    format = "YYYY/MM/DD";
                }
                if (!format && timePicker === true) {
                    if (timePicker24Hour === true && timePickerSeconds === true) {
                        format = "YYYY/MM/DD HH:mm:ss";
                    }
                    if (timePicker24Hour === true && timePickerSeconds === false) {
                        format = "YYYY/MM/DD HH:mm";
                    }
                    if (timePicker24Hour === false && timePickerSeconds === true) {
                        format = "YYYY/MM/DD h:mm:ss A";
                    }
                    if (timePicker24Hour === false && timePickerSeconds === false) {
                        format = "YYYY/MM/DD h:mm A";
                    }
                }
                optionSet.locale.format = format;

                if (minDate && minDate.replace(/\D/g, "").length >= 7) optionSet.minDate = minDate;
                if (maxDate && maxDate.replace(/\D/g, "").length >= 7) optionSet.maxDate = maxDate;
                // console.log(optionSet);

                if (modelZIndex) {
                    const id = $(element).parents('.modal').attr('id');
                    optionSet.parentEl = `#${id}`;
                }

                init();
            } else {
                scope.isShowDatepicker = false;
            }
        }

        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                bindonData: '=',
                bindonDisable: '=',
                onDateSelect: '&',
                onDateCancel: '&'
            },
            link,
            template: `<div class="input-prepend input-group" ng-show="isShowDatepicker">
                            <span class="add-on input-group-addon">
                                <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
                            </span>
                            <input type="text" id="{{id}}" class="form-control" ng-model="value">
                        </div>
                        <span ng-show="!isShowDatepicker">請設定bt-datepicker-range的datepicker-id。</span>`
        };
    }])
})();