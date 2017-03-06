export class RouteConfig {
    constructor($stateProvider, $urlServiceProvider) {

        $stateProvider.
        state('bluetechUI/yun/arpb-set', {
            url: '/bluetechUI/yun/arpb-set',
            component: 'arpbSet'
        });
    }
}


RouteConfig.$inject = ['$stateProvider', '$urlServiceProvider'];