export class RouteConfig {
    constructor($stateProvider, $urlServiceProvider) {

        $stateProvider.
        state('bluetechUI/yun/ARPBSet', {
            url:'/bluetechUI/yun/ARPBSet',
            component: 'aRPBSet'
        });
    }
}


RouteConfig.$inject = ['$stateProvider', '$urlServiceProvider'];