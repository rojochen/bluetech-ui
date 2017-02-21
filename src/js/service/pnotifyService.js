export class PnotifyService{
        constructor($log){
            this.$log = $log;   
            this.styling = 'bootstrap3';      
        }         
        pnotifySuccess(title ,content, delay){
              new PNotify({
                    title: title,
                    text: content,
                    type: 'success',
                    styling: this.styling,
                    delay: delay?delay:4000
              });
        }
        pnotifyInfo(title ,content, delay){
             new PNotify({
                    title: title,
                    text: content,
                    type: 'info',
                    styling: this.styling,
                    delay: delay?delay:4000
             });
        }
        pnotifyError(title ,content, delay){
             new PNotify({
                    title: title,
                    text: content,
                    type: 'error',
                    styling: this.styling,
                    delay: delay?delay:4000
             });            
        }
        pnotifyWarn(title ,content, delay){
             new PNotify({
                    title: title,
                    text: content,
                    type: 'warn',
                    styling:  this.styling,
                    delay: delay?delay:4000
                });
        }
        pnotifyDark (title ,content, delay) {
                new PNotify({
                    title: title,
                    text: content,
                    styling: this.styling,
                    addclass: 'dark',
                    delay: delay?delay:4000
                });
        }
}
PnotifyService.$inject = ['$log'];
