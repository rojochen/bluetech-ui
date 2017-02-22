export class DemoCtrl {
    constructor($scope, $log, paginationService, pnotifyService, modalService){
        this.$scope = $scope;
        this.$log = $log;
        this.paginationService = paginationService;
        this.pnotifyService = pnotifyService;
        this.modalService = modalService;
        this.DemoCtrlFun();
    }
    DemoCtrlFun(){
        /*begin Portlet */
        $('.collapse-link').on('click', () => {
            let $BOX_PANEL = $(this).closest('.x_panel'),
                $ICON = $(this).find('i'),
                $BOX_CONTENT = $BOX_PANEL.find('.x_content');
            
            // fix for some div with hardcoded fix class
            if ($BOX_PANEL.attr('style')) {
                $BOX_CONTENT.slideToggle(200, () => {
                    $BOX_PANEL.removeAttr('style');
                });
            } else {
                $BOX_CONTENT.slideToggle(200); 
                $BOX_PANEL.css('height', 'auto');  
            }

            $ICON.toggleClass('fa-chevron-up fa-chevron-down');
        });

        $('.close-link').click( () => {
            let $BOX_PANEL = $(this).closest('.x_panel');

            $BOX_PANEL.remove();
        });
        /* end Portlet*/

        /* begin pagination頁面 */
        this.$scope.tableInfo = {
        "totalCount": 15,
        "result": [{
            "id": "121000000",
            "date": "May 23, 2014 11:47:56 PM",
            "number": "121000210",
            "people": "John Blank L",
            "status": "Paid",
            "total": "$7.45",
            "list": "View"
        }, {
            "id": "121000001",
            "date": "May 23, 2014 11:30:12 PM",
            "number": "121000208",
            "people": "John Blank L",
            "status": "Paid",
            "total": "$741.20",
            "list": "View"
        }, {
            "id": "121000002",
            "date": "May 24, 2014 10:55:33 PM",
            "number": "121000203",
            "people": "Mike Smith",
            "status": "Paid",
            "total": "$432.26",
            "list": "View"
        }, {
            "id": "121000003",
            "date": "May 24, 2014 10:52:44 PM",
            "number": "121000204",
            "people": "Mike Smith",
            "status": "Paid",
            "total": "$333.21",
            "list": "View"
        }, {
            "id": "121000004",
            "date": "May 24, 2014 11:47:56 PM",
            "number": "121000209",
            "people": "John Blank L",
            "status": "Paid",
            "total": "$7.45",
            "list": "View"
        }, {
            "id": "121000005",
            "date": "May 26, 2014 11:30:12 PM",
            "number": "121000207",
            "people": "Mike Smith",
            "status": "Paid",
            "total": "$741.20",
            "list": "View"
        }, {
            "id": "121000006",
            "date": "May 26, 2014 10:55:33 PM",
            "number": "121000202",
            "people": "Mike Smith",
            "status": "Paid",
            "total": "$432.26",
            "list": "View"
        }, {
            "id": "121000007",
            "date": "May 26, 2014 10:52:44 PM",
            "number": "121000200",
            "people": "John Blank L",
            "status": "Paid",
            "total": "$333.21",
            "list": "View"
        }, {
            "id": "121000008",
            "date": "May 27, 2014 11:47:56 PM",
            "number": "121000201",
            "people": "John Blank L",
            "status": "Paid",
            "total": "$7.45",
            "list": "View"
        }, {
            "id": "121000009",
            "date": "May 28, 2014 11:30:12 PM",
            "number": "121000212",
            "people": "John Blank L",
            "status": "Paid",
            "total": "$741.20",
            "list": "View"
        }, {
            "id": "121000010",
            "date": "May 30, 2014 11:30:12 PM",
            "number": "121000215",
            "people": "Mike Smith",
            "status": "Paid",
            "total": "$92",
            "list": "View"
        }, {
            "id": "121000011",
            "date": "December 11, 2014 11:30:12 PM",
            "number": "121000219",
            "people": "Mike Smith",
            "status": "Paid",
            "total": "$27.3",
            "list": "View"
        }, {
            "id": "121000012",
            "date": "December 19, 2014 11:30:12 PM",
            "number": "121000221",
            "people": "Mike Smith",
            "status": "Paid",
            "total": "$102.5",
            "list": "View"
        }, {
            "id": "121000013",
            "date": "December 23, 2014 11:30:12 PM",
            "number": "121000232",
            "people": "Mike Smith",
            "status": "Paid",
            "total": "$230.6",
            "list": "View"
        }, {
            "id": "121000014",
            "date": "December 31, 2014 11:30:12 PM",
            "number": "121000253",
            "people": "John Blank L",
            "status": "Paid",
            "total": "$9999",
            "list": "View"
        }]
        };
        this.$scope.eventChange = (e) => {
        this.$log.debug(e);
        };
        this.$scope.goFirst = () =>{
        this.paginationService.goFirst('ss');
        }
        /* end pagination頁面 */

        /* begin datepicker、datepickerRange頁面 */
        let d1 = new Date('2016/02/23 9:00:00 AM');
        let d2 = new Date('2016/03/20 6:30:00 PM');
        this.$scope.daterange1 = [d1,d2];
        // this.$log.debug(this.$scope.daterange1);
        // this.$scope.daterange1 = [];

        this.$scope.console = () => {
        this.$log.debug(this.$scope.daterange1);
        }
        this.$scope.remove = () => {
        this.$scope.daterange1 = [];
        }
        this.$scope.minMax = () => {
        this.$scope.obj_range = {
            'minDate': '2016-01-15',
            'maxDate': '2017-11-11'
        }
        }
        this.$scope.disabled = () => {
        this.$scope.disable = !this.$scope.disable;
        }
        this.$scope.eventSelect_range = (e) => {
        this.$log.debug(e);
        }
        this.$scope.eventCancel_range = (e) => {
        this.$log.debug(e);
        }

        this.$scope.datesingle = new Date('2016/02/28 9:00:00 PM');
        this.$scope.console_single = () => {
        this.$log.debug(this.$scope.datesingle);
        }
        this.$scope.remove_single = () => {
        this.$scope.datesingle = '';
        }
        this.$scope.minMax_change = () => {
        this.$scope.obj = {
            'minDate': '2016-01-15',
            'maxDate': '2017-11-11'
        }
        }
        this.$scope.disabled_change = () => {
        this.$scope.disableStatus = !this.$scope.disableStatus;
        }
        this.$scope.eventSelect = (e) => {
        this.$log.debug(e);
        }
        this.$scope.eventCancel = (e) => {
        this.$log.debug(e);
        }
        /* end datepicker、datepickerRange頁面 */

        /* begin pnotifyService頁面 */
        this.$scope.pnotify_success = () => {
        this.pnotifyService.pnotifySuccess('title', 'content text');
        }
        this.$scope.pnotify_info = () => {
        this.pnotifyService.pnotifyInfo('title', 'content text', 1000);
        }
        this.$scope.pnotify_error = () => {
        this.pnotifyService.pnotifyError('title', 'content text');
        }
        this.$scope.pnotify_warn = () => {
        this.pnotifyService.pnotifyWarn('title', 'content text');
        }
        this.$scope.pnotify_dark = () => {
        this.pnotifyService.pnotifyDark('title', 'content text');
        }
        /* end pnotifyService頁面 */

        /* begin btConfirmModal頁面 */
        this.$scope.confirmModal = {
        title: 'title-text',
        content: 'content-text'
        }
        this.$scope.openConfirmModal = () => {
        this.modalService.openModal('rr');
        };
        this.$scope.eventConfirm = (e) => {
        this.$log.debug(e);
        if(e.status === 'yes'){
            this.pnotifyService.pnotifySuccess('confirmModal 狀態', '點選確定按鈕');
        }else{
            this.pnotifyService.pnotifyError('confirmModal 狀態', '點選取消按鈕');
        }
        this.modalService.closeModal('rr');
        };
        /* end btConfirmModal頁面 */
    }
}

DemoCtrl.$inject = ['$scope', '$log', 'paginationService', 'pnotifyService', 'modalService'];