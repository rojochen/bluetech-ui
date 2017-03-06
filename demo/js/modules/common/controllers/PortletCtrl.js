class PortletCtrl {
    constructor($log){
        this.$log = $log;
    }

    closeLink(event){
        let $BOX_PANEL = $(event.target).closest('.x_panel');
        $BOX_PANEL.remove();
    }
    
    collapseLink(event){
           let $BOX_PANEL = $(event.target).closest('.x_panel'),
                $ICON = $(event.target).find('i'),
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
    }
}

export {PortletCtrl};