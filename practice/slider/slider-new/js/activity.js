/* jquery.slider.js START */
(function($) {
    var defaults = {
        animateSpeed: 800,
        isAutoRun: true,
        autoSpeed: 5000
    };
    $.slider = function(options) {
        var _options = $.extend(defaults, options);
        var $sliderDiv = _options.sliderDiv;

        $sliderDiv.each(function() {
            var $this = $(this);
            var picAmount = $this.find(_options.picBoxSelector).find("li").length;

            init($this);

            if(picAmount>1) {
            	bindEvent($this);
            }

        });

        function init($slider) {
            var $picList = $slider.find(_options.picBoxSelector).find("li");
            $picList.css({
                "z-index": "0",
                "opacity": "0"
            }).eq(0).css({
                "z-index": "1",
                "opacity": "1"
            });
        }

        function bindEvent($slider) {
            var preIndex = 0;
            var $picList = $slider.find(_options.picBoxSelector).find("li");
            var $tabBox = $slider.find(_options.tabBoxSelector);
            var $leftBtn = $slider.find(_options.leftBtnSelector);
            var $rightBtn = $slider.find(_options.rightBtnSelector);
            var $btn = $slider.find(_options.btnSelector);
            var picAmount = $picList.length;
            
            // 填充tab
            var $tabList = addTabs();

            // tab切换
            tabEvent();

            //自动切换
            if (_options.isAutoRun) {
                autoRunEvent(true);
            }

            // 左右按钮切换
            if ($btn.length) {
                btnEvent();
            }
            console.log(picAmount)

            function addTabs() {
                for (var i = 0; i < picAmount; i++) {
                    $tabBox.append("<li></li>");
                }
                var $tabList = $tabBox.find("li");
                $tabList.eq(0).addClass("active");
                return $tabList;
            }

            function tabEvent() {
                $tabList.hover(function() {
                    preIndex = showPic($(this).index(), preIndex, $tabList, $picList);
                }, function() {});
            }

            function btnEvent(){
                $slider.hover(function() {
                    $btn.show();
                }, function() {
                    $btn.hide();
                });

                $leftBtn.on("click", function() {
                    preIndex = showPic((preIndex + picAmount - 1) % picAmount, preIndex, $tabList, $picList);
                });

                $rightBtn.on("click", function() {
                    preIndex = showPic((preIndex + 1) % picAmount, preIndex, $tabList, $picList);
                });
            }

            function autoRunEvent(isAutoRun) {
                setInterval(function() {
                    if (isAutoRun) {
                        preIndex = showPic((preIndex + 1) % picAmount, preIndex, $tabList, $picList);
                    }
                }, _options.autoSpeed);
                $slider.hover(function() {
                    isAutoRun = false;
                }, function() {
                    isAutoRun = true;
                });
            }
        }

        function showPic(index, preIndex, $tabList, $picList) {
            $tabList.removeClass("active").eq(index).addClass("active");
            $picList.stop(true, true).eq(preIndex).css("z-index", "0").animate({
                opacity: "0"
            }, _options.animateSpeed);
            $picList.eq(index).css("z-index", "1").animate({
                opacity: "1"
            }, _options.animateSpeed);
            return index;
        }
    }
})(jQuery);
/* jquery.slider.js END */


/*
 * File:         index.js
 * Created:      2016-05-19
 * Last Updated: 2016-05-24
 * Author:       印韩春
 * Description:  驴悦-活动页
 */
$(function() {
    // 焦点图
    $.slider({
        sliderDiv: $(".slider"),
        picBoxSelector: ".slider-pic-box",
        tabBoxSelector: ".slider-tab-box",
        btnSelector: ".slider-btn",
        leftBtnSelector: ".slider-btn-left",
        rightBtnSelector: ".slider-btn-right",
    });
});
