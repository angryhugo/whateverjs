var pattern = /you/g;

var s = "i love you, do you love me?";
var ans;

ans = pattern.exec(s);
console.log(ans);
console.log(ans.length);
console.log(ans.index);
console.log(ans.input);

console.log(pattern.test(s));

console.log(s.match(pattern));

// do {
// 	ans = pattern.exec(s);
// 	console.log(ans);
// 	console.log(pattern.lastIndex);
// } while (ans !== null);