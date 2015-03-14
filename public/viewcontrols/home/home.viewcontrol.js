var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var BaseViewControl = require('../base/base.viewcontrol');
var UserRepository = require('../../repositories/user/user.repository');
var OrderViewControl = require('../order/order.viewcontrol');
var ProductsService = require('../../services/products/products.service');
var HomeViewControl = (function (_super) {
    __extends(HomeViewControl, _super);
    function HomeViewControl(userRepository, productsService) {
        _super.call(this);
        this.userRepository = userRepository;
        this.productsService = productsService;
        this.templateString = require('./home.viewcontrol.html');
        this.context = {
            products: []
        };
    }
    HomeViewControl.prototype.order = function (id) {
        this.navigator.navigate(OrderViewControl, { parameters: { id: id } });
    };
    HomeViewControl.prototype.navigatedTo = function () {
        var _this = this;
        this.productsService.getProducts().then(function (products) {
            _this.context.products = products;
        });
    };
    HomeViewControl.prototype.canNavigateTo = function () {
        if (this.userRepository.userid === 0) {
            this.navigator.navigate('login-vc');
            return false;
        }
    };
    return HomeViewControl;
})(BaseViewControl);
plat.register.viewControl('home-vc', HomeViewControl, [UserRepository, ProductsService]);
module.exports = HomeViewControl;
//# sourceMappingURL=home.viewcontrol.js.map