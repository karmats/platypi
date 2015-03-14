var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var BaseService = require('../base/base.service');
var UserRepository = require('../../repositories/user/user.repository');
var ProductsService = (function (_super) {
    __extends(ProductsService, _super);
    function ProductsService(userRepository) {
        _super.call(this);
        this.userRepository = userRepository;
    }
    ProductsService.prototype.getProducts = function () {
        return this.json(this.host + '/products/all');
    };
    ProductsService.prototype.placeOrder = function (order) {
        order.userid = this.userRepository.userid;
        return this.json(this.host + '/orders/create', order, 'POST').then(function (success) {
            return true;
        });
    };
    return ProductsService;
})(BaseService);
plat.register.injectable('products-service', ProductsService, [UserRepository]);
module.exports = ProductsService;
//# sourceMappingURL=products.service.js.map