// JavaScript Document

function htmldom(url,fun){
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
		// innerText不会给攻击者注入HTML元素的机会.
		fun(xhr.responseText);
	  }
	}
	xhr.send();
}


function dashangdom(fun){
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'http://www.baoqianduan.com/demo/joyutimephp/dashang.php?&callback=?', true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
		// innerText不会给攻击者注入HTML元素的机会.
		fun(xhr.responseText);
	  }
	}
	xhr.send();
}