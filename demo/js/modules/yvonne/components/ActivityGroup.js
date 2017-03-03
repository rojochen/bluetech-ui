// class activityGroupCtrl {
//     constructor() {
//         console.log('zzz');
//     }
// }
import template from "./../../yvonne/views/activity-group.html";
import {
    ActivityGroupCtrl
} from "./../controllers/ActivityGroupCtrl.js";
export const ActivityGroup = {
    template,
    controller: ActivityGroupCtrl,
    controllerAs: 'vm'
}