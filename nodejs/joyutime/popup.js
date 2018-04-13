// JavaScript Document

var btn1 = document.getElementById('goekp');
var btn2 = document.getElementById('mytime');
var btn3 = document.getElementById('gongzi');
var btn4 = document.getElementById('liucheng');
var huiyi = document.getElementById('huiyi');
var newbb = document.getElementById('newbb');
var daka = document.getElementById('daka');
var qingjia = document.getElementById('qingjia');
var jiaban = document.getElementById('jiaban');
var guanwang = document.getElementById('guanwang');





btn1.addEventListener('click', function () { 
	window.open('http://ekp.joyu.com/sys/portal/page.jsp');
}); 



btn2.addEventListener('click', function () { 

	window.open('http://ekp.joyu.com/km/review/calendar.jsp');
                
}); 

btn3.addEventListener('click', function () { 

	window.open('http://ekp.joyu.com/sys/person/setting.do?fdId=1511979763988c05c73c64d436383f7c');
                
}); 

btn4.addEventListener('click', function () { 

	window.open('http://ekp.joyu.com/km/review/index.jsp');
                
}); 

huiyi.addEventListener('click', function () { 

	window.open('http://ekp.joyu.com/km/meeting/km_meeting_main/kmMeetingMain.do?method=add&fdTemplateId=14d32bd172d7f720952a6414d55a1173');
                
}); 



newbb.addEventListener('click', function () { 

	window.open('http://www.baoqianduan.com/demo/joyutimephp/joyutime.crx');
                
}); 

guanwang.addEventListener('click', function () { 

	window.open('http://www.lvmama.com/zt/qianduan/joyutime/');
                
}); 


daka.addEventListener('click', function () { 

	window.open('http://ekp.joyu.com/km/review/km_review_main/kmReviewMain.do?method=add&fdTemplateId=14e6bb51ced6e5f176e610b486abf515&fdTemplateName=%E8%A1%A5%E5%85%85%E6%89%93%E5%8D%A1%E6%B5%81%E7%A8%8B&fdWorkId=&fdPhaseId=&fdModelId=&fdModelName=');
                
}); 

qingjia.addEventListener('click', function () { 

	window.open('http://ekp.joyu.com/km/review/km_review_main/kmReviewMain.do?method=add&fdTemplateId=15016fdd0eeee65c34a33894bde9378b&fdTemplateName=%E8%AF%B7%E5%81%87%E5%AE%A1%E6%89%B9%E6%B5%81%E7%A8%8B&fdWorkId=&fdPhaseId=&fdModelId=&fdModelName=');
                
}); 

jiaban.addEventListener('click', function () { 

	window.open('http://ekp.joyu.com/km/review/km_review_main/kmReviewMain.do?method=add&fdTemplateId=15016f7b874e89dad452ecb4b04a967d&fdTemplateName=%E5%8A%A0%E7%8F%AD%E7%94%B3%E8%AF%B7%E6%B5%81%E7%A8%8B&fdWorkId=&fdPhaseId=&fdModelId=&fdModelName=');
                
}); 

var das = true;
var dashang = document.getElementById('dashang');
var myewm = document.getElementById('myewm');

function dasfn(){
	if(das){
		myewm.style.display ="block";
		das = false;
	}else{
		myewm.style.display ="none";
		das = true;
	}
}


dashang.addEventListener('click', function () { 
	dasfn();         
}); 

$('#myewm').click(function(){ 
	dasfn();
});

$('#pay_tab li').hover(function(){ 
	var num = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$('#pay_list li').eq(num).show().siblings().hide();
}).click(function(e){ 
	e.stopPropagation();
});




var bgPage = chrome.extension.getBackgroundPage();

bgPage.htmldom('http://www.baoqianduan.com/demo/joyutimephp/joyutime.php?&callback=?',function(data){
	//if(data!=oldbb.innerHTML){oldbb.innerHTML.test(data)
	var odldata = new RegExp(oldbb.innerHTML);
	if(odldata.test(data)){
		newbb.innerHTML = oldbb.innerHTML;
	}else{
		newbb.style.color = '#f00';
		newbb.innerHTML = data;
	}
});


bgPage.dashangdom(function(data){
	
	//var newdata = '"'+data.replace(/\s/g,"")+'"';
	//console.log(data);
	//console.log(paydata[0].name);
	//var paydata = eval('('+data+')'); 
	$('#paylist').html(data);
	//console.log(paydata[0].name)
});