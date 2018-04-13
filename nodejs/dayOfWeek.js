/**
 * getDayOfWeek 返回星期
 * @param {string} date 格式:"YYYY-MM-DD"
 */
function getDayOfWeek(date){
    var nowDay;
    if (date) {
        var dayArray = date.split("-");
        nowDay = new Date(parseInt(dayArray[0], 10), parseInt(dayArray[1], 10) - 1, parseInt(dayArray[2], 10));
    } else {
        nowDay = new Date();
    }
    var day = nowDay.getDay();
    var dayArray = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];

    return dayArray[day];
}

console.log(getDayOfWeek("2016-02-26"));