var add = function(a, b) {
    return a + b;
}

var array = [3, 4];

console.log(add.apply(null, array));
