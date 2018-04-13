function validatePhoneNumber(phone) {
    var phoneRegExp = /^((1[3|7|8]\d)|(14[5|7])|(15([0-3]|[5-9])))\d{8}$/;
    return phoneRegExp.test(phone);
}

module.exports = {
    validatePhoneNumber: validatePhoneNumber
};