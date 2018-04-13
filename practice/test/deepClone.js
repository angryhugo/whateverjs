function type(obj) {
	var toString = Object.prototype.toString;
	var map = {
	    '[object Boolean]'  : 'boolean',
	    '[object Number]'   : 'number',
	    '[object String]'   : 'string',
	    '[object Function]' : 'function',
	    '[object Array]'    : 'array',
	    '[object Date]'     : 'date',
	    '[object RegExp]'   : 'regExp',
	    '[object Undefined]': 'undefined',
	    '[object Null]'     : 'null',
	    '[object Object]'   : 'object'
	};
	return map[toString.call(obj)];
}

function deepClone(obj) {
	var objType = type(obj);
	var resObj;
	if(obj==='array') {
		resObj = [];
		for(var i =0;i<obj.length;i++){
			resObj.push(deepClone(obj[i]));
		}
	} else if(obj==='object'){
		resObj = {};
		for(var i in obj) {
			resObj[i] = deepClone(obj[i]);
		}
	}else {
		resObj = obj
	}
	return resObj;
}

console.log(1)
console.log("string")
console.log([1,2,3])
console.log({a:1,b:2})
console.log({a:1,b:[1,2,3]})
console.log([{a:1,b:[1,2,3]},1,2])
