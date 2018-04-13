/* jquery.scrollNav.js START */
/*
 * File:        jquery.scrollNav.js
 * Charset:     utf-8
 * Author:      yinhanchun
 * Version:     0.1
 * Date:        2015-09-06
 * Description: jQuery scrollNav
 */
(function($, window, document, undefined) {

    // 声明默认属性对象
    var pluginName = "scrollNav";
    var defaults = {
        "className": "active"
    };

    // 构造函数
    function Plugin(element, options) {
        this.element = element;
        // 将默认属性对象和传递的参数对象合并到第一个空对象中
        this._options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.$links = null;
        this.offsetTopArr = [];
        this.init();
    }

    // 为了避免和原型对象Plugin.prototype的冲突，这地方采用继承原型对象的方法
    $.extend(Plugin.prototype, {

        // 初始化，由于继承自Plugin原型，
        // 你可以在这里直接使用this.element或者this.settings
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
            var that = this;
            $(window).scroll(function() {
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
            });
        },

        setActiveClassName: function(index) {
            this.$links.eq(index).addClass(this._options.className).siblings().removeClass(this._options.className);
        },

        resetArray: function() {
            this.init();
        }

    });

    // 对构造函数的一个轻量级封装，
    // 防止产生多个实例
    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });

        // 方便链式调用
        return this;
    };

})(jQuery, window, document);
