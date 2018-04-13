function foo() {
    console.log(this.a);
}

//显式绑定
var obj = {
    a: 2
};
foo.call(obj);

//隐式绑定
var obj1 = {
    a: 2,
    foo: foo
};
obj1.foo(); // 2

// new绑定
function fooo(a) {
    this.a = a;
}
var bar = new fooo(2);
console.log(bar.a); // 2


function foo1(something) {
    console.log(this.a, something);
    return this.a + something;
}
var obj = {
    a: 2
};
var barr = function() {
    return foo1.apply(obj, arguments);
};
//var bar = foo1.bind(obj);//硬绑定
var b = barr(3); // 2 3
console.log(b); // 5

// 优先级：new>隐式，显式>隐式


// 这两种方法都需要传入一个参数当作 this 的绑定对象。 如果函数并不关心 this 的话， 你
// 仍然需要传入一个占位值， 这时 null 可能是一个不错的选择， 就像代码所示的那样。
function foo2(a,b) {
	console.log( "a:" + a + ", b:" + b );
} // 把数组“ 展开” 成参数
foo2.apply( null, [2, 3] ); // a:2, b:3
// 使用 bind(..) 进行柯里化
var barrr = foo2.bind(null, 2);
barrr(3); // a:2, b:3

