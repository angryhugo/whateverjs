// 箭头函数
var people0 = name => 'hello ' + name;
var people1 = (name, age) => { return 'hello ' + name + ' age: ' + age};
var people2 = (name, age) => { return {name,age}};

console.log(people0("who"))
console.log(people1("who",31))
console.log(people2("who",31))

function fun0(bool) {
	// var test;实际上变量提升
	if(bool) {
		// test = 'hello man'
	    var test = 'hello man'
	} else {
	    console.log(test)
	}
}

function fun1(bool) {
	if(bool) {
		// let的作用域是在它所在当前代码块，但不会被提升到当前函数的最顶部。
	    let test = 'hello man'
	} else {
		// 此处无法访问
	    console.log(test)
	}
}

fun0(false);//undefined
//fun1(false);//test is not defined

// 模板字符串
const name = 'lux'
console.log(`hello ${name}`) //hello lux

// 1.includes：判断是否包含然后直接返回布尔值
let str = 'hahay'
console.log(str.includes('y')) // true
// 2.repeat: 获取字符串重复n次
let s = 'he'
console.log(s.repeat(3)) // 'hehehe'
//如果你带入小数, Math.floor(num) 来处理

// 函数默认参数
function action(num = 200) {
    console.log(num)
}
action() //200
action(300) //300
