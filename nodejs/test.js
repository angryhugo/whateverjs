console.log(padNumber(2,5,false));

function padNumber(num, digits, trim) {
    var neg = "";
    if (num < 0) {
        neg = "-";
        num = -num;
    }
    num = "" + num;
    while (num.length < digits) {
        num = "0" + num;
    }
    if (trim) {
        num = num.substr(num.length - digits);
    }
    return neg + num;
}

var list = [1, 2, 3];
console.log(list.sort(function() { return Math.random() - 0.5;}));
