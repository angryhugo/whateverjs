var assert = require("assert");
var validate = require("./reg.js").validatePhoneNumber;

describe("正则验证",function () {
    it("验证手机号", function () {
        assert(validate("13816027534"));
        assert(validate("18016027534"));
        assert(validate("13316027534"));
        assert(validate("18216027534"));
        assert(validate("18316027534"));
        assert(validate("18416027534"));
        assert(validate("18516027534"));
        assert(validate("18616027534"));
        assert(validate("18716027534"));
    });
});