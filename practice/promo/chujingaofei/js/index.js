$(function(){
	var _sectionClassName = [".aozhou", ".xinxilan", ".feizhou"];

	function showItems(index){
		for (var i = 0; i <_sectionClassName.length; i++) {
			$(_sectionClassName[i]+" .product-tip").find("li").hide().eq(index).show();
			$(_sectionClassName[i]).find(".single-product-list").hide().eq(index).show();
		};
	};

	showItems(0);

	var $navList = $(".nav-list").find("li");
	
	$navList.hover(function(){
		$navList.removeClass("active");
		$(this).addClass("active");
		showItems($(this).index());
	},function(){});

	$(window).scroll(function(){
		var wH = $('.content').offset().top;
		var wTop = $(document).scrollTop();
		if ( wTop >= wH ){
			$('.nav').css({'position':'fixed','top':'0','left':'0','right':'0','margin':'0 auto','z-index':'10'})
		} else {
			$('.nav').css({'position':'static'});
		}
	})
});