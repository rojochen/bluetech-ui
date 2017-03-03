export class RouteConfig2 {
    constructor($stateProvider, $urlServiceProvider) {

        $stateProvider.
        state('multiEditService', {
            url: '/multiEditService',
            component: 'multiEditService'
        });
    }
}


RouteConfig2.$inject = ['$stateProvider', '$urlServiceProvider'];