var plat = require('platypus');
var BaseRepository = (function () {
    function BaseRepository() {
    }
    BaseRepository._inject = {
        _utils: plat.Utils
    };
    return BaseRepository;
})();
module.exports = BaseRepository;
//# sourceMappingURL=base.repository.js.map