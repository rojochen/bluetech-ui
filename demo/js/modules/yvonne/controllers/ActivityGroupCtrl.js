// ps. import 都在上方 export 都在下方
import {PortletCtrl} from "./../../common/controllers/PortletCtrl.js";

 class ActivityGroupCtrl  extends PortletCtrl{
     constructor() {
        //  繼承了 PortletCtrl 可以直接使用他的function 請看html
        // supre執行繼承function
         super();
         this.DemoCtrlFun();
         console.log('a111s');
     }

     DemoCtrlFun() {

     }
 }

 ActivityGroupCtrl.$inject = [];

 export {
     ActivityGroupCtrl
 }