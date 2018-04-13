$(function(){
	$(".dot").hover(function(){
		$(".dot").removeClass("dot-current").eq($(this).index()).addClass("dot-current");
	},function(){});
});