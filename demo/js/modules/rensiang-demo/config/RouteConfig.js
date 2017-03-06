export class RouteConfig {
    constructor($stateProvider, $urlServiceProvider) {

        $stateProvider.
        state('bluetechUI/rensiang-demo/multi-edit-service', {
            url: '/bluetechUI/rensiang-demo/multi-edit-service',
            component: 'multiEditService'
        });
    }
}


RouteConfig.$inject = ['$stateProvider', '$urlServiceProvider'];