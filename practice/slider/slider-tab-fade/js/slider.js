(function($){
    var defaults = {
        animateSpeed: 500,
        isAutoRun : true,
        autoSpeed: 3000
    };
    //$picBox, $tabBox
    $.slider = function(options){
    	// 用options覆盖了defaults的值，并把值赋给了_options
        var _options = $.extend(defaults, options);

        var $sliderDiv = _options.sliderDiv;
        var $picBox = _options.picBox;
        var $tabBox = _options.tabBox;
        // var $prevBtn = _options.prevBtn;
        // var $nextBtn = _options.nextBtn;

        var $picList = $picBox.find("li");
        var picAmount = $picList.length;

		// for ( var i = 0; i < picAmount; i++) {
		// 	if (i == 0) {
		// 		$tabBox.append('<li class="on">'+ i +'</li>');
		// 	} else {
		// 		$tabBox.append('<li>'+ i +'</li>');
		// 	}
		// }

        var $tabList = $tabBox.find("li");
        $tabList.eq(0).addClass("on");

		$tabList.hover(function(){
			showPic($(this).index());
		},function(){});

		//autoRun
        if(_options.isAutoRun){
        	var isAutoRun = _options.isAutoRun;
            setInterval(function() {
                if(isAutoRun){
					var thisIndex= $tabBox.find("li.on").index();
					if( thisIndex == picAmount-1){
						showPic(0);
                    } else {
						showPic(thisIndex + 1);
                    }
                }
            }, _options.autoSpeed);
            $sliderDiv.hover(function() {
                isAutoRun = false;
            }, function() {
                isAutoRun = true;
            });
        }

        function showPic(index) {
        	$tabList.removeClass("on").eq(index).addClass("on");
            $picList.hide().eq(index).animate({opacity:"show"},600);
        }
    }

})(jQuery);