function mul(x) {
	var ret = function (y) {
		return mul(x*y);
	}
	ret.valueOf = function(){
		return x
	}
	return ret;
}

console.log(mul(2)(3)+0)
