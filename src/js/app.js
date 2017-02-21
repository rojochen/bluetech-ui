
import {blueHello} from 'bluetech';
import {PaginationService} from './service/PaginationService.js';
import {ModalService} from './service/ModalService.js';
import {PnotifyService} from './service/PnotifyService.js';
import {Pagination} from './directive/Pagination.js';
import {ConfirmModal} from './directive/ConfirmModal.js';
export const AppModule  = 
    angular.module("bluetechUI", ['bluetech'])
    .factory('paginationService',($log)=> new PaginationService($log))
    .factory('modalService',($log)=>new ModalService($log))
    .factory('pnotifyService',($log)=>new PnotifyService($log))
    .directive('btConfirmModal', ($timeout)=>new ConfirmModal($timeout))
    .directive('btPagination',(paginationService)=>new Pagination(paginationService))
    .name;