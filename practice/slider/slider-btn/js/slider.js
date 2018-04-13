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
        var $prevBtn = _options.prevBtn;
        var $nextBtn = _options.nextBtn;

        var $picList = $picBox.find("li");

        var picAmount = $picList.length;
        var picWidth = $picList.outerWidth();

        var picBoxWidth = picAmount * picWidth;

        $picBox.css({
        	"width": picBoxWidth
        });

        $nextBtn.on("click", function(){
            $picBox.stop(true,true);
            var curLeft = $picBox.position().left;
            var left = (curLeft - picWidth) % picBoxWidth;
            move(left);
        });

        $prevBtn.on("click", function(){
            $picBox.stop(true,true);
            var curLeft = $picBox.position().left;
            var left = curLeft == 0 ? (picWidth - picBoxWidth) :(curLeft + picWidth);
            move(left);
        });

		//autoRun
        if(_options.isAutoRun){
        	var isAutoRun = _options.isAutoRun;
            setInterval(function() {
                if(isAutoRun){
					$nextBtn.click();
                }
            }, _options.autoSpeed);
            $sliderDiv.hover(function() {
                isAutoRun = false;
            }, function() {
                isAutoRun = true;
            });
        }

		function move(left) {
			$picBox.animate({
				"left": left
			}, _options.animateSpeed);
		}
    }

})(jQuery);