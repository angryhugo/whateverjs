$.fn.myPlugin = function(options){
	var defaults = {
		'color':'#920711',
		'fontSize':"12px"
	}

	var settings = $.extend({}, defaults, options);
	// var settings = $.extend(defaults, options);//会覆盖掉defaults的值

	console.log(settings);

	//this指的是用jQuery选中的元素
	this.css({
		'color': settings.color,
		'font-size': settings.fontSize
	});

	this.each(function(){
		//对每个元素进行操作
        $(this).append(' ' + $(this).attr('href'));
	});
}