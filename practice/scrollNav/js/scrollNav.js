/* jquery.scrollNav.js START */
/*
 * File:        jquery.scrollNav.js
 * Charset:     utf-8
 * Author:      yinhanchun
 * Version:     0.1
 * Date:        2015-09-06
 * Description: jQuery scrollNav
 */
(function($) {

    $.fn.scrollNav = function(options) {
        var defaults = {
            "className": "active"
        }

        var _options = $.extend({}, defaults, options);
        var offsetTopArr = [];

        var $this = $(this);
        var $links = $this.find("a[href*=#]");

        for (var i = 0; i < $links.length; i++) {
            var $link = $links.eq(i);
            var id = $link.attr("href");
            var linkObj = {};
            linkObj.index = i;
            try {
                linkObj.top = $(id).offset().top;
                offsetTopArr.push(linkObj);
            } catch (err) {
                console.log(id + " not found!");
            }
        }

        // 排序（考虑到可能不是顺序排列的）
        simpleSort(offsetTopArr);

        $(window).scroll(function() {
            var scrollTop = $(document).scrollTop();
            for (var i = 0; i < offsetTopArr.length; i++) {
                if (scrollTop >= offsetTopArr[i].top) {
                    // 最后一个元素没有i+1
                    if (i == offsetTopArr.length - 1) {
                        setActiveClassName(offsetTopArr[i].index);
                    } else if (scrollTop < offsetTopArr[i + 1].top) {
                        setActiveClassName(offsetTopArr[i].index);
                    }
                }
            }
        });

        function setActiveClassName(index) {
            $links.eq(index).addClass(_options.className).siblings().removeClass(_options.className);
        }

        function simpleSort(array) {
            for (var i = 0; i < array.length; i++) {
                for (var j = i + 1; j < array.length; j++) {
                    if (array[i].top > array[j].top) {
                        var tmp = array[i];
                        array[i] = array[j];
                        array[j] = tmp;
                    }
                }
            }
            return array;
        }

    }

})(jQuery);
