var app = angular.module("bluetechUI");

(() => {
    app.directive('btConfirmModal', ['$timeout', ($timeout) => {
        function link(scope, element, attrs){
            let id = attrs['modalId'];
            const keyboard = attrs['keyboard']?attrs['keyboard']=='true':true,
                  backdrop = attrs['backdrop']?attrs['backdrop']:' ';
            // console.log(id);
            // console.log(keyboard);
            // console.log(backdrop);


            scope.keyboard = keyboard;
            scope.backdrop = backdrop;
            
            
            scope.confirm = () => {
                scope.onConfirmEvent({e:{status: 'yes'}});
            }


            scope.cancel = () => {
                scope.onConfirmEvent({e:{status: 'no'}});
            }


            $(document).on('show.bs.modal', '.modal', (event) => {
                let zIndex = 1050 + (10 * $('.modal:visible').length);
                $(this).css('z-index', zIndex);
                // console.log(zIndex);
            });


            $(document).on('keydown', (e) => {
                // console.log('ddd-esc');
                if($('.modal').is(':visible') && e.target.nodeName === 'BODY'){
                    let closeModal = $('.modal:visible').attr('id');
                    $('#' + closeModal).modal('hide');
                }
            })


            element.on('$destroy', () => {
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
    }])
})();
(() => {
    app.directive('btDatepicker', ['$timeout', ($timeout) => {
        function link(scope, element, attrs){
            let datepickerId = attrs['datepickerId'],
                format = attrs['format'],
                drops = attrs['drops']?attrs['drops']:'down',
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
                    singleDatePicker: true
                },
                modelZIndex = $(element).parents('.modal').css('z-index');
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

            let unbindWatcher = scope.$watch('ngModel', (newValue, oldValue) => {
                // console.log('$watch' + newValue);
                if(!newValue){
                    scope.value = '';
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
                    optionSet.startDate = scope.ngModel;
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
                        scope.$apply(() => {
                            scope.ngModel = start._d;
                        });
                        scope.onDateSelect({e:start._d});
                    });

                    $('#'+ datepickerId).on('cancel.daterangepicker', (ev, picker) => {
                        $(this).val('');
                        scope.$apply(() => {
                            scope.ngModel = '';
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
                        if(!scope.ngModel){
                            $(this).val('');
                            scope.value = '';
                        }
                    });

                    if(!scope.ngModel){
                        scope.value = '';
                    }
                },100);
            }


            if(datepickerId){
                scope.isShowDatepicker = true;
                scope.id = datepickerId;

                if(scope.ngModel) optionSet.startDate = scope.ngModel;

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

                if(minDate && minDate.replace(/\D/g, "").length >= 7) optionSet.minDate = minDate;
                if(maxDate && maxDate.replace(/\D/g, "").length >= 7) optionSet.maxDate = maxDate;
                // console.log(optionSet);

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
(() => {
    app.directive('btPagination', ['paginationService', (paginationService) => {
        function link(scope, element, attrs){
            let totalCount = scope.ngModel.totalCount;
            const pageSize = Number.isNaN(Number.parseInt(attrs['pageSize']))?10:Number.parseInt(attrs['pageSize']),
                  pageCount = Number.isNaN(Number.parseInt(attrs['pageCount']))?5:Number.parseInt(attrs['pageCount']),
                  currentPage = Number.isNaN(Number.parseInt(attrs['currentPage']))?1:Number.parseInt(attrs['currentPage']),
                  showInfo = (angular.isUndefined(attrs['showInfo'])?'true':attrs['showInfo']) == 'true',
                  infoText = angular.isUndefined(attrs['infoText'])?'顯示第 0 筆至第 0 筆，共有 0 筆':attrs['infoText'],
                  isDisabled = (angular.isUndefined(attrs['isDisabled'])?'false':attrs['isDisabled']) == 'true',
                  id = attrs['id'];
            // console.log(totalCount);
            // console.log(pageSize);
            // console.log(pageCount);
            // console.log(currentPage);
            // console.log(showInfo);
            // console.log(infoText);
            // console.log(isDisabled);
            // console.log(id);
            

            scope.changePage = (x, isInit) => {
                // console.log(isInit);
                // console.log(x);
                scope.showPageArray = [];
                if(scope.pageArray.length <= pageCount){
                    scope.showPageArray = angular.copy(scope.pageArray);
                    // console.log(scope.showPageArray);
                }else {
                    let point = null;
                    if(x === 1){
                        point = x - 1;
                    }
                    if(x !== 1 && x !== scope.pageArray.length){
                        if(pageCount !== 1){
                            point = x -2;
                            if(point + pageCount > scope.pageArray.length){
                                point = point - (point + pageCount - scope.pageArray.length);
                            }
                        }else{
                            point = x -1;
                        }
                    }
                    if(x === scope.pageArray.length){
                        point = x - pageCount;
                    }
                    

                    for(point; scope.showPageArray.length<pageCount; point++){
                        scope.showPageArray.push(scope.pageArray[point]);
                    }
                    // console.log(scope.showPageArray);
                }

                scope.page = x;
                scope.startList = (x-1)*pageSize+1;
                scope.endList = (totalCount < x*pageSize)?totalCount:x*pageSize;
                let infoTextArray = [];
                infoTextArray = infoText.match(/\D+/g);
                scope.infoText = infoTextArray[0] + scope.startList + infoTextArray[1] + scope.endList + infoTextArray[2] + scope.ngModel.totalCount + infoTextArray[3];
                
                scope.info = {
                    id: id,
                    pageSize: pageSize,
                    currentPage: x
                }
                paginationService.setInfo(scope.info);
                
                if(!isInit){
                    scope.onChangePage({e:scope.info});
                }
            }
            
            scope.changeFirst = () => {
                if(scope.page !== 1 && !isDisabled) scope.changePage(1);
            }

            scope.changePre = () => {
                if(scope.page-1 > 0 && !isDisabled){
                    scope.changePage(scope.page-1);
                }
            }

            scope.changeNext = () => {
                if(scope.page+1 <= scope.pageArray.length && !isDisabled){
                    scope.changePage(scope.page+1);
                }
            }

            scope.changeLast = ()=> {
                if(scope.page !== scope.pageArray.length && !isDisabled) scope.changePage(scope.pageArray.length);
            }


            $('#'+id).on('goFirst', () => {
                scope.changePage(1);
            });


            element.on('$destroy', () => {
                // console.log("on destroy");
                scope.$destroy();
            });


            if(!totalCount || totalCount === 0 || !id){
                scope.isShowPagination = false;
                scope.isShowInfo = showInfo;
            }else{
                scope.isShowInfo = showInfo;
                scope.isShowPagination = true;

                if(isDisabled !== true){
                    scope.pageArray = [];
                    let endPage = Math.ceil(totalCount/pageSize);
                    // console.log(endPage);
                    for (let num = 1; num <= endPage;num++){
                        scope.pageArray.push(num);
                    }
                    // console.log(scope.pageArray);

                    scope.changePage(currentPage, 'init');
                }else{
                    scope.page = 1;
                    scope.pageArray = [''];
                }
            }

        }

        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                onChangePage: '&'
            },
            link: link,
            template: `<ul class="pagination" ng-show="isShowPagination">
						<li ng-class="{'disabled': page === 1}"><a href ng-click="changeFirst()">« 第一頁</a></li>
						<li ng-class="{'disabled': page === 1}"><a href ng-click="changePre()">‹上一頁 </a></li>
						<li ng-class="{'active': x === page}" ng-repeat="x in showPageArray track by $index"> <a href ng-bind="x" ng-click="changePage(x)"></a> </li>
						<li ng-class="{'disabled': page === pageArray.length}"><a href ng-click="changeNext()">下一頁 ›</a></li>
						<li ng-class="{'disabled': page === pageArray.length}"><a href ng-click="changeLast()">最後一頁 »</a></li>
					</ul>
                    <p ng-show="isShowPagination && isShowInfo">{{infoText}}</p>
                    <p ng-show="!isShowPagination">沒有資料或未設定id...，請確認格式！</p>`
        };
    }])
})();
(() => {
    paginationService.$inject = ['$log'];

    function paginationService($log) {
        let paginationInfo = null;
        let paginationService = {
            setInfo: (data) => {
                paginationInfo = angular.copy(data);
            },
            getInfo: () => {
                return paginationInfo;
            },
            goFirst: (id) => {
                $('#'+id).triggerHandler('goFirst');
            }
        };
        return paginationService;
    }

    app.factory('paginationService', paginationService);
})();
(() => {
    modalService.$inject = ['$log'];

    function modalService($log) {
        let modalService = {
            openModal: (id) => {
                $('#'+id).modal('show');
            },
            closeModal: (id) => {
                $('#'+id).modal('hide');
            }
        };
        return modalService;
    }

    app.factory('modalService', modalService);
})();
(() => {
    pnotifyService.$inject = ['$log'];

    function pnotifyService($log) {
        let paginationInfo = null;
        let pnotifyService = {
            pnotifySuccess: (title ,content) => {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'success',
                    styling: 'bootstrap3'
                });
            },
            pnotifyInfo: (title ,content) => {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'info',
                    styling: 'bootstrap3'
                });
            },
            pnotifyError: (title ,content) => {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'error',
                    styling: 'bootstrap3'
                });
            },
            pnotifyWarn: (title ,content) => {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'warn',
                    styling: 'bootstrap3'
                });
            },
            pnotifyDark: (title ,content) => {
                new PNotify({
                    title: title,
                    text: content,
                    styling: 'bootstrap3',
                    addclass: 'dark'
                });
            }
        };
        return pnotifyService;
    }

    app.factory('pnotifyService', pnotifyService);
})();