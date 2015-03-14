/// <reference path="../../_references.d.ts" />

import plat = require('platypus');
import BaseRepository = require('../base/base.repository');
import UserService = require('../../services/user/user.service');

class UserRepository extends BaseRepository {
    userid: number = 0;
    email: string;

    constructor(private userService: UserService) {
        super();
    }

    login(email: string, password: string): plat.async.IThenable<boolean> {
        return this.userService.login(email, password).then((user) => {
            this.userid = user.id;
            this.email = user.email;
            return true;
        });
    }

    register(email: string, password: string, firstname: string, lastname: string): plat.async.IThenable<boolean> {
        return this.userService.register(email, password, firstname, lastname).then((user) => {
            this.userid = user.id;
            this.email = user.email;
            return true;
        });
    }
}

plat.register.injectable('user-repository', UserRepository, [UserService]);

export = UserRepository;