(() => {
    pnotifyService.$inject = ['$log'];

    function pnotifyService($log) {
        let paginationInfo = null;
        let pnotifyService = {
            pnotifySuccess: (title ,content, delay) => {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'success',
                    styling: 'bootstrap3',
                    delay: delay?delay:4000
                });
            },
            pnotifyInfo: (title ,content, delay) => {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'info',
                    styling: 'bootstrap3',
                    delay: delay?delay:4000
                });
            },
            pnotifyError: (title ,content, delay) => {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'error',
                    styling: 'bootstrap3',
                    delay: delay?delay:4000
                });
            },
            pnotifyWarn: (title ,content, delay) => {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'warn',
                    styling: 'bootstrap3',
                    delay: delay?delay:4000
                });
            },
            pnotifyDark: (title ,content, delay) => {
                new PNotify({
                    title: title,
                    text: content,
                    styling: 'bootstrap3',
                    addclass: 'dark',
                    delay: delay?delay:4000
                });
            }
        };
        return pnotifyService;
    }

    app.factory('pnotifyService', pnotifyService);
})();