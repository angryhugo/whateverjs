var priceChart = {
	render: function(data) {
		this.$chartBox = $(".chart-box");
		this.$chart = $("#chart");
		this.$hover = $(".chart-hover");
    	this.$price = $(".chart-price");
    	this.$date = $(".chart-date");
    	this.$discount = $(".chart-discount");
    	this.canvas = document.getElementById('chart');
    	this.ctx = this.canvas.getContext("2d");
    	this.width = this.$chart.width();
	    this.height = this.$chart.height();
	    this.data = data;
	    this.dataLength = data.length;
	    this.points = [];
	    // 最大最小值
	    this.minIndex = 0;
	    this.maxIndex = 0;
	    // 计算所得图表最大数值
	    this.maxPrice = 0;
    	
    	// 初始化点
	    this.initPoints();

		// 清空画布
        this.clearCanvas();

        // 绘制网格
        this.drawGrid(2);

        // 填充底部
        this.fillBottom();

        // 先画线
        for (var j = 0; j < this.dataLength; j++) {
            var p = this.points[j];
            // drawPoint(p);
            if (j + 1 < this.dataLength) {
                var q = this.points[j + 1];
                this.drawLine(p, q);
            }
        }

        // 后画点
        for (var j = 0; j < this.dataLength; j++) {
            var p = this.points[j];
            this.drawPoint(p);
        }

        // 显示底部日期
        this.showDate(7, 2);

        // 绑定hover事件
        this.bindEvents();
	},
    // 清空画布：canvas每当高度或宽度被重设时，画布内容就会被清空
	clearCanvas: function() {
		this.canvas.height = this.height;
	},
    /**
     * 画网格
     * @param xLineCount 横线数量
     */
    drawGrid: function(xLineCount) {
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "#eee";
        // 画边框
        this.ctx.strokeRect(0.5, 0.5, this.width - 1, this.height - 1);
        // 画横线
        this.ctx.beginPath();
        for (var i = 1; i <= this.xLineCount; i++) {
            this.ctx.moveTo(0, this.height / (xLineCount + 1) * i);
            this.ctx.lineTo(this.width, this.height / (xLineCount + 1) * i);
        }
        // 画竖线
        for (var i = 1; i <= this.dataLength; i++) {
            this.ctx.moveTo(this.width / this.dataLength * i, 0);
            this.ctx.lineTo(this.width / this.dataLength * i, this.height);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    },
    // 画点
    drawPoint: function(p) {
        var x = p.x;
        var y = p.y;
        this.ctx.lineWidth = 1;
        // 第1个实心圆
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgb(100,196,254)";
        this.ctx.arc(x, y, 4, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
        // 第2个实心圆
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgb(255,255,255)";
        this.ctx.arc(x, y, 3, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    },
    /**
     * 画线
     * @param p 第1个点
     * @param q 第2个点
     */
    drawLine: function (p, q) {
        var x1 = p.x;
        var y1 = p.y;
        var x2 = q.x;
        var y2 = q.y;
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "rgb(100,196,254)";
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    },
    // 填充底部
    fillBottom: function () {
        this.ctx.fillStyle = "rgba(225,244,255,0.5)";
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.height);
        for (var j = 0; j < this.dataLength; j++) {
            var p = this.points[j];
            this.ctx.lineTo(p.x, p.y);
        }
        this.ctx.lineTo(this.width, this.height);
        this.ctx.fill();
    },
    // 计算最大最小值
    calExtremum: function() {
        var min = this.data[this.minIndex].price;
        var max = this.data[this.maxIndex].price;
        for (var i = 0; i < this.dataLength; i++) {
            // 寻找最大最小值
            if (this.data[i].price < min) {
                this.minIndex = i;
                min = this.data[i].price;
            }
            if (this.data[i].price > max) {
                this.maxIndex = i;
                max = this.data[i].price;
            }
        }
        // 图表可显示范围为 0-(1.44*最高价格)
        this.maxPrice = max * 1.44;
    },
    // 初始化点
    initPoints: function (){
        // 获取极值
        this.calExtremum();
        for (var i = 0; i < this.dataLength; i++) {
            var thisData = this.data[i];
            var date = thisData.date;
            var price = thisData.price;
            var discount = thisData.discount;
            var point = {
                x: (this.width / this.dataLength) * i + 0.5 * (this.width / this.dataLength),
                y: this.height + (-price / this.maxPrice) * this.height,
                date: date,
                price: price,
                discount: discount
            };
            this.points.push(point);
        }
    },
    bindEvents: function(){
    	var self = this;
        // 绑定hover事件
        var showPoint = null;
        self.$chart.off("mousemove").on("mousemove", function(e) {
            var x = e.offsetX;
            var index = ~~(x / (self.width / self.dataLength));
            var hoverPoint = self.points[index];
            if (hoverPoint) {
                self.$hover.show();
                if (showPoint != hoverPoint) {
                    showPoint = hoverPoint;
                    self.$price.html("¥" + hoverPoint.price);
                    self.$date.html(hoverPoint.date.slice(-5) + "/" + self.getDayOfWeek(hoverPoint.date));
                    self.$discount.html("(" + hoverPoint.discount + ")");
                    self.$hover.css({
                        left: hoverPoint.x,
                        top: hoverPoint.y - 35
                    })
                }
            } else {
                self.$hover.hide();
            }
        });
        self.$chartBox.off("mousemove").on("mouseleave", function() {
            self.$hover.hide();
        });
    },
    /**
     * 显示底部时间轴
     * @param diff 每隔几天显示日期
     * @param formNum 从第几个开始显示
     */
    showDate: function (diff, formNum) {
        $(".bottom-date").remove();
        var singleWidth = this.width / this.dataLength;
        for (var i = 0; i < this.dataLength; i++) {
            if ((i + 1) % diff === formNum) {
                this.$chartBox.append("<span class='bottom-date' style='left:" + singleWidth * i + "px'>" + this.data[i].date.slice(-5) + "</span>")
            }
        }
    },
    /**
     * 根据日期获取星期
     * @param dateStr "2017-07-11"
     */
	getDayOfWeek: function(dateStr) {
        var weekArr = ["日", "一", "二", "三", "四", "五", "六"];
        var dateArr = dateStr.split("-");
        var date = new Date(dateArr[0], parseInt(dateArr[1]) - 1, dateArr[2]);
        return "周" + weekArr[date.getDay()];
    }
}