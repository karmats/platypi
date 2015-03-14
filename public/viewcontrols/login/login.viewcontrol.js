var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var BaseViewControl = require('../base/base.viewcontrol');
var UserRepository = require('../../repositories/user/user.repository');
var HomeViewControl = require('../home/home.viewcontrol');
var RegisterViewControl = require('../register/register.viewcontrol');
var LoginViewControl = (function (_super) {
    __extends(LoginViewControl, _super);
    function LoginViewControl(userRepository) {
        _super.call(this);
        this.userRepository = userRepository;
        this.templateString = require('./login.viewcontrol.html');
        this.context = {
            email: '',
            password: '',
            error: ''
        };
    }
    LoginViewControl.prototype.login = function () {
        var _this = this;
        this.userRepository.login(this.context.email, this.context.password).then(function (success) {
            _this.navigator.navigate(HomeViewControl);
        }).catch(function (error) {
            _this.context.error = error;
        });
    };
    LoginViewControl.prototype.register = function () {
        this.navigator.navigate(RegisterViewControl);
    };
    return LoginViewControl;
})(BaseViewControl);
plat.register.viewControl('login-vc', LoginViewControl, [UserRepository]);
module.exports = LoginViewControl;
//# sourceMappingURL=login.viewcontrol.js.map