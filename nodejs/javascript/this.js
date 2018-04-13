function foo(num) {
    console.log("foo: " + num);
    // 记录foo 被调用的次数
    this.count++;
}
foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        //直接调用foo()this无法指向函数对象foo本身
        // foo(i);
        // 使用call(..) 可以确保this 指向函数对象foo本身
        foo.call( foo , i );
    }
}
// foo 被调用了多少次？
console.log(foo.count); // foo(i)-> 0 -- WTF?; foo.call( foo, i )-> 4
