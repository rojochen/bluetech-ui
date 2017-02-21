(() => {
    pnotifyService.$inject = ['$log'];

    function pnotifyService($log) {
        let paginationInfo = null;
        let pnotifyService = {
            pnotifySuccess: (title ,content) => {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'success',
                    styling: 'bootstrap3'
                });
            },
            pnotifyInfo: (title ,content) => {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'info',
                    styling: 'bootstrap3'
                });
            },
            pnotifyError: (title ,content) => {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'error',
                    styling: 'bootstrap3'
                });
            },
            pnotifyWarn: (title ,content) => {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'warn',
                    styling: 'bootstrap3'
                });
            },
            pnotifyDark: (title ,content) => {
                new PNotify({
                    title: title,
                    text: content,
                    styling: 'bootstrap3',
                    addclass: 'dark'
                });
            }
        };
        return pnotifyService;
    }

    app.factory('pnotifyService', pnotifyService);
})();