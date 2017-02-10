define(['btModule'], function (btModule) {
  'use strict';
  var app = angular.module('btModule');

  demoCtrl.$inject = ['$scope', '$log', 'paginationService'];
  function demoCtrl($scope, $log, paginationService) {
    /*begin Portlet */
    $('.collapse-link').on('click', function() {
        var $BOX_PANEL = $(this).closest('.x_panel'),
            $ICON = $(this).find('i'),
            $BOX_CONTENT = $BOX_PANEL.find('.x_content');
        
        // fix for some div with hardcoded fix class
        if ($BOX_PANEL.attr('style')) {
            $BOX_CONTENT.slideToggle(200, function(){
                $BOX_PANEL.removeAttr('style');
            });
        } else {
            $BOX_CONTENT.slideToggle(200); 
            $BOX_PANEL.css('height', 'auto');  
        }

        $ICON.toggleClass('fa-chevron-up fa-chevron-down');
    });

    $('.close-link').click(function () {
        var $BOX_PANEL = $(this).closest('.x_panel');

        $BOX_PANEL.remove();
    });
    /* end Portlet*/

    /* begin pagination頁面 */
    $scope.tableInfo = {
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
    $scope.eventChange = function(e){
      console.log(e);
    };
    $scope.goFirst = function(){
      paginationService.goFirst('ss');
    }
    /* end pagination頁面 */

    /* begin datepicker、datepickerRange頁面 */
    var d1 = new Date('2016/02/23 9:00:00 AM');
    var d2 = new Date('2016/03/20 6:30:00 PM');
    $scope.daterange1 = [d1,d2];
    // console.log($scope.daterange1);
    // $scope.daterange1 = [];

    $scope.console = function(){
      console.log($scope.daterange1);
    }
    $scope.remove = function(){
      $scope.daterange1 = [];
    }
    $scope.minMax = function(){
      $scope.obj_range = {
        'minDate': '2016-01-15',
        'maxDate': '2017-11-11'
      }
    }
    $scope.disabled = function(){
      $scope.disable = !$scope.disable;
    }
    $scope.eventSelect_range = function(e){
      console.log(e);
    }
    $scope.eventCancel_range = function(e){
      console.log(e);
    }

    $scope.datesingle = new Date('2016/02/28 9:00:00 PM');
    $scope.console_single = function(){
      console.log($scope.datesingle);
    }
    $scope.remove_single = function(){
      $scope.datesingle = '';
    }
    $scope.minMax_change = function(){
      $scope.obj = {
        'minDate': '2016-01-15',
        'maxDate': '2017-11-11'
      }
    }
    $scope.disabled_change = function(){
      $scope.disableStatus = !$scope.disableStatus;
    }
    $scope.eventSelect = function(e){
      console.log(e);
    }
    $scope.eventCancel = function(e){
      console.log(e);
    }
    /* end datepicker、datepickerRange頁面 */
  }
  app.controller('demoCtrl', demoCtrl);

  return app;
});