var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var BaseViewControl = require('../base/base.viewcontrol');
var ConfirmationViewControl = (function (_super) {
    __extends(ConfirmationViewControl, _super);
    function ConfirmationViewControl() {
        _super.apply(this, arguments);
        this.templateString = require('./confirmation.viewcontrol.html');
        this.context = {};
    }
    ConfirmationViewControl.prototype.initialize = function () {
    };
    ConfirmationViewControl.prototype.loaded = function () {
    };
    ConfirmationViewControl.prototype.canNavigateTo = function (parameters, query) {
    };
    ConfirmationViewControl.prototype.canNavigateFrom = function () {
    };
    ConfirmationViewControl.prototype.navigatedTo = function (parameters, query) {
    };
    ConfirmationViewControl.prototype.navigatingFrom = function () {
    };
    ConfirmationViewControl.prototype.dispose = function () {
    };
    return ConfirmationViewControl;
})(BaseViewControl);
plat.register.viewControl('confirmation-vc', ConfirmationViewControl);
module.exports = ConfirmationViewControl;
//# sourceMappingURL=confirmation.viewcontrol.js.map