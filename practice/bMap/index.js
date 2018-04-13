$(function() {
    var map = new BMap.Map("container"); // 创建地图实例  
    var point = new BMap.Point(121.506656, 31.245087); // 创建点坐标  
    map.centerAndZoom(point, 17); // 初始化地图，设置中心点坐标和地图级别
    // map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
    map.addControl(top_left_navigation);

    // // 创建标注对象并添加到地图
    // var marker = new BMap.Marker(point);
    // map.addOverlay(marker);

    // setTimeout(function() {
    //     map.panTo(point); //两秒后移动
    // 	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    // }, 2000);

    // setTimeout(function() {
    // 	marker.setAnimation(null); //跳动的动画
    // }, 5000);


    //自定义覆盖类
    // 定义自定义覆盖物的构造函数
    function ComplexCustomOverlay(point, data) {
        this._point = point;
        this._div = null;
        this._data = data;
    }

    ComplexCustomOverlay.prototype = new BMap.Overlay();

    // 实现初始化方法
    ComplexCustomOverlay.prototype.initialize = function(map) {
        // 保存map对象实例
        this._map = map;
        // 创建div元素，作为自定义覆盖物的容器
        var div = document.createElement('div');
        div.style.position = "relative";
        this._div = div;
        div.innerHTML = '<div id="markPoint" class="markIcon" >' + this._data.pointId + '</div><div class="infoWidow">' + this._data.title + '</div>';
        $(div).hover(function(){
        	$(this).addClass('active');
            $(this).find('.infoWidow').show();
        }, function(){
        	$(this).removeClass('active');
            $(this).find('.infoWidow').hide();
        });

        // 将div添加到覆盖物容器中
        map.getPanes().markerPane.appendChild(div);

        return div;
    }

    // 实现绘制方法
    ComplexCustomOverlay.prototype.draw = function() {
        // 根据地理坐标转换为像素坐标，并设置给容器
        var point = this._map.pointToOverlayPixel(this._point);
        if (point) {
            this._div.style.left = point.x + 'px';
            this._div.style.top = point.y - 17 + 'px';
        }
    }

    ComplexCustomOverlay.prototype.remove = function() {
        if (this._div) {
            this._map.removeOverlay();
        }
    };

    var myData = [{
        lat: 121.506333,
        lng: 31.24545,
        title: '东方明珠',
        pointId: 1
    }, {
        lat: 121.5086,
        lng: 31.245,
        title: '平安银行',
        pointId: 2
    }];

    var $linkBox = $("#link-box");
    var OVERLAY_LIST = [];

    $.each(myData, function(index, item) {
        var point = new BMap.Point(item.lat, item.lng);
        var myCompOverlay = new ComplexCustomOverlay(point, item);
        map.addOverlay(myCompOverlay);

        // 方法1：
        // $linkBox.append('<a href="javascript:;" data-lat="' + item.lat + '" data-lng="' + item.lng + '">' + item.pointId + '</a>');
        
        // 方法2：
        OVERLAY_LIST.push(myCompOverlay);
        $linkBox.append('<a href="javascript:;">' + item.pointId + '</a>');

    });

    $("#link-box").on('click', 'a', function() {
        var $this = $(this);
        // 方法1：
        // var lat = $this.data('lat');
        // var lng = $this.data('lng');
        // map.panTo(new BMap.Point(lat, lng));
        
        // 方法2：
        var index = $(this).index();
        map.panTo(OVERLAY_LIST[index]._point);

    });

});
