var FW = FW || {};

FW.nav = {
    delay       : 600,
    timer       : null,
    menuitem    : null,

    /**
     * apply
     * @param   string  selector
     */
    apply: function( selector ) {
        $(selector).hover(FW.nav.open, FW.nav.setTimer);
        $(document).click(FW.nav.close);
    },

    /**
     * cancelTimer
     */
    cancelTimer: function() {
        if(FW.nav.timer)    {
            clearTimeout(FW.nav.timer);
            FW.nav.timer = null;
        }
    },

    /**
     * setTimer
     */
    setTimer: function() {
        FW.nav.timer = window.setTimeout(FW.nav.close, FW.nav.delay);
    },

    /**
     * close
     * @param   string  current_menu_id
     */
    close: function( current_menu_id ) {
        if(FW.nav.menuitem) {
            if(FW.nav.menuitem.data("menuID") != current_menu_id)
            {
                $(FW.nav.menuitem).removeClass("hover");
            }
        }
    },

    /**
     * open
     */
    open: function() {
        current_menu = $(this);

        if( current_menu.find('ul').length > 0 ) {
            current_menu.addClass("hover");

            // uniek menu id per submenu, dit om bij het sluiten te checken of niet de actieve wordt gesloten
            if(!current_menu.data("menuID"))    {
                current_menu.data("menuID", (Math.random() +''+ Math.random()).replace(/\./g,""))
            }

            FW.nav.cancelTimer();
            FW.nav.close( current_menu.data("menuID") );
            FW.nav.menuitem = current_menu;
        }
    }
};

// Aanroep
FW.nav.apply(".navmain .level0 > li");