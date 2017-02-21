export class SliderMenu {
    constructor($timeout){
        this.$timeout = $timeout;
        this.sliderMenuFun();
    }
    
    sliderMenuFun(){
        let CURRENT_URL = window.location.href.split('?')[0],
            $BODY = $('body'),
            $MENU_TOGGLE = $('#menu_toggle'),
            $SIDEBAR_MENU = $('#sidebar-menu'),
            $SIDEBAR_FOOTER = $('.sidebar-footer'),
            $LEFT_COL = $('.left_col'),
            $RIGHT_COL = $('.right_col'),
            $NAV_MENU = $('.nav_menu'),
            $FOOTER = $('footer'),
            topNav = $('.main_container .top_nav');

        this.$timeout(() => {
            // Sidebar
            $(document).ready(() => {
                $RIGHT_COL.css('padding-top', $NAV_MENU.height());
                // TODO: This is some kind of easy fix, maybe we can improve this
                let setContentHeight = () => {
                    // reset height
                    $RIGHT_COL.css('min-height', $(window).height());

                    let bodyHeight = $BODY.outerHeight(),
                        footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
                        leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
                        // contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;
                        contentHeight = leftColHeight;

                    // normalize content
                    // contentHeight -= $NAV_MENU.height() + footerHeight;

                    // $RIGHT_COL.css('min-height', contentHeight);
                };

                $SIDEBAR_MENU.find('a').on('click', (ev) => {
                    let $li = $(this).parent(),
                        $slideUpTime = 150;
                    if ($BODY.hasClass('nav-md')) {
                        $slideUpTime = 150;
                    } else {
                        $slideUpTime = 0;
                    }

                    if ($li.is('.active')) {
                        $li.removeClass('active active-sm');
                        $('ul:first', $li).slideUp($slideUpTime, () => {
                            setContentHeight();
                        });
                    } else {
                        // prevent closing menu if we are on child menu
                        if (!$li.parent().is('.child_menu')) {
                            $SIDEBAR_MENU.find('li').removeClass('active active-sm');
                            $SIDEBAR_MENU.find('li ul').slideUp($slideUpTime);
                        }

                        $('.nav .child_menu li').removeClass('active');

                        $li.addClass('active');

                        $('ul:first', $li).slideDown($slideUpTime, () => {
                            // setContentHeight();
                        });
                    }
                });

                // toggle small or large menu
                $MENU_TOGGLE.on('click', () => {
                    if ($BODY.hasClass('nav-md')) {
                        $SIDEBAR_MENU.find('li.active ul').hide();
                        $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
                    } else {
                        $SIDEBAR_MENU.find('li.active-sm ul').show();
                        $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
                    }

                    // $BODY.toggleClass('nav-md nav-sm');
                    if($LEFT_COL.css('left') === '-230px'){
                        $LEFT_COL.css('left', '0px');
                        $RIGHT_COL.css('margin-left', '230px');
                        topNav.css('margin-left', '230px');
                        $FOOTER.css('margin-left', '230px');
                        setTimeout(() => {
                            topNav.css('width', topNav.width()-230+'px');
                            $FOOTER.css('width', $FOOTER.width()-190+'px'); 
                        },450);
                        
                    }else{
                        $LEFT_COL.css('left', '-230px');
                        $RIGHT_COL.css('margin-left', '0px');
                        topNav.css({'margin-left':'0px', 'width':'100%'});
                        // topNav.css({'margin-left':'0px'});
                        $FOOTER.css({'margin-left':'0px', 'width':'100%'});
                    }


                    $RIGHT_COL.css('padding-top', $NAV_MENU.height());

                    setContentHeight();
                });

                // check active menu
                $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

                $SIDEBAR_MENU.find('a').filter(() => {
                    return this.href == CURRENT_URL;
                }).parent('li').addClass('current-page').parents('ul').slideDown(() => {
                    setContentHeight();
                }).parent().addClass('active');

                // recompute content when resizing
                $(window).smartresize(() => {
                    if($LEFT_COL.css('left') !== '-230px'){
                        topNav.css('width', $('body').width()-230+'px');
                        $FOOTER.css('width', $('body').width()-230+'px'); 
                    }
                    
                    $RIGHT_COL.css('padding-top', $NAV_MENU.height());
                    setContentHeight();
                });

                setContentHeight();

                // fixed sidebar
                if ($.fn.mCustomScrollbar) {
                    $('.menu_fixed').mCustomScrollbar({
                        autoHideScrollbar: true,
                        theme: 'minimal',
                        mouseWheel: {
                            preventDefault: true
                        }
                    });
                }
            });
        });
        // /Sidebar	
    }
}

SliderMenu.$inject = ['$timeout'];