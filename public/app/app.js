var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var HomeViewControl = require('../viewcontrols/home/home.viewcontrol');
var RegisterViewControl = require('../viewcontrols/register/register.viewcontrol');
var LoginViewControl = require('../viewcontrols/login/login.viewcontrol');
var OrderViewControl = require('../viewcontrols/order/order.viewcontrol');
var ConfirmationViewControl = require('../viewcontrols/confirmation/confirmation.viewcontrol');
var App = (function (_super) {
    __extends(App, _super);
    function App(router) {
        _super.call(this);
        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: '/login', view: LoginViewControl },
            { pattern: '/register', view: RegisterViewControl },
            { pattern: '/order/:id', view: OrderViewControl },
            { pattern: '/confirmation', view: ConfirmationViewControl },
        ]);
    }
    App.prototype.ready = function (ev) {
        try {
            StatusBar.hide();
        }
        catch (e) {
        }
    };
    App.prototype.error = function (ev) {
        console.log(ev.error);
    };
    App.prototype.suspend = function (ev) {
    };
    App.prototype.exiting = function (ev) {
    };
    App.prototype.resume = function (ev) {
    };
    App.prototype.online = function (ev) {
    };
    App.prototype.offline = function (ev) {
    };
    return App;
})(plat.App);
exports.App = App;
plat.register.app('Getting-started', App, [
    plat.routing.Router
]);
//# sourceMappingURL=app.js.map