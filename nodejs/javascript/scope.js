var a = 1;
var b = 2;
var c = 3;
console.log(a, b, c);
/*
 *欺骗词法
 *"use strict" 完全禁止with, 部分禁止eval()
 */
//1.eval()
function foo(str, a) {
    // "use strict"; //1, 2
    eval(str); // 欺骗！
    console.log(a, b);
}
var b = 2;
foo("var b = 3;", 1); // 1, 3
//2.with
var obj = {
    a: 1,
    b: 2,
    c: 3
};
// 单调乏味的重复"obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;
// 简单的快捷方式
with(obj) {
    a = 3;
    b = 4;
    c = 5;
    d = 6; //会赋值到全局作用域
}
console.log(obj);
console.log(d);

//函数声明
function foo() { // <-- 添加这一行
    var a = 3;
    console.log(a); // 3
} // <-- 以及这一行
//函数表达式
(function foo() { // <-- 添加这一行
    var a = 3;
    console.log(a); // 3
})(); // <-- 以及这一行（末尾加了()立即执行）IIFE，代表立即执行函数表达式（Immediately Invoked Function Expression）

function ad(){
    for(var i=0; i<5; i++){ //i会暴露到ad中
        console.log(i*2);
    }
    console.log(i);
}

ad();

// 提升:变量声明
// 包括变量和函数在内的所有声明都会在任何代码被执行前首先被处理。
// 当你看到var a = 2; 时，可能会认为这是一个声明。但JavaScript 实际上会将其看成两个声明：var a; 和a = 2;。
// 第一个定义声明是在编译阶段进行的。第二个赋值声明会被留在原地等待执行阶段。
// 这个过程就好像变量和函数声明从它们在代码中出现的位置被“移动”到了最上面。这个过程就叫作提升。(只有声明本身会被提升，而赋值或其他运行逻辑会留在原地。此外，函数会首先被提升，然后才是变量)
console.log(a4);
var a4 = 2;//undefined

a6 = 2;
console.log(a6);//2
var a6;