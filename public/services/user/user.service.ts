/// <reference path="../../_references.d.ts" />

import plat = require('platypus');

import BaseService = require('../base/base.service');

class UserService extends BaseService {
    register(email: string, password: string, 
        firstname: string, 
        lastname: string): plat.async.IThenable<models.IUser> {

        return this._http.json<models.IResponse>({
            method: 'POST',
            url: this.host + '/users/register',
            data: <models.IUser>{
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname
            }
        }).then(
            (success) => {
                return <models.IUser>{
                    id: success.response.data,
                    email: email
                };
            },
            (error) => {
                throw error.response.message;
            }
        );
    }

    login(email: string, password: string): plat.async.IThenable<models.IUser> {
        return this._http.json<models.IResponse>({
            method: 'POST',
            url: this.host + '/users/login',
            data: <models.IUser>{
                email: email,
                password: password
            }
        }).then(
            (success) => {
                return <models.IUser>{
                    id: success.response.data,
                    email: email
                };
            },
            (error: plat.async.AjaxError) => {
                throw error.response.message;
            }
        );
    }
}

plat.register.injectable('user-service', UserService);

export = UserService;
