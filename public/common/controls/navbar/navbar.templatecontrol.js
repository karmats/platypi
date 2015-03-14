var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var BaseTemplateControl = require('../base/base.templatecontrol');
var NavbarTemplateControl = (function (_super) {
    __extends(NavbarTemplateControl, _super);
    function NavbarTemplateControl() {
        _super.apply(this, arguments);
        this.templateString = require('./navbar.templatecontrol.html');
        this.context = {
            showNavbar: false
        };
    }
    NavbarTemplateControl.prototype.initialize = function () {
        var _this = this;
        this.on('navigating', function (ev, utils) {
            _this.drawerController.control.close();
            if (utils.pathname.indexOf('/login') === 0 || utils.pathname.indexOf('/register') === 0) {
                _this.context.showNavbar = false;
            }
            else {
                _this.context.showNavbar = true;
            }
        });
    };
    NavbarTemplateControl.prototype.loaded = function () {
    };
    NavbarTemplateControl.prototype.dispose = function () {
    };
    return NavbarTemplateControl;
})(BaseTemplateControl);
plat.register.control('navbar', NavbarTemplateControl);
module.exports = NavbarTemplateControl;
//# sourceMappingURL=navbar.templatecontrol.js.map