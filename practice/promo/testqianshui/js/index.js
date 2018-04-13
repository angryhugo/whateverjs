/* jquery.focus.js START */
/*
 * File:        jquery.focus.js
 * Charset:     utf-8
 * Author:      em2046
 * Version:     0.0.0.1
 * Date:        2015-04-27
 * Description: jQuery焦点图插件
 */

(function($) {
    var defaults = {
        animateSpeed: 300,
        isAutoAnimate: true,
        autoSpeed: 5000,
        tabBox: undefined
    };

    $.focus = function(options) {
        var _options = $.extend(defaults, options);

        //鼠标悬浮时不自动跳转
        var IsAutoRun = true;
        var $focus = _options.focus;

        //焦点图外层元素
        var $imgs = _options.imgBox;

        //tab切换按钮外层元素
        var $tab= _options.tabBox;

        if ($tab !== undefined) {
		    //tab切换按钮
		    var $tablist = $tab.find("li");
        }

        //左移按钮
        var $left = _options.leftBtn;

        //右移按钮
        var $right = _options.rightBtn;

        //1.复制首位元素
        var $first = $imgs.find("li").first();
        var $last = $imgs.find("li").last();
        $imgs.append($first.clone());
        $imgs.prepend($last.clone());
        //复制后的焦点图元素
        var $list = $imgs.find("li");

        //2.计算宽度
        //单个宽度
        var single_width = $first.width();
        //焦点图数量，含复制的
        var size = $list.length;
        //总宽度，含复制的
        var width = single_width * size;
        //显示原第1个焦点图
        $imgs.css({
            "left": -single_width + "px",
            "width": width + "px"
        });

        //3.添加左右按钮事件
        $left.bind("click", function() {
            //结束未完成的动画
	    	$imgs.stop(true, true);
            var oldLeft = $imgs.position().left;
            var left = oldLeft + single_width;
            // if (left == 0)
            // {
            //     oldLeft = single_width - width;
            //     left = 2 * single_width - width;
            //     $imgs.css({
            //         "left": oldLeft + "px"
            //     });
            // }
            move(left);
        });
        $right.bind("click", function() {
            //结束未完成的动画
            $imgs.stop(true, true);
            var oldLeft = $imgs.position().left;
            var left = oldLeft - single_width;
            if (left == -width)
            {
                oldLeft = -single_width;
                left = -2 * single_width;
                $imgs.css({
                    "left": oldLeft + "px"
                });
            }
            move(left);
        });

        //4.添加tab事件
        if ($tab !== undefined) {
	        $tablist.bind("click", function() {
	            //结束未完成的动画
	            $imgs.stop(true, true);
	            var index = $tablist.index($(this));
	            move(-(index + 1) * single_width);
	        });
        }

        //5.自动跳转
        if(_options.isAutoAnimate){
            setInterval(function() {
                if(IsAutoRun){
                    $right.click();
                }
            }, _options.autoSpeed);
            $focus.hover(function() {
                IsAutoRun = false;
            }, function() {
                IsAutoRun = true;
            });
        }

        //公用移动函数
        function move(left)
        {
            $imgs.animate({
                "left":  left + "px"
            }, _options.animateSpeed);
        }
    };
})(jQuery);
/* jquery.focus.js END */


$(function(){
	focus
	$.focus({
		focus: $(".step1-right-focus"),
		imgBox: $(".step1-right-focus-imgs"),
		
		leftBtn: $(".step1-right-focus-left"),
		rightBtn: $(".step1-right-focus-right"),
		autoSpeed: 3000,
		isAutoAnimate: true
	});

	//slider
	var sliderActiveClass = "step-right-q-active";
    var $slide = $(".step-right-slide");
	var $slideTabs = $slide.find(".step-right-q");
    var $slideContents = $slide.find(".step-right-a");
    
    $slideContents.hide().eq(0).show();
	$slideTabs.on("click", function() {
        $slideTabs.not($(this)).removeClass(sliderActiveClass);
        $(this).addClass(sliderActiveClass);
        $slideContents.not($(this)).stop(true,true).slideUp();
        $(this).next().stop(true,true).slideDown();
    });

    //switch
    var switchActiveClass = "step-right-tab-btn-active";
    var $switch = $(".step-right-switch");
    var $switchTabs = $switch.find(".step-right-tab-btn");
    var $switchContents = $switch.find(".step-right-content li");
    $switchContents.hide().eq(0).show();

    $switchTabs.on("click", function(){
    	var index = $switchTabs.index($(this));
    	$switchContents.hide().eq(index).show();
    	$switchTabs.removeClass(switchActiveClass).eq(index).addClass(switchActiveClass);
    });


	var $popMask = $(".pop-mask");
	var $popAlert = $(".pop-alert");
	var $popAlertCloseBtn = $(".pop-alert-close-btn");

	$(".header-btn, .pop-right-btn, .step-left-btn-pop").on("click", function(){
		$popMask.show();
		$popAlert.show();
	});

	$popAlertCloseBtn.on("click", function() {
		$popMask.hide();
		$popAlert.hide();
	})
});