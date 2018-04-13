$(function() {
    var $window = $(window);
    var $vs = $(".vs");

    var CURRENT_NUM = 0;
    var timer = null;

    $(".act-price-box .btn").on("click", function(event) {
        if (CURRENT_NUM < 3) {
            clearInterval(timer);
            var $this = $(this);
            var thisOffset = $this.offset();
            var liOffset = $(".contrast li").eq(CURRENT_NUM++).offset();
            var startPoint = {
                "x": thisOffset.left - $window.scrollLeft(),
                "y": thisOffset.top - $window.scrollTop()
            }

            var endPoint = {
                "x": liOffset.left - $window.scrollLeft(),
                "y": liOffset.top - $window.scrollTop()
            }

            addContrast(startPoint, endPoint);
        }
    });


    function addContrast(startPoint, endPoint) {
        $vs.show();
        var t = 0;
        var helpPoint = {
            "x": 3 * (startPoint.x + endPoint.x) / 7,
            "y": 0
        };
        timer = setInterval(function() {
            //B(t)=(1-t)^2*P0+2*t*（1-t）*P1+t^2*P2,t[0,1]
            var x = (1 - t) * (1 - t) * startPoint.x + 2 * t * (1 - t) * helpPoint.x + t * t * endPoint.x;
            var y = (1 - t) * (1 - t) * startPoint.y + 2 * t * (1 - t) * helpPoint.y + t * t * endPoint.y;
            $vs.css({
                "left": x,
                "top": y
            });
            t = t + 0.005;
            if (t >= 1) {
                clearInterval(timer);
                $vs.hide().removeAttr('style');
            }
        }, 1);
    }
});
