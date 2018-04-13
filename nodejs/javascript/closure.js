// bar() 依然持有对该作用域的引用，而这个引用就叫作闭包。
function foo() {
    var a = 2;

    function bar() {
        console.log(a);
    }
    return bar;
}
var baz = foo();
baz(); // 2

for (var i = 1; i <= 3; i++) {
    (function(j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })(i);
}

//模块
function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another.join(" ! "));
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}
var fooo = CoolModule();
fooo.doSomething(); // cool
fooo.doAnother(); // 1 ! 2 ! 3

// 上一个示例代码中有一个叫作CoolModule() 的独立的模块创建器，可以被调用任意多次，
// 每次调用都会创建一个新的模块实例。当只需要一个实例时，可以对这个模式进行简单的
// 改进来实现单例模式：
// var foooo = (function CoolModule() {
//     var something = "cool";
//     var another = [1, 2, 3];

//     function doSomething() {
//         console.log(something);
//     }

//     function doAnother() {
//         console.log(another.join(" ! "));
//     }
//     return {
//         doSomething: doSomething,
//         doAnother: doAnother
//     };
// })();
// foooo.doSomething(); // cool
// foooo.doAnother(); // 1 ! 2 ! 3
