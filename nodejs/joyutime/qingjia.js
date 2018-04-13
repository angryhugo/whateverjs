

$(function(){ 
		

	$('body').append('<div class="winloading" style=" width:300px; padding:26px 0; line-height:30px !important; text-align:center; line-height:52px; font-size:14px; color:#666; background:#fff; border:#f60 solid 1px; z-index:999; position:fixed; top:40px; right:0;"><h3 style=" font-size:14px; color:#666; text-align:center; margin:0;">工时插件温馨提示</h3><b style="color:red;">注意：</b>员工所填报的请假流程不能跨月<br>（比如：员工11.20-11.30请假，<br>则需分11.20-11.25和11.26-11.30<br>两个EKP流程提报）；</div>');
	
	
	$(document).bind('click',function(){ 
		$('.winloading,.windowBg').remove();
	});
	
	$('.winloading').bind('click',function(e){ 
		e.stopPropagation();
	});
	
	
});