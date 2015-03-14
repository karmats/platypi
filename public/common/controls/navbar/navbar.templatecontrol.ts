/// <reference path="../../../_references.d.ts" />

import plat = require('platypus');

import BaseTemplateControl = require('../base/base.templatecontrol');
import platui = require('platypusui');

class NavbarTemplateControl extends BaseTemplateControl {
    /**
     * This is the property that indicates where the template HTML for this control exists.
     */
    templateString = require('./navbar.templatecontrol.html');
    drawerController: plat.controls.INamedElement<HTMLDivElement, platui.DrawerController>;
    context: any = {
        showNavbar: false
    };
    initialize() {
        this.on('navigating', (ev: plat.events.DispatchEvent, utils: plat.web.UrlUtils) => {
            this.drawerController.control.close();
            if(utils.pathname.indexOf('/login') === 0 ||
                utils.pathname.indexOf('/register') === 0) {
                this.context.showNavbar = false;
            } else {
                this.context.showNavbar = true;
            }
        });
    }

    /**
     * The loaded event method for a control. This event is fired after a control has been completely loaded,
     * meaning all of its children have also been loaded and all DOM has been created and populated. It is now 
     * safe for all controls to access, observe, and modify the context property.
     */
    loaded() { }

    /**
     * The dispose event is called when a control is being removed from memory. A control should release 
     * all of the memory it is using, including DOM event and property listeners.
     */
    dispose() { }
}

plat.register.control('navbar', NavbarTemplateControl);

export = NavbarTemplateControl;
