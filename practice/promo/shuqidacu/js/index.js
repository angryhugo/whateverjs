$(function(){
	var $p1PopBtn = $(".part1 .pop-btn");
	var $p1PopDiv = $(".part1 .pop-div");

	$p1PopBtn.on("click", function(){
		$p1PopDiv.show();
	});

	var $msPopBtn = $(".miaosha .pop-btn");
	var $msPopDiv = $(".miaosha .pop-div");

	$msPopBtn.on("click", function(){
		$msPopDiv.show();
	});

	$(".pop-close").on("click", function(){
		$(this).parent().parent().hide();
	});

	var SECTION_NAME = [".cj-products", ".ms-products"];

	function showItems(index){
		for (var i = 0; i <SECTION_NAME.length; i++) {
			$(SECTION_NAME[i]).find(".single-product-list").hide().eq(index).show();
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
		var wH = $('.chujing').offset().top;
		var wTop = $(document).scrollTop();
		if ( wTop >= wH ){
			// $('.navbar').css({'position':'fixed','top':'0','left':'0','right':'0','margin':'0 auto'})
			$('.navbar').css({'position':'fixed'});
		} else {
			$('.navbar').css({'position':'relative'});
		}
	})

	var $msProducts = $(".ms-products");

	$msProducts.on("mouseover", ".product-item", function(){
		$(this).find(".ms-pop").show();
	});
	
	$msProducts.on("mouseout", ".product-item", function(){
		$(this).find(".ms-pop").hide();
	});

	var $promotionFocusList = $(".pf-imgs");

	$promotionFocusList.on("mouseover", "li", function(){
		$(this).find(".pf-i-cover").hide();
	});
	
	$promotionFocusList.on("mouseout", "li", function(){
		$(this).find(".pf-i-cover").show();
	});


	//焦点图
	var $focusImgs = $(".pf-imgs");
	var $focusList = $focusImgs.find("li");
	var $leftBtn = $(".pf-left");
	var $rightBtn = $(".pf-right");

	var SINGLE_WIDTH = 148;
	var MAX_SHOWN_AMOUNT = 5;

	var width = SINGLE_WIDTH * $focusList.length;

	$focusImgs.css({
		"width": width + "px",
		"left": 0
	});

	$rightBtn.on("click", function(){
		$focusImgs.stop(true, true);
		var oldLeft = $focusImgs.position().left;
		if(oldLeft != -(width - MAX_SHOWN_AMOUNT * SINGLE_WIDTH)){
			focusMove(oldLeft - SINGLE_WIDTH);
		}
	});

	$leftBtn.on("click", function(){
		$focusImgs.stop(true, true);
		var oldLeft = $focusImgs.position().left;
		if(oldLeft != 0){
			focusMove(oldLeft + SINGLE_WIDTH);
		}
	});

	function focusMove(left){
        $focusImgs.animate({
            "left":  left + "px"
        }, 300);
    }


    //switch
    var $switchTabs = $(".wb-tab-list li");
    var $switchContents = $(".signle-wb-list");
    $switchContents.eq(0).show();

    $switchTabs.on("click", function(){
    	var index = $switchTabs.index($(this));
    	$switchContents.hide().eq(index).show();
    	$switchTabs.removeClass("active").eq(index).addClass("active");
    });

});