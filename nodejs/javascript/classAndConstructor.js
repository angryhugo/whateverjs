// 构造函数
function Range(from, to) {
    this.from = from;
    this.to = to;
}
// 闭包写法(只能通过this.form()以及this.to()获取，并且无法修改)
// function Range(from, to) {
//     this.from = function{ return from;};
//     this.to = function{ return to;};
// }

// 重写了Range.prototype, 除非显示设置构造函数，否则Range类的实例不含有constructor属性
// Range.prototype = {
//     // constructor: Range,// 显示设置构造函数反向引用
//     includes: function(x) {
//         return this.from() <= x && x <= this.to();
//     },
//     foreach: function(f) {
//         for (var x = Math.ceil(this.from()); x <= this.to(); x++) {
//             f(x);
//         }
//     },
//     toString: function() {
//         return "(" + this.from() + "..." + this.to() + ")";
//     },
//     equals: function(that) {
// 	    if (that == null) return false;
// 	    if (that.constructor !== Range) return false;
// 	    return this.from() == that.from() && this.to() == that.to();
// 	}
// }

// 使用预定义的原型对象
Range.prototype.includes = function(x) {
    return this.from <= x && x <= this.to;
};

Range.prototype.foreach = function(f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) {
        f(x);
    }
};

Range.prototype.toString = function() {
    return "(" + this.from + "..." + this.to + ")";
};

Range.prototype.equals = function(that) {
    if (that == null) return false;
    if (that.constructor !== Range) return false;
    return this.from == that.from && this.to == that.to;
}


var range = new Range(1, 3);
var r = new Range(1, 3);
console.log(range.includes(2));
range.foreach(console.log);
console.log(range);
console.log(range.equals(r));
