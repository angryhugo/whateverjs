var URL = "oa.joyu.com/index.php?s=/Person/my_attend/act/get_calendar&year=2015&month=10";

var fs = require("fs");

var FILE_PATH = "./kq.html";
var PATTERN = /\>\[.*\]\</g;
var TOTAL = 0;
var DAY_MINS = 540;

fs.readFile(FILE_PATH, function (err, data) {
	if (err) {
		console.log(err);
	} else {
		var dataStr = data.toString();
		var array = dataStr.match(PATTERN);
		var str = "";
		var startHour = "";
		var startMin = "";
		var endHour = "";
		var endMin = "";

		for (var i = 0; i < array.length; i++) {
			str = array[i];
			startHour = str.substring(2, 4);
			startMin = str.substring(5, 7);
			endHour = str.substring(22, 24);
			endMin = str.substring(25, 27);
			TOTAL += (endHour - startHour) * 60 + (endMin - startMin);
		}

		console.log(TOTAL - DAY_MINS * array.length);
	}
});