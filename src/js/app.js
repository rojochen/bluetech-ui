
import {blueHello} from 'bluetech';
import {PaginationService} from './service/PaginationService.js';
import {ModalService} from './service/ModalService.js';
import {PnotifyService} from './service/PnotifyService.js';
import {Pagination} from './directive/Pagination.js';
import {ConfirmModal} from './directive/ConfirmModal.js';
import {Datepicker} from './directive/Datepicker.js';
import {DatepickerRange} from './directive/DatepickerRange.js';
export const AppModule  = 
    angular.module("bluetechUI", ['bluetech'])
    .factory('paginationService',($log)=> new PaginationService($log))
    .factory('modalService',($log)=>new ModalService($log))
    .factory('pnotifyService',($log)=>new PnotifyService($log))
    .directive('btPagination',(paginationService)=>new Pagination(paginationService))
    .directive('btConfirmModal', ($timeout)=>new ConfirmModal($timeout))
    .directive('btDatepicker', ($timeout) => new Datepicker($timeout))
    .directive('btDatepickerRange', ($timeout) => new DatepickerRange($timeout))
    .name;