/// <reference path="../../_references.d.ts" />
import plat = require('platypus');
import BaseService = require('../base/base.service');
import UserRepository = require('../../repositories/user/user.repository');

class ProductsService extends BaseService {
    constructor(private userRepository: UserRepository) {
        super();
    }

    getProducts(): plat.async.IAjaxThenable<Array<models.IProduct>> {
        return this.json(this.host + '/products/all');
    }

    placeOrder(order: models.IOrder): plat.async.IAjaxThenable<boolean> {
        order.userid = this.userRepository.userid;
        return this.json(this.host + '/orders/create', order, 'POST')
        .then((success) => {
            return true;
        });
    }
}

plat.register.injectable('products-service', ProductsService, [UserRepository]);

export = ProductsService;