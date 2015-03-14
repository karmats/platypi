var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var BaseViewControl = require('../base/base.viewcontrol');
var ProductsService = require('../../services/products/products.service');
var ConfirmationViewControl = require('../confirmation/confirmation.viewcontrol');
var OrderViewControl = (function (_super) {
    __extends(OrderViewControl, _super);
    function OrderViewControl(productsService) {
        _super.call(this);
        this.productsService = productsService;
        this.templateString = require('./order.viewcontrol.html');
        this.context = {
            order: {
                productid: 0,
                address: '',
                city: '',
                state: '',
                zip: '',
                productsize: ''
            },
            error: ''
        };
    }
    OrderViewControl.prototype.placeOrder = function () {
        var _this = this;
        this.productsService.placeOrder(this.context.order).then(function (success) {
            _this.navigator.navigate(ConfirmationViewControl);
        }).catch(function (error) {
            _this.context.error = error;
        });
    };
    OrderViewControl.prototype.initialize = function () {
    };
    OrderViewControl.prototype.loaded = function () {
    };
    OrderViewControl.prototype.canNavigateTo = function (parameters, query) {
    };
    OrderViewControl.prototype.canNavigateFrom = function () {
    };
    OrderViewControl.prototype.navigatedTo = function (params, query) {
        this.context.order.productid = params.id;
    };
    OrderViewControl.prototype.navigatingFrom = function () {
    };
    OrderViewControl.prototype.dispose = function () {
    };
    return OrderViewControl;
})(BaseViewControl);
plat.register.viewControl('order-vc', OrderViewControl, [ProductsService]);
module.exports = OrderViewControl;
//# sourceMappingURL=order.viewcontrol.js.map