/// <reference path="../../_references.d.ts" />

import plat = require('platypus');
import BaseViewControl = require('../base/base.viewcontrol');
import UserRepository = require('../../repositories/user/user.repository');
import OrderViewControl = require('../order/order.viewcontrol');
import ProductsService = require('../../services/products/products.service');

class HomeViewControl extends BaseViewControl {

    constructor(private userRepository: UserRepository, private productsService: ProductsService) {
        super();
    }

    templateString: string = require('./home.viewcontrol.html');

    context: any = {
        products: <Array<models.IProduct>>[]
    };

    order(id: number) {
        this.navigator.navigate(OrderViewControl, { parameters: { id: id } });
    }

    navigatedTo() {
        this.productsService.getProducts().then((products) => {
            this.context.products = products;
        });
    }

    canNavigateTo() {
        if(this.userRepository.userid === 0) {
            this.navigator.navigate('login-vc');
            return false;
        }
    }
}

plat.register.viewControl('home-vc', HomeViewControl, [UserRepository, ProductsService]);

export = HomeViewControl;
