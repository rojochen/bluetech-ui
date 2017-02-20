// define(['bluetech'], () => {
//     const app = angular.module("bluetechUI", ['bluetech']);
//     //directive
//     // btDatepicker = require('directive/btDatepicker.js'),
//     // btDatepickerRange = require('directive/btDatepickerRange.js'),
//     // btPagination = require('directive/btPagination.js'),
//     // btConfirmModal = require('directive/btConfirmModal.js'),



//     // const btDirective = require("directive/dist/btDirective");

//     //service

//     const btService = require("./service/dist/btService");
//     // paginationService = require('service/btpaginationService.js'),
//     // pnotifyService = require('service/pnotifyService.js'),
//     // modalService = require('service/modalService.js');

//     return app;
// });

export {
    bluetech
}
from "bluetech";
export {
    btDatepicker
}
from 'directive/btDatepicker.js';
export {
    btDatepickerRange
}
from 'directive/btDatepickerRange.js';
export {
    btPagination
}
from 'directive/btPagination.js';
export {
    btConfirmModal
}
from 'directive/btConfirmModal.js';
// btDatepicker();
// btDatepickerRange();
// btPagination();
// btConfirmModal();

export {
    paginationService
}
from 'service/btpaginationService.js';
export {
    pnotifyService
}
from 'service/pnotifyService.js';
export {
    modalService
}
from 'service/modalService.js';

paginationService();
pnotifyService();
modalService();
// const btService = require("./service/dist/btService");