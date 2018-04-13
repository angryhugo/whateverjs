var fs = require("fs");

var FILE_PATH = "./kq.txt";
var PATTERN = /\[.*\]/g;
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

		if(array){	
			for (var i = 0; i < array.length; i++) {
				str = array[i];
				startHour = str.substring(1, 3);
				startMin = str.substring(4, 6);
				endHour = str.substring(7, 9);
				endMin = str.substring(10, 12);
				TOTAL += (endHour - startHour) * 60 + (endMin - startMin);
			}
			var diff = TOTAL - DAY_MINS * array.length;
			if(diff > 0){
				console.log("+" + diff + "mins");
			} else {
				console.log( diff + "mins");
			}
		} else {
			console.log("invalid data");
		}

	}
});