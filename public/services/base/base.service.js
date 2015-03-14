var plat = require('platypus');
var BaseService = (function () {
    function BaseService() {
        this.host = 'http://platypisamples.azurewebsites.net/gettingstarted/api';
    }
    BaseService.prototype.json = function (url, data, method) {
        if (method === void 0) { method = 'GET'; }
        return this._http.json({
            method: method,
            url: url,
            data: data
        }).then(function (success) {
            return success.response.data;
        }, function (error) {
            throw error.response.message;
        });
    };
    BaseService._inject = {
        _http: plat.async.Http,
        _Promise: plat.async.IPromise,
        _utils: plat.Utils
    };
    return BaseService;
})();
module.exports = BaseService;
//# sourceMappingURL=base.service.js.map