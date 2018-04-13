/* jquery.slider.js START */
/*
 * File:        jquery.slider.js
 * Charset:     utf-8
 * Author:      yinhanchun
 * Version:     0.1
 * Date:        2015-07-11
 * Description: jQuery slider
 */
(function($){
    var defaults = {
        animateSpeed: 800,
        isAutoRun : true,
        autoSpeed: 5000
    };
    //$picBox, $tabBox
    $.slider = function(options){
        var _options = $.extend(defaults, options);

        var PRE_INDEX = 0;

        var $sliderDiv = _options.sliderDiv;
        var $picBox = _options.picBox;
        var $tabBox = _options.tabBox;

        var $picList = $picBox.find("li");
        var picAmount = $picList.length;

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
            $picList.stop(true,true).eq(PRE_INDEX).css("z-index","0").animate({opacity:"0"}, _options.animateSpeed);
            $picList.eq(index).css("z-index","1").animate({opacity:"1"}, _options.animateSpeed);
            PRE_INDEX = index;
        }
    }

})(jQuery);