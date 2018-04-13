// 惰性加载实现单例模式
var dateTimeHelper = (function() {
    var instance = null;
    function init() {
        var date = new Date();
        return {
            now: function() {
                return date;
            }
        }
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

console.log(dateTimeHelper.getInstance().now());

setTimeout(function(){
	console.log(dateTimeHelper.getInstance().now());
}, 2000);
