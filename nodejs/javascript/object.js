// 简单基本类型（ string、 boolean、 number、 null 和 undefined） + 对象object（数组也是对象的一种类型）
console.log(typeof(null)); //object (null 有时会被当作一种对象类型， 但是这其实只是语言本身的一个 bug)

var strPrimitive1 = "I am a string";
console.log(typeof strPrimitive1); // "string"
console.log(strPrimitive1 instanceof String); // false

var strPrimitive2 = new String("I am a string");
console.log(typeof strPrimitive2); // "object"
console.log(strPrimitive2 instanceof String); // true

var myArray = ["foo", 42, "bar"];
myArray["b"] = "baz"; //不增加数组的长度,当成属性处理（键/值对）
console.log(myArray.length); // 3
console.log(myArray["b"]); // "baz"

myArray["3"] = "baz"; //会把"3"当成数字下标处理（下标/值对）
console.log(myArray.length); // 4
console.log(myArray[3]); // "baz"

// 复制对象
var someObj = {
    a: 2,
    b: 3
};

var newObj0 = someObj; //引用，浅复制
var newObj1 = JSON.parse(JSON.stringify(someObj));

newObj1.a = 4;

console.log(newObj1.a); //4
console.log(someObj.a); //2

newObj0.a = 4;
console.log(someObj.a); //4

var myObject = {};
Object.defineProperty(myObject, "a", {
    value: 2,
    writable: false,
    configurable: true,
    enumerable: true // enumerable决定属性是否会出现在 for..in 循环中
});
console.log(Object.getOwnPropertyDescriptor(myObject, "a")); //属性描述符
console.log(myObject.propertyIsEnumerable("a")); // true

// Object.keys(..) 会返回一个数组， 包含所有可枚举属性， Object.getOwnPropertyNames(..)会返回一个数组， 包含所有属性， 无论它们是否可枚举。
myObject.a = 3; // 严格模式下报错
console.log(myObject.a); // 2

// 不变性
Object.preventExtensions(myObject); //禁止一个对象添加新属性并且保留已有属性
// 结合 writable:false 和 configurable:false 就可以创建一个真正的常量属性（ 不可修改、重定义或者删除）
var myObject1 = {};
Object.defineProperty(myObject1, "FAVORITE_NUMBER", {
    value: 42,
    writable: false,
    configurable: false,
    enumerable: true
});

myObject1.FAVORITE_NUMBER = 43;
delete myObject1.FAVORITE_NUMBER;
console.log(myObject1); //42

// Object.seal(..) 会创建一个“ 密封” 的对象， 这个方法实际上会在一个现有对象上调用
// Object.preventExtensions(..) 并把所有现有属性标记为 configurable:false。

// Object.freeze(..) 会创建一个冻结对象， 这个方法实际上会在一个现有对象上调用
// Object.seal(..) 并把所有“ 数据访问” 属性标记为 writable:false， 这样就无法修改它们的值。

var myObject2 = {
    // 定义一个 getter
    get a() {
        return this._a_;
    },
    // 定义一个 setter
    set a(val) {
        this._a_ = val * 2;
    }
};
myObject2.a = 3;
console.log(myObject2.a); // 6
console.log(myObject2._a_); // 6
console.log(myObject2); // {a:[GETTER/SETTER], _a_:6}

// 存在性 1.in 操作符会检查属性是否在对象及其 [[Prototype]] 原型链中。 相比之下，hasOwnProperty(..) 只会检查属性是否在 myObject 对象中， 不会检查 [[Prototype]] 链。
var myObject3 = {
    a: 2
};
console.log("a" in myObject3); // true
console.log("b" in myObject3); // false
myObject3.hasOwnProperty("a"); // true
myObject3.hasOwnProperty("b"); // false

console.log(4 in [2, 4, 6]); //false, in实际上检查的是某个属性名是否存在，因为[2, 4, 6]这个数组中包含的属性名是0、1、2，没有4。



// 遍历
var myArray = [1, 2, 3];
var it = myArray[Symbol.iterator]();
console.log(it.next()); // { value:1, done:false }
console.log(it.next()); // { value:2, done:false }
console.log(it.next()); // { value:3, done:false }
console.log(it.next()); // { done:true }
for (var v of myArray) {
	console.log( v );
}
