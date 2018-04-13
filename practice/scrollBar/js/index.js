$(function() {
	var $window = $(window);
    var $document = $(document);
	var $title = $(".title");
	var $box = $(".box");
    var isHold = false;
    var $main = $box;
    var $content = $box.find(".content");
    var $scrollBar = $box.find(".scroll-bar");
    var mainHeight;
    var allHeight;
    var diffHeight;
    var activeHeight;
    var oldY;
    var proportion;

	var windowHeight = $window.height();
	var otherHeight = $title.outerHeight(true);
	$box.height(windowHeight - otherHeight);
    showScrollBar();

	$window.bind("resize", windowResize);
    function windowResize() {
        var otherHeight = $title.outerHeight(true);
        var windowHeight = $window.height();
        $box.height(windowHeight - otherHeight);
        showScrollBar();
    }


    function documentMousedown(event) {
        $target = $(event.target);
        if (!$target.hasClass("scroll-bar")) {
            return true;
        }
        isHold = true;

        oldY = event.pageY;

        //ff, webkit
        $box.addClass("cant-select");
        //ie
        $box.get(0).onselectstart = function () {
            return false;
        };
    }

    function documentMouseup() {
        isHold = false;

        $box.removeClass("cant-select");
        $box.get(0).onselectstart = function () {

        };
    }

    function documentMousemove(event) {
        if (!isHold) {
            return true;
        }

        //移动滚动条
        var y = event.pageY;

        var newBarTop = $scrollBar.position().top + y - oldY;

        roll(newBarTop);
        oldY = y;
    }

    function roll(newTop) {
        if (newTop < 0) {
            newTop = 0;
        }
        if (newTop > activeHeight) {
            newTop = activeHeight;
        }
        $scrollBar.css({
            "top": newTop
        });

        //滚动内容
        var contentNewTop = (-newTop * proportion);
        $content.css({
            "top": contentNewTop
        })
    }

	
    //滚动条
    function showScrollBar() {

        mainHeight = $main.outerHeight();
        allHeight = $content.outerHeight();
        diffHeight = allHeight - mainHeight;

        $scrollBar.css({
            "top": 0
        });
        $content.css({
            "top": 0
        });

        var scrollBarHeight = mainHeight - (Math.round(diffHeight / allHeight * mainHeight));
        $scrollBar.show();
        if (scrollBarHeight < 50) {
            scrollBarHeight = 50;
        }
        if (scrollBarHeight > mainHeight) {
            scrollBarHeight = mainHeight;
            $scrollBar.hide();

        }
        $scrollBar.css("height", scrollBarHeight);

        activeHeight = mainHeight - scrollBarHeight;
        oldY = 0;

        //滚动条可以移动的距离与内容可以滚动的距离的比例
        proportion = (diffHeight) / (activeHeight );

        $scrollBar.unbind("mousedown", documentMousedown).bind("mousedown", documentMousedown);
        $document.unbind("mouseup", documentMouseup).bind("mouseup", documentMouseup);
        $document.unbind("mousemove", documentMousemove).bind("mousemove", documentMousemove);

        //鼠标滚动事件
        $box.get(0).onwheel = wheelHandle;
        $box.get(0).onmousewheel = wheelHandle;
        function wheelHandle(event) {
            var e = event || window.event;
            var deltaY = -e.deltaY
                || e.wheelDeltaY
                || (e.wheelDeltaY === undefined) && e.wheelDelta
                || -e.delta
                || 0;
            if (deltaY > 0) {
                newBarTop = $scrollBar.position().top - 20;
                roll(newBarTop)
            } else if (deltaY < 0) {
                newBarTop = $scrollBar.position().top + 20;
                roll(newBarTop)
            }
            return false;
        }
    }
});
