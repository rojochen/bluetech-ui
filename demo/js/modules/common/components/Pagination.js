class PaginationCtrl{
    constructor($scope, $log, paginationService){
        this.PaginationFun($scope, $log, paginationService);
    }

    PaginationFun($scope, $log, paginationService){
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
        $scope.eventChange = (e) => {
        $log.debug(e);
        };
        $scope.goFirst = () =>{
        paginationService.goFirst('ss');
        }
        /* end pagination頁面 */
    }
}

import template from "./../views/pagination.html";
export const Pagination = {
    template,
    controller: PaginationCtrl
}

Pagination.$inject = ['$scope', '$log', 'paginationService'];