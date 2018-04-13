$(function(){
    /*=============图片延迟加载=============*/
    $.expr[":"].loading=function(elt,index){
        var height=$(window).height()+200;
        var top=$(elt).offset().top;
        return top>$(window).scrollTop()&&top<(height+$(window).scrollTop())
    };
    $.expr[":"].loaded=function(elt,index){
        var height=$(window).height()+200;
        var top=$(elt).offset().top;
        return top<height
    };
    var loadImg=function(){
		var This = $(this);
		if(!This.is(':hidden')){ //不检测隐藏元素
			var to_sc = This.attr('to_sc'),
				js_sc = This.attr('js_sc'),
				to = This.attr('to');
			if(to_sc){
				This.removeAttr('to_sc');
				var img = new Image().src = to_sc;
			}
			if(!js_sc){
				this.src=This.css({'opacity':0}).attr("to");
				This.removeAttr("to");
				if(This.load()){
					This.animate({'opacity':1},300,function(){This.removeAttr('style')});
				}
				
				this.onerror=function(){
					this.src="http://pic.lvmama.com/img/cmt/img_120_60.jpg"
				}
			}
		}
        
    };
    var imgTimeId=null;
    var scrollImgLoading=function(){
        clearTimeout(imgTimeId);
        imgTimeId=setTimeout(function(){
            $("img[to]:loading").each(function(){
                loadImg.call(this)
            });
            if($("img[to]").size()==0){
                $(window).unbind('scroll',scrollImgLoading)
            }
        }
        ,200)
    };
    $(window).bind('scroll',scrollImgLoading);
    $("img[to]:loaded").each(function(){
        loadImg.call(this)
    });
    setTimeout(function(){
        $("img[to]:loaded").each(function(){
            loadImg.call(this)
        })
    }
    ,1000);
    /*============延迟加载结束===========*/

    $(".tab").on("click", function(){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".img-div").eq(index).show().siblings().hide();
        scrollImgLoading();
    });
   
});