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


        var $sliderDiv = _options.sliderDiv;

        $sliderDiv.each(function(){ 
            var $this = $(this);
            
            var pre_index = 0;
            
            var $picBox = $this.find(_options.picBoxSelector);
            var $tabBox = $this.find(_options.tabBoxSelector);

            var $picList = $picBox.find("li");
            var picAmount = $picList.length;

            var $tabList = $tabBox.find("li");
            $tabList.eq(0).addClass("on");

            $tabList.hover(function(){
                pre_index = showPic($(this).index(),pre_index,$tabList,$picList);
            },function(){});

            //autoRun
            if(_options.isAutoRun){
                var isAutoRun = _options.isAutoRun;
                setInterval(function() {
                    if(isAutoRun){
                        var thisIndex= $tabBox.find("li.on").index();
                        if( thisIndex == picAmount-1){
                            pre_index = showPic(0,pre_index,$tabList,$picList);
                        } else {
                            pre_index = showPic(thisIndex + 1,pre_index,$tabList,$picList);
                        }
                    }
                }, _options.autoSpeed);
                $this.hover(function() {
                    isAutoRun = false;
                }, function() {
                    isAutoRun = true;
                });
            }
        }); 

        function showPic(index, pre_index, $tabList, $picList) {
            $tabList.removeClass("on").eq(index).addClass("on");
            $picList.stop(true,true).eq(pre_index).css("z-index","0").animate({opacity:"0"}, _options.animateSpeed);
            $picList.eq(index).css("z-index","1").animate({opacity:"1"}, _options.animateSpeed);
            // $picList.eq(index).addClass("active").siblings().removeClass("active");
            return index;
        }
    }

})(jQuery);