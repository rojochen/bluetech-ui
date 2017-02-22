class DatepickerRangeCtrl{
    constructor($scope, $log){
        this.DatepickerRangeFun($scope, $log);
    }
    
    DatepickerRangeFun($scope, $log){
        /* begin datepickerRange頁面 */
        let d1 = new Date('2016/02/23 9:00:00 AM');
        let d2 = new Date('2016/03/20 6:30:00 PM');
        $scope.daterange1 = [d1,d2];
        // $log.debug($scope.daterange1);
        // $scope.daterange1 = [];

        $scope.console = () => {
        $log.debug($scope.daterange1);
        }
        $scope.remove = () => {
        $scope.daterange1 = [];
        }
        $scope.minMax = () => {
        $scope.obj_range = {
            'minDate': '2016-01-15',
            'maxDate': '2017-11-11'
        }
        }
        $scope.disabled = () => {
        $scope.disable = !$scope.disable;
        }
        $scope.eventSelect_range = (e) => {
        $log.debug(e);
        }
        $scope.eventCancel_range = (e) => {
        $log.debug(e);
        }
        /* end datepickerRange頁面 */
    }
}

import template from "./../views/datepicker_range.html";
export const DatepickerRange = {
    template,
    controller: DatepickerRangeCtrl
}

DatepickerRange.$inject = ['$scope', '$log'];