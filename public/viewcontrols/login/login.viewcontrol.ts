/// <reference path="../../_references.d.ts" />

import plat = require('platypus');
import BaseViewControl = require('../base/base.viewcontrol');
import UserRepository = require('../../repositories/user/user.repository');
import HomeViewControl = require('../home/home.viewcontrol');
import RegisterViewControl = require('../register/register.viewcontrol');

class LoginViewControl extends BaseViewControl {
    templateString: string = require('./login.viewcontrol.html');
    context: any = {
        email: '',
        password: '',
        error: ''
    };

    constructor(private userRepository: UserRepository) {
        super();
    }

    login() {
        this.userRepository.login(this.context.email, this.context.password)
        .then((success) => {
            this.navigator.navigate(HomeViewControl);
        }).catch((error) => {
            this.context.error = error;
        });
    }

    register() {
        this.navigator.navigate(RegisterViewControl);
    }
}

plat.register.viewControl('login-vc', LoginViewControl, [UserRepository]);

export = LoginViewControl;