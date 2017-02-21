(() => {
    app.directive('btDatepickerRange', ['$timeout', ($timeout) => {
        function link(scope, element, attrs){
            let datepickerId = attrs['datepickerId'],
                format = attrs['format'],
                drops = attrs['drops']?attrs['drops']:'down',
                opens = attrs['opens']?attrs['opens']:'right',
                minDate = attrs['minDate'],
                maxDate = attrs['maxDate'],
                showDropdowns = attrs['showDropdowns']?attrs['showDropdowns']=='true':false,
                timePicker = attrs['timePicker']?attrs['timePicker'] == 'true':false,
                timePickerIncrement = attrs['timePickerIncrement']?Number.parseInt(attrs['timePickerIncrement']):null,
                timePicker24Hour = attrs['timePicker24Hour']? attrs['timePicker24Hour'] == 'true':false,
                timePickerSeconds = attrs['timePickerSeconds']? attrs['timePickerSeconds'] == 'true':false,
                optionSet = {
                    locale: {
                        applyLabel: '送出',
                        cancelLabel: '清除',
                        daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                    },
                    showDropdowns: showDropdowns,
                    timePicker: timePicker,
                    timePickerIncrement: timePickerIncrement,
                    timePicker24Hour: timePicker24Hour,
                    timePickerSeconds: timePickerSeconds,
                    drops: drops,
                    opens: opens
                },
                modelZIndex = $(element).parents('.modal').css('z-index');
            // console.log(datepickerId);
            // console.log(format);
            // console.log(drops);
            // console.log(opens);
            // console.log(minDate);
            // console.log(maxDate);
            // console.log(showDropdowns);
            // console.log(timePicker);
            // console.log(timePickerIncrement);
            // console.log(timePicker24Hour);
            // console.log(timePickerSeconds);

            let unbindWatcher = scope.$watch('ngModel', (newValue, oldValue) => {
                // console.log('$watch' + newValue);
                if(newValue && newValue.length === 0){
                    scope.value = [];
                    $('#'+ datepickerId).val('');
                    scope.onDateCancel({e:'cancel'});
                }
            },true);

            let unBindonDataWatcher = scope.$watch('bindonData', (newValue, oldValue) => {
                // console.log(newValue);
                if(newValue && newValue.minDate){
                    optionSet.minDate = newValue.minDate;
                    attrs.$set('minDate',newValue.minDate);
                }
                if(newValue && newValue.maxDate){
                    optionSet.maxDate = newValue.maxDate;
                    attrs.$set('maxDate',newValue.maxDate);
                }
                if(scope.ngModel){
                    optionSet.startDate = scope.ngModel[0];
                    optionSet.endDate = scope.ngModel[1];
                }
                init();
            },true);

            let unBindonDisable = scope.$watch('bindonDisable', (newValue, oldValue) => {
                // console.log('$watch' + newValue);
                let disableStatus = newValue?newValue:false;
                element.find('input').attr('disabled', disableStatus);
            })

            element.on('$destroy',  () => {
                // console.log("on destroy");
                unbindWatcher();
                unBindonDataWatcher();
                unBindonDisable();
                scope.$destroy();
            });

            let init = () => {
                $timeout(() => {
                    $('#'+ datepickerId).daterangepicker(optionSet,(start, end, label) => {
                        scope.ngModel = [];
                        scope.$apply(() => {
                            scope.ngModel.push(start._d);
                            scope.ngModel.push(end._d);
                        });
                        scope.onDateSelect({e:[start._d, end._d]});
                    });

                    $('#'+ datepickerId).on('cancel.daterangepicker', (ev, picker) => {
                        $(this).val('');
                        scope.$apply(() => {
                            scope.ngModel.length = 0;
                        });
                    });

                    $('#'+ datepickerId).on('showCalendar.daterangepicker', () => {
                        // console.log('open-1');
                        let zIndex = 2,
                            layuiLayerZIndex = $(this).parents('.layui-layer').css('z-index');
                        if(modelZIndex)  zIndex = modelZIndex;
                        if(layuiLayerZIndex) zIndex = layuiLayerZIndex;
                        // console.log(zIndex);
                        $(this).css('z-index', zIndex);
                        $('.daterangepicker').css('z-index', zIndex);
                    });

                    $('#'+ datepickerId).on('show.daterangepicker', () => {
                        // console.log('open-2');
                    });

                    $('#'+ datepickerId).on('hideCalendar.daterangepicker', () => {
                        console.log('close-1');
                    });

                    $('#'+ datepickerId).on('hide.daterangepicker', () => {
                        // console.log('close-2');
                        if(!scope.ngModel || scope.ngModel.length === 0){
                            $(this).val('');
                            scope.value = [];
                        }
                    });

                    if(!scope.ngModel || scope.ngModel.length === 0){
                        scope.value = [];
                    }
                },100);
            }


            if(datepickerId){
                scope.isShowDatepicker = true;
                scope.id = datepickerId;

                if(scope.ngModel && scope.ngModel.length !== 0){
                    if(scope.ngModel[0]) optionSet.startDate = scope.ngModel[0];
                    if(scope.ngModel[1]) optionSet.endDate = scope.ngModel[1];
                }

                if(!format && timePicker === false){
                    format = "YYYY/MM/DD";
                }
                if(!format && timePicker === true){
                    if(timePicker24Hour === true && timePickerSeconds === true){
                        format = "YYYY/MM/DD HH:mm:ss";
                    }
                    if(timePicker24Hour === true && timePickerSeconds === false){
                        format = "YYYY/MM/DD HH:mm";
                    }
                    if(timePicker24Hour === false && timePickerSeconds === true){
                        format = "YYYY/MM/DD h:mm:ss A";
                    }
                    if(timePicker24Hour === false && timePickerSeconds === false){
                        format = "YYYY/MM/DD h:mm A";
                    }
                }
                optionSet.locale.format = format;
                // console.log(optionSet);

                if(minDate && minDate.replace(/\D/g, "").length >= 7) optionSet.minDate = minDate;
                if(maxDate && maxDate.replace(/\D/g, "").length >= 7) optionSet.maxDate = maxDate;

                if(modelZIndex){
                    let id = $(element).parents('.modal').attr('id');
                    optionSet.parentEl = '#' + id;
                }

                init();
            }else{
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
            link: link,
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