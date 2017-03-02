class DatepickerCtrl extends PortletCtrl{
    constructor($scope, $log){
        super();
        this.DatepickerFun($scope, $log);
    }

    DatepickerFun($scope, $log){
        super.PortletFun();

        /* begin datepicker頁面 */
        $scope.datesingle = new Date('2016/02/28 9:00:00 PM');
        $scope.console_single = () => {
        $log.debug($scope.datesingle);
        }
        $scope.remove_single = () => {
        $scope.datesingle = '';
        }
        $scope.minMax_change = () => {
        $scope.obj = {
            'minDate': '2016-01-15',
            'maxDate': '2017-11-11'
        }
        }
        $scope.disabled_change = () => {
        $scope.disableStatus = !$scope.disableStatus;
        }
        $scope.eventSelect = (e) => {
        $log.debug(e);
        }
        $scope.eventCancel = (e) => {
        $log.debug(e);
        }
        /* end datepicker頁面 */
    }
}

DatepickerCtrl.$inject = ['$scope', '$log'];

import {PortletCtrl} from "./../controllers/PortletCtrl.js";

export {DatepickerCtrl};