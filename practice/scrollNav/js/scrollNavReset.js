/* jquery.scrollNav.js START */
/*
 * File:        jquery.scrollNav.js
 * Charset:     utf-8
 * Author:      yinhanchun
 * Version:     0.1
 * Date:        2015-09-29
 * Description: jQuery scrollNav
 */
(function($, window, document, undefined) {
    var pluginName = "scrollNav";
    var defaults = {
        "className": "active"
    };

    function Plugin(element, options) {
        this.element = element;
        this._options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.$links = null;
        this.offsetTopArr = [];
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function() {
            if(!this.$links){
                this.$links = $(this.element).find("a[href*=#]");
            }
            this.offsetTopArr = [];
            for (var i = 0; i < this.$links.length; i++) {
                var $link = this.$links.eq(i);
                var id = $link.attr("href");
                var linkObj = {};
                linkObj.index = i;
                try {
                    linkObj.top = $(id).offset().top;
                    this.offsetTopArr.push(linkObj);
                } catch (err) {
                    console.log(id + " not found!");
                }
            }
            this.simpleSort();
            this.bindEvent();
        },

        simpleSort: function() {
            for (var i = 0; i < this.offsetTopArr.length; i++) {
                for (var j = i + 1; j < this.offsetTopArr.length; j++) {
                    if (this.offsetTopArr[i].top > this.offsetTopArr[j].top) {
                        var tmp = this.offsetTopArr[i];
                        this.offsetTopArr[i] = this.offsetTopArr[j];
                        this.offsetTopArr[j] = tmp;
                    }
                }
            }
        },

        bindEvent: function() {
            var $window = $(window);
            var that = this;
            $window.off("scroll", this.scrollHandler).on("scroll", that, this.scrollHandler);
        },

        scrollHandler: function(event) {
            var that = event.data;
            var scrollTop = $(document).scrollTop();
            for (var i = 0; i < that.offsetTopArr.length; i++) {
                if (scrollTop >= that.offsetTopArr[i].top) {
                    // 最后一个元素没有i+1
                    if (i == that.offsetTopArr.length - 1) {
                        that.setActiveClassName(that.offsetTopArr[i].index);
                    } else if (scrollTop < that.offsetTopArr[i + 1].top) {
                        that.setActiveClassName(that.offsetTopArr[i].index);
                    }
                }
            }
        },

        setActiveClassName: function(index) {
            this.$links.eq(index).addClass(this._options.className).siblings().removeClass(this._options.className);
        },

        reset: function() {
            this.init();
        }

    });

    $.fn[pluginName] = function(options) {
        return new Plugin(this, options);
    };

})(jQuery, window, document);