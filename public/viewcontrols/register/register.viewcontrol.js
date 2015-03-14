var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var UserRepository = require('../../repositories/user/user.repository');
var HomeViewControl = require('../home/home.viewcontrol');
var BaseViewControl = require('../base/base.viewcontrol');
var RegisterViewControl = (function (_super) {
    __extends(RegisterViewControl, _super);
    function RegisterViewControl(userRepository) {
        _super.call(this);
        this.userRepository = userRepository;
        this.templateString = require('./register.viewcontrol.html');
        this.context = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            error: ''
        };
    }
    RegisterViewControl.prototype.initialize = function () {
    };
    RegisterViewControl.prototype.loaded = function () {
    };
    RegisterViewControl.prototype.canNavigateTo = function (parameters, query) {
    };
    RegisterViewControl.prototype.canNavigateFrom = function () {
    };
    RegisterViewControl.prototype.navigatedTo = function (parameters, query) {
    };
    RegisterViewControl.prototype.navigatingFrom = function () {
    };
    RegisterViewControl.prototype.register = function () {
        var _this = this;
        this.context.error = '';
        this.userRepository.register(this.context.email, this.context.password, this.context.firstname, this.context.lastname).then(function (success) {
            _this.navigator.navigate(HomeViewControl);
        }).catch(function (error) {
            _this.context.error = error;
        });
    };
    RegisterViewControl.prototype.dispose = function () {
    };
    return RegisterViewControl;
})(BaseViewControl);
plat.register.viewControl('register-vc', RegisterViewControl, [UserRepository]);
module.exports = RegisterViewControl;
//# sourceMappingURL=register.viewcontrol.js.map