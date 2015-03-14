var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var BaseService = require('../base/base.service');
var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        _super.apply(this, arguments);
    }
    UserService.prototype.register = function (email, password, firstname, lastname) {
        return this._http.json({
            method: 'POST',
            url: this.host + '/users/register',
            data: {
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname
            }
        }).then(function (success) {
            return {
                id: success.response.data,
                email: email
            };
        }, function (error) {
            throw error.response.message;
        });
    };
    UserService.prototype.login = function (email, password) {
        return this._http.json({
            method: 'POST',
            url: this.host + '/users/login',
            data: {
                email: email,
                password: password
            }
        }).then(function (success) {
            return {
                id: success.response.data,
                email: email
            };
        }, function (error) {
            throw error.response.message;
        });
    };
    return UserService;
})(BaseService);
plat.register.injectable('user-service', UserService);
module.exports = UserService;
//# sourceMappingURL=user.service.js.map