var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var BaseViewControl = (function (_super) {
    __extends(BaseViewControl, _super);
    function BaseViewControl() {
        _super.apply(this, arguments);
    }
    BaseViewControl.prototype.getTemplateUrl = function (filename) {
        return filename.replace(/(?:\\|\/)public(?:\\|\/)/, '').replace('.js', '.html');
    };
    return BaseViewControl;
})(plat.ui.ViewControl);
module.exports = BaseViewControl;
//# sourceMappingURL=base.viewcontrol.js.map