
/* 
 * countdown 倒计时功能
**/

(function($) {
    $.fn.countdown = function(options, callback){
        var defaults = {
            prezero : true,  // 前导零
            overtips : "已结束",  // 自定义结束提醒
            timediff : 0   // 调整时间差，单位毫秒
        }
        var opt = $.extend(true, defaults, options || {});
        
        function timeOver(obj, all){
            var time = parseInt(all/1000);
            var s = time%60;
            time = parseInt(time/60);
            var m = time%60;
            time = parseInt(time/60);
            var h = time%24;
            var d = parseInt(time/24);

            var times = 1000;

            //添加前导0
            if(opt.prezero){
                m = (m < 10) ? ("0" + m) : m;
                h = (h < 10) ? ("0" + h) : h;
                s = (s < 10) ? ("0" + s) : s;
            }

            obj.innerHTML = d + "天" + h +"小时" + m + "分" + s + "秒";

            setTimeout(function(){
                all -= times;
                if(all>0){
                    timeOver(obj,all);
                }else {
                    obj.innerHTML = opt.overtips;
                    if(callback){
                        callback();
                    }
                }
            },times);
        }

        var all = "";

        for(var i = 0, len = this.length; i < len ; i++){            
            all = Number((this[i]).innerHTML) + opt.timediff;
            timeOver(this[i],all);
        }

    };
})(jQuery);