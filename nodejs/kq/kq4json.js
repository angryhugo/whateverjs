var array = [{"id":"","title":"09:28~18:28","hasSettedRemind":"false","allDay":true,"start":"2016-03-18","type":"","isRecurrence":false},{"id":"","title":"09:27~18:27","hasSettedRemind":"false","allDay":true,"start":"2016-03-03","type":"","isRecurrence":false},{"id":"","title":"09:28~18:32","hasSettedRemind":"false","allDay":true,"start":"2016-03-04","type":"","isRecurrence":false},{"id":"","title":"09:26~18:13","hasSettedRemind":"false","allDay":true,"start":"2016-03-25","type":"","isRecurrence":false},{"id":"","title":"09:28~19:26","hasSettedRemind":"false","allDay":true,"start":"2016-03-22","type":"","isRecurrence":false},{"id":"","title":"09:24~18:37","hasSettedRemind":"false","allDay":true,"start":"2016-03-16","type":"","isRecurrence":false},{"id":"","title":"09:34~18:38","hasSettedRemind":"false","allDay":true,"start":"2016-03-01","type":"","isRecurrence":false},{"id":"","title":"09:24~18:29","hasSettedRemind":"false","allDay":true,"start":"2016-03-02","type":"","isRecurrence":false},{"id":"","title":"09:29~18:30","hasSettedRemind":"false","allDay":true,"start":"2016-03-09","type":"","isRecurrence":false},{"id":"","title":"09:24~18:33","hasSettedRemind":"false","allDay":true,"start":"2016-03-10","type":"","isRecurrence":false},{"id":"","title":"09:24~18:31","hasSettedRemind":"false","allDay":true,"start":"2016-03-11","type":"","isRecurrence":false},{"id":"","title":"09:29~18:32","hasSettedRemind":"false","allDay":true,"start":"2016-03-07","type":"","isRecurrence":false},{"id":"","title":"09:28~18:41","hasSettedRemind":"false","allDay":true,"start":"2016-02-29","type":"","isRecurrence":false},{"id":"","title":"09:24~18:48","hasSettedRemind":"false","allDay":true,"start":"2016-03-21","type":"","isRecurrence":false},{"id":"","title":"09:12~20:14","hasSettedRemind":"false","allDay":true,"start":"2016-03-23","type":"","isRecurrence":false},{"id":"","title":"09:18~18:43","hasSettedRemind":"false","allDay":true,"start":"2016-02-26","type":"","isRecurrence":false},{"id":"","title":"09:29~12:31","hasSettedRemind":"false","allDay":true,"start":"2016-03-08","type":"","isRecurrence":false},{"id":"","title":"09:27~18:35","hasSettedRemind":"false","allDay":true,"start":"2016-03-14","type":"","isRecurrence":false},{"id":"","title":"09:18~18:36","hasSettedRemind":"false","allDay":true,"start":"2016-03-15","type":"","isRecurrence":false},{"id":"","title":"09:18~18:26","hasSettedRemind":"false","allDay":true,"start":"2016-03-24","type":"","isRecurrence":false},{"id":"","title":"09:28~20:12","hasSettedRemind":"false","allDay":true,"start":"2016-03-17","type":"","isRecurrence":false}];
var TOTAL = 0;
var str = "";
var startHour = "";
var startMin = "";
var endHour = "";
var endMin = "";

for (var i = 0; i < array.length; i++) {
	str = array[i].title;
	startHour = str.substring(0, 2);
	startMin = str.substring(3, 5);
	endHour = str.substring(6, 8);
	endMin = str.substring(9, 11);
	var thisDay = (endHour - startHour) * 60 + (endMin - startMin);
	TOTAL += (endHour - startHour) * 60 + (endMin - startMin);
}

console.log("应出勤："+array.length*8);
console.log("实出勤："+( TOTAL/60- array.length*1 ));
