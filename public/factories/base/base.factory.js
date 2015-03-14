var plat = require('platypus');
var BaseFactory = (function () {
    function BaseFactory() {
    }
    BaseFactory._inject = {
        _utils: plat.Utils
    };
    return BaseFactory;
})();
module.exports = BaseFactory;
//# sourceMappingURL=base.factory.js.map