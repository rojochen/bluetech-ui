// ps. import 都在上方 export 都在下方
import {PortletCtrl} from "./../../common/controllers/PortletCtrl.js";

 class DemoCtrl  extends PortletCtrl{
     constructor() {
        //  繼承了 PortletCtrl 可以直接使用他的function 請看html
        // supre執行繼承function
         super();
         this.DemoCtrlFun();
         console.log('a111s');
     }

     DemoCtrlFun() {
         /*begin Portlet */
         // $('.collapse-link').on('click', () => {
         //     let $BOX_PANEL = $(this).closest('.x_panel'),
         //         $ICON = $(this).find('i'),
         //         $BOX_CONTENT = $BOX_PANEL.find('.x_content');

         //     // fix for some div with hardcoded fix class
         //     if ($BOX_PANEL.attr('style')) {
         //         $BOX_CONTENT.slideToggle(200, () => {
         //             $BOX_PANEL.removeAttr('style');
         //         });
         //     } else {
         //         $BOX_CONTENT.slideToggle(200);
         //         $BOX_PANEL.css('height', 'auto');
         //     }

         //     $ICON.toggleClass('fa-chevron-up fa-chevron-down');
         // });

         // $('.close-link').click(() => {
         //     let $BOX_PANEL = $(this).closest('.x_panel');

         //     $BOX_PANEL.remove();
         // });
         /* end Portlet*/
     }
 }

 DemoCtrl.$inject = [];

 export {
     DemoCtrl
 }