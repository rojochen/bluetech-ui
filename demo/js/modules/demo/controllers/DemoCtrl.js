export class DemoCtrl {
    constructor(){
        this.DemoCtrlFun();
    }
    
    DemoCtrlFun(){
        /*begin Portlet */
        $('.collapse-link').on('click', () => {
            let $BOX_PANEL = $(this).closest('.x_panel'),
                $ICON = $(this).find('i'),
                $BOX_CONTENT = $BOX_PANEL.find('.x_content');
            
            // fix for some div with hardcoded fix class
            if ($BOX_PANEL.attr('style')) {
                $BOX_CONTENT.slideToggle(200, () => {
                    $BOX_PANEL.removeAttr('style');
                });
            } else {
                $BOX_CONTENT.slideToggle(200); 
                $BOX_PANEL.css('height', 'auto');  
            }

            $ICON.toggleClass('fa-chevron-up fa-chevron-down');
        });

        $('.close-link').click( () => {
            let $BOX_PANEL = $(this).closest('.x_panel');

            $BOX_PANEL.remove();
        });
        /* end Portlet*/
    }
}

DemoCtrl.$inject = [];