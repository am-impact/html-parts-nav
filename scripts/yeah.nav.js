var Yeah = Yeah || {};

Yeah.nav = {
    delay		: 600,
    timer		: null,
    menuitem	: null,

    /**
     * apply
     * @param	string	selector
     */
    apply: function( selector ) {
        $(selector).hover(Yeah.nav.open, Yeah.nav.setTimer);
        $(document).click(Yeah.nav.close);
    },

    /**
     * cancelTimer
     */
    cancelTimer: function() {
        if(Yeah.nav.timer)	{
            clearTimeout(Yeah.nav.timer);
            Yeah.nav.timer = null;
        }
    },

    /**
     * setTimer
     */
    setTimer: function() {
        Yeah.nav.timer = window.setTimeout(Yeah.nav.close, Yeah.nav.delay);
    },

    /**
     * close
     * @param	string	current_menu_id
     */
    close: function( current_menu_id ) {
        if(Yeah.nav.menuitem)	{
            if(Yeah.nav.menuitem.data("menuID") != current_menu_id)
            {
                $(Yeah.nav.menuitem).removeClass("hover");
                $(Yeah.nav.menuitem).find('> .subnav').attr('style', function(i, style)
                {
                    if(style) {
                        return style.replace(/left[^;]+;?/g, '');
                    }
                });
            }
        }
    },

    /**
     * open
     */
    open: function() {
        current_menu = $(this);

        current_menu.addClass("hover");

        // uniek menu id per submenu, dit om bij het sluiten te checken of niet de actieve wordt gesloten
        if(!current_menu.data("menuID"))	{
            current_menu.data("menuID", (Math.random() +''+ Math.random()).replace(/\./g,""))
        }

        Yeah.nav.cancelTimer();
        Yeah.nav.close( current_menu.data("menuID") );
        Yeah.nav.menuitem = current_menu;
    }
};

// Submenu
Yeah.nav.apply(".mainnav > li");