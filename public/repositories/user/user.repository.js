var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var BaseRepository = require('../base/base.repository');
var UserService = require('../../services/user/user.service');
var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository(userService) {
        _super.call(this);
        this.userService = userService;
        this.userid = 0;
    }
    UserRepository.prototype.login = function (email, password) {
        var _this = this;
        return this.userService.login(email, password).then(function (user) {
            _this.userid = user.id;
            _this.email = user.email;
            return true;
        });
    };
    UserRepository.prototype.register = function (email, password, firstname, lastname) {
        var _this = this;
        return this.userService.register(email, password, firstname, lastname).then(function (user) {
            _this.userid = user.id;
            _this.email = user.email;
            return true;
        });
    };
    return UserRepository;
})(BaseRepository);
plat.register.injectable('user-repository', UserRepository, [UserService]);
module.exports = UserRepository;
//# sourceMappingURL=user.repository.js.map