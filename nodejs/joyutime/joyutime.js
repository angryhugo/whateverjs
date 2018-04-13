
 

$(function(){ 
	var xhr = new XMLHttpRequest();
	xhr.open("GET","http://www.baoqianduan.com/demo/joyutimephp/jiari.php?&callback=?", true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
		// innerText不会给攻击者注入HTML元素的机会.
		
		var user = eval('('+xhr.responseText+')'); 
		/*假日和加班数组，假日只要周一到周五的，加班只要周六周日的*/
		var jr = user[0],
			ban = user[1];
			
		//计算算法开始*************************************************
		
		$('body').append('<div class="winloading" style="border-radius:8px; width:260px; overflow: hidden; padding:20px 10px 26px; line-height:30px !important; text-align:center; line-height:52px; font-size:14px; color:#666; background:#fff; border:#f60 solid 2px; z-index:999; position:fixed; top:0; right:0;"><img style=" vertical-align:middle;" src="http://pic.lvmama.com/img/new_v/ui_scrollLoading/loadingGIF46px.gif" width="46" height="46" />　工时查询中...</div>');
		$('body').append('<style>.time_info{width:260px;text-align:left; line-height:22px; font-size:14px; font-family:"微软雅黑";}.time_info dt{ text-align:center; margin-bottom:15px; color:#333; font-family:"宋体"; font-weight:bold;}.time_info dt span{ font-size:12px; color:#666;}.time_info dt b{ margin:0 3px;}.time_info dd{ padding:3px 0;}.time_info i{float:left; text-align:right; width:120px; font-style:normal; padding-right:10px;}.time_info span{}.time_info dd.c_f00,.c_f00{ color:#f00;}.c_0C3{ color:#0C3;}.c_lvse{ color:#03ad04;}.c_aaa{color:#999;}.c_f60{color:#f60;}.time_info dd.c_0C3{ color:#0C3;}.time_info dd.text_red p{ color:#d90202;}.time_info dd.c_f00 i{ color:#666; font-weight:bold;}.time_info dd.c_0C3 i{ color:#666; font-weight:bold;}.time_info dd.c_f00 i small,.time_info dd.c_0C3 i small{font-size:12px; color:#999; font-weight:normal;}.time_info dd.wujilu p{ padding-top:3px; font-size:12px; line-height:14px;}.time_info dd p{ padding-left:130px;}.guize{ width:250px; text-align: left; color:#999; font-size:12px; line-height:18px; margin-top:15px; padding-left:10px;}.guize b{ color:#666;}.logo_lv{ background:url(http://www.baoqianduan.com/demo/joyutimephp/icon.png) 0 0 no-repeat; background-size:100%; width:70px; height:70px; display:none; position:absolute; left:0; top:0;}.joyu_gongju{width:260px; margin-top:15px; text-align:left;}.joyu_gongju a{ color:#666; background:#eee; border:#cecece solid 1px; display:inline-block; line-height:24px; font-size:12px; padding:0 10px; margin:0 10px;text-decoration:none;}.joyu_gongju a:hover{color:#fff; background:#f80; border:#f60 solid 1px;}.table_box{display:none;background:#fff;position: absolute; left:0; top:0; color:#666; width: 280px; overflow-y:auto;}.table_box table{width:100%;border-collapse:collapse;border-spacing:0;}.table_box th{ background:#f3f3f3;}.table_box th,.table_box td{ line-height:24px; padding:4px 0; font-size:14px; font-family:Arial; text-align:center; border:#e8e8e8 solid 1px;}.close_table{ height:46px; line-height:46px;font-size:16px; cursor:pointer; text-align:center; color:#fff; background:#f80;position: absolute; bottom:0; left:0;width:280px;display:none;}.close_table:hover{ background:#f60;}</style>');


		function buling(num){if(num<10){return '0'+num;} return num;}
		var sdate = new Date(),
			nowy = sdate.getFullYear(),
			nowm = buling(sdate.getMonth()+1),
			upy = sdate.getFullYear(),
			upm = buling(nowm-1);
		if(upm==0){
			upm =12;
			upy = upy-1;
		}
		var upt = upy+'-'+upm+'-26',
			nowt = nowy+'-'+nowm+'-26';
			
		
		/*if(nowy>2016){
			$('.winloading').html('工时插件已过期,新版请联系<br>qq:237364436');
		}else{*/
			
		$.getJSON('http://ekp.joyu.com/km/review/km_review_card_record/kmReviewCardRecord.do?jsoncallback=aaa&method=data&exceptLabelIds=&fdStart='+upt+' 00:00&fdEnd='+nowt+' 00:00&_=1451887111345',function(data) {
			
			
			var joyutime = {
				//当月需要上班的天数，日期数组
				banDay:function(){
					var up = upt.split('-'),
						now = nowt.split('-'),
						y = parseInt(up[0]),
						m = parseInt(up[1])-1;
					//if(m==0){y=y-1;m=12;}
					
					//根据当月初26日第一天 和 最后一天25日的时间戳，计算出当月的总天数。
					var s = new Date(parseInt(up[0]),parseInt(up[1])-1,parseInt(up[2])),
						e = new Date(parseInt(now[0]),parseInt(now[1])-1,parseInt(now[2]));
					//总天数
					var days = (e.getTime()-s.getTime())/ (1000 * 3600 * 24);
					
					var arrday = [],
						arrban = [],  //上班的数据
						daysjc = [];
						
					
					//除掉法定加班日期
					for(var i=0;i<ban.length;i++){
						var bans = ban[i].split('-'),
							bant = new Date(parseInt(bans[0]),parseInt(bans[1])-1,parseInt(bans[2]));
						if(bant>=s && bant<=e){
							arrday.push(ban[i])
						}
					}
					
					
					//根据周末、年假，计算当月上班天数
					for(var i=0;i<days;i++){
						var times = s.getTime() + 1000 * 3600 * 24*i;
						if((new Date(times)).getDay()!=0 && (new Date(times)).getDay()!=6){
							var arrt = (new Date(times)).getFullYear()+'-'+buling((new Date(times)).getMonth()+1)+'-'+buling((new Date(times)).getDate());
							
							//除掉法定假日日期
							function jrt(arrt){
								for(var j=0;j<jr.length;j++){
									if(jr[j]==arrt){
										return false;
									}
								}
								return true;
							}
							if(jrt(arrt)){
								arrday.push(arrt);
								daysjc.push(times);
							}
						}
						
					}
					
					
					//需要上班的日期排序
					return arrday = arrday.sort();
				},
				
				//获取今日之前无打卡记录的日期
				getNot:function(){
					var arrday = this.banDay(),
						bantype = this.bantype(),
						banOk = this.banok().banok,
						not = [], //没有打卡记录
						jinsjc = 0,//最近一天打卡记录的时间戳
						nowsjc = sdate.getTime(),//现在的时间戳
						banall = [],
						jinDay = 0;
					//找出全部有记录的正常上班的日期
					for(var i=0;i<banOk.length;i++){banall.push(banOk[i]);}
					for(var i=0;i<bantype.budaka.length;i++){banall.push(bantype.budaka[i]);}
					for(var i=0;i<bantype.nianjia.length;i++){banall.push(bantype.nianjia[i]);}
					for(var i=0;i<bantype.tiaoxiu.length;i++){banall.push(bantype.tiaoxiu[i]);}
					for(var i=0;i<bantype.otherjia.length;i++){banall.push(bantype.otherjia[i]);}
					
					
					//最近一天打卡记录的时间戳
					for(var i=0;i<banall.length;i++){
						var banD = banall[i].start.split('-'),
							banS = new Date(parseInt(banD[0]),parseInt(banD[1])-1,parseInt(banD[2])+1);
							if(jinsjc<banS.getTime()){
								jinsjc = banS.getTime();
								jinDay = '26日'+ '-' + (banS.getMonth()+1) + '月' + (banS.getDate()-1)+'日';
							}
					}
					
					
					
					
					//检测今天之前应该上班的日期，哪天没有打卡
					function datat(ad){
						for(var j=0;j<banOk.length;j++){
							if(banOk[j].start==ad){
								return false;
							}
						}
						return true;
					}

					for(var i=0;i<arrday.length;i++){
						var dateDay = arrday[i].split('-'),
							//获取当天时间戳
							dayS = new Date(parseInt(dateDay[0]),parseInt(dateDay[1])-1,parseInt(dateDay[2])+1);
						if(dayS<=jinsjc && datat(arrday[i])){
							not.push(arrday[i]);
						}
					}
					
					return {'not':not,'jinDay':jinDay};
				},
				
				//获取上班类型json数据
				bantype: function(){
					
					var len = data.length,
						banTrue = [],//正常上班数据
						loudaka = [],//漏打卡
						budaka = [], //补打卡数据
						shijia = [],//事假
						bingjia = [],//病假
						sangjia = [],//丧假
						nianjia = [],//年假数据
						tiaoxiu = [],//调休数据
						jiaban = [],//加班数据
						hunjia = [],//婚假数据
						chanjia = [],//产假数据
						otherjia = [],
						ishz = /^[\u4e00-\u9fa5]+$/; //汉字正则
					
					
					//循环所有日期，数据分类返回出去
					for(var i=0;i<len;i++){
						var tithz = ishz.test(data[i].title.substring(0,2)),
							twoTetxt = data[i].title.substring(0,2);
						//去掉补打卡
						if(data[i].title.length==11){
							banTrue.push(data[i]);
						}else if(!tithz && data[i].title.length == 5 || !tithz && data[i].title.length == 6){
							loudaka.push(data[i]);
						}else{
							if(twoTetxt=='年假'){
								nianjia.push(data[i]);
							}else if(twoTetxt=='补打'){
								budaka.push(data[i]);
							}else if(twoTetxt=='调休'){
								tiaoxiu.push(data[i]);
							}else if(twoTetxt=='加班'){
								jiaban.push(data[i]);
							}else if(/假/.test(data[i].title)){
								otherjia.push(data[i]);
							}
							
						}
					};
					
					return {
					'bantrue':banTrue,
					'budaka':budaka,
					'nianjia':nianjia,
					'tiaoxiu':tiaoxiu,
					'jiaban':jiaban,
					'otherjia':otherjia,
					'loudaka':loudaka
					};
				},
				
				//获取已经上班的日期
				banok: function(){
					var bantrues = this.bantype().bantrue,
						banDays = this.banDay(),
						yishang = [],
						jiaban = [];
					//对比实际要上的天数，算出已经上班的实际天数，排除了节假日加班。
					function ys_jb(day){
						for(var j=0;j<banDays.length;j++){
							
							if(banDays[j]==day.start){
								return true;
							}
						}
						return false;
					}
					
					for(var i=0;i<bantrues.length;i++){
						if(ys_jb(bantrues[i])){
							yishang.push(bantrues[i])
						}else{
							jiaban.push(bantrues[i])
						}
						
					}

					yishang.sort(function(a,b){
						var as = a.start.split('-'),
							bs = b.start.split('-'),
							asnew = as[0]+as[1]+as[2],
							bsnew = bs[0]+bs[1]+bs[2];
						return parseInt(asnew) - parseInt(bsnew);
					});
					
					
					return {'banok':yishang,'jiaban':jiaban};
				},
				
				//获取时间段的分钟数,传入时间段10:00~19:00
				getM:function(time){
					var sban = parseInt(time.substring(0,2)),
						xban = parseInt(time.substring(6,8)),
						sfen = parseInt(time.substring(3,5)),
						xfen = parseInt(time.substring(9,11)),
						sset = sban+sfen/60,
						xset = xban+xfen/60,
						m = 0,
						h = 0,
						wuxiu = 0;
					
					if(xset - sset >= 4){
						wuxiu = 1;
					}
					h = xban - sban - wuxiu;
					m = h*60 + xfen - sfen;
					if(time.length==11){
						return m;
					}else{
						return 0;
					}
				},
				
				//获取某一天的工时分钟数，传入2016-06-06格式
				getDayTime:function(time){
					var banOk = this.banok().banok;
					for(var i=0;i<banOk.length;i++){
						if(banOk[i].start==time){
							var dayTime = this.getM(banOk[i].title);
							return dayTime;
						}
					}
					return 0;
				},
				
				//计算已经上班天数的工时总和
				times: function(){
					var banOk = this.banok().banok,
						timeM = 0; //工时分钟初始化
					for(var i=0;i<banOk.length;i++){
						var time = banOk[i].title,
							thisM = this.getM(time);
						timeM += thisM;
					}
					
					return {'h':parseInt(timeM/60),'m':timeM%60,'mAll':timeM};
				},
				//当月补打卡，调休，年假工时数据
				butimes:function(){
					var buArr = this.bantype().budaka,
						nianArr = this.bantype().nianjia,
						tiaoArr = this.bantype().tiaoxiu,
						otherArr = this.bantype().otherjia,
						nian = 0,
						tiao = 0,
						other = 0,
						bu = 0;
					//sss.match(/(\d+(\.\d+))/g);
					//统计调休小时
					for(var i=0;i<tiaoArr.length;i++){
						var H = Number(tiaoArr[i].title.match(/(\d+(\.\d+))/g));
						tiao+=H;
					}
					//统计年假小时
					for(var i=0;i<nianArr.length;i++){
						var H = Number(nianArr[i].title.match(/(\d+(\.\d+))/g));
						nian+=H;
					}
					
					//其他假日
					for(var i=0;i<otherArr.length;i++){
						var H = Number(otherArr[i].title.match(/(\d+(\.\d+))/g));
						other+=H;
					}
					
					//找出补打卡当天上班的分钟数
					for(var j=0;j<buArr.length;j++){
						var H = this.getM(buArr[j].title.substring(4,buArr[j].title.length));
						bu += H;
					}
					
					
					return {'buH':bu/60,'nianH':nian,'tiaoH':tiao,'otherH':other};
				},
				
				
				//返回补打卡、年假、调休计算后所有的分钟数综合
				endtime:function(){
					var but = this.butimes();
					var etime = this.times().mAll,
						banOk = this.banok().banok,
						nianArr = this.bantype().nianjia,
						nianAllM = 0, //年假当天上班的分钟数,初始
						buArr = this.bantype().budaka,
						buAllM = 0, //补打卡当天上班的分钟数,初始
						otherArr = this.bantype().otherjia,
						otherAllM = 0, //年假当天上班的分钟数,初始
						tiaoArr = this.bantype().tiaoxiu,
						tiaoAllM = 0;
					
					//找出年假当天上班的分钟数
					for(var j=0;j<nianArr.length;j++){
						var nianOkM = this.getDayTime(nianArr[j].start);
						
						if(nianOkM==0){
							//当天年假分钟数
							var nM = Number(nianArr[j].title.match(/(\d+(\.\d+))/g))*60;
							nianAllM +=nM;
						}else{
							//当天年假分钟数
							var nM = Number(nianArr[j].title.match(/(\d+(\.\d+))/g))*60;
							
							//console.log(nM)
							if(nM>=480){
								//除掉年假当天上班时间
								nM = nM-nianOkM;
							}else if(nM+nianOkM>480){//计算请假当天，请假时间小于8小时，并且上班合请假总时间超过8小时。
								nM = nM-(nianOkM - (480-nM));
							}
							
							
							//年假时间累加
							nianAllM += nM;
						}
					}
					
					
					//找出其他请假当天上班的分钟数
					for(var j=0;j<otherArr.length;j++){
						var otherOkM = this.getDayTime(otherArr[j].start);
						if(otherOkM==0){
							var nM = Number(otherArr[j].title.match(/(\d+(\.\d+))/g))*60;
							otherAllM +=nM;
						}else{
							var nM = Number(otherArr[j].title.match(/(\d+(\.\d+))/g))*60;
							nM = nM-otherOkM;
							otherAllM += nM;
						}
					}
					
					//找出补打卡当天上班的分钟数
					for(var j=0;j<buArr.length;j++){
						var buOkM = this.getDayTime(buArr[j].start),
							buM = this.getM(buArr[j].title.substring(4,buArr[j].title.length));
						//console.log()
						if(buOkM==0){
							buAllM +=buM;
						}else{
							var nM = buM-buOkM;
							buAllM += nM;
						}
					}
					
					
					//找出调休当天上班的分钟数
					for(var j=0;j<tiaoArr.length;j++){
						var tiaoOkM = this.getDayTime(tiaoArr[j].start),
							tM = Number(tiaoArr[j].title.match(/(\d+(\.\d+))/g))*60;
						
						if(tiaoOkM==0){
							tiaoAllM +=tM;
						}else if(tiaoOkM>=480){
							//tM += tiaoOkM;
							tiaoAllM += 0;
						}else{
							tiaoAllM += tM;
						}
					}
					
					
					return etime + nianAllM + buAllM + otherAllM + tiaoAllM - this.getNot().not.length*480;
				},
				
				//创建数据展示窗口和内容 
				createHtml:function(){
					var This = this,
						bantype = This.bantype(),
						banOK =  This.banok(),
						dayAll = This.banDay().length,
						dayOk = banOK.banok.length,
						yishang = bantype.bantrue.length,
						bus = This.butimes(),
						timeok = This.times(),
						kacha = Math.abs(dayOk*480 - timeok.mAll),
						kaH = parseInt(kacha/60),
						budakaH = bus.buH,
						jiaH = bus.otherH + bus.nianH,
						tiaoH = bus.tiaoH,
						zongcha = Math.abs(dayOk*480 - This.endtime()),
						zongchaH = parseInt(zongcha/60),
						lou = bantype.loudaka,
						not = This.getNot().not;
					//console.log(timeok.h);
					//console.log(banOK.banok);
					
					//把月份转换为大写
					var monthArr = ['一','二','三','四','五','六','七','八','九','十','十一','十二'],
						month = sdate.getMonth();
					for(var i=0;i<monthArr.length;i++){
						if(sdate.getMonth()==i){
							month = monthArr[i];
						}
					}
					
					
					var html = '<dl class="time_info"><dt><b>'+month+'月</b>工时明细<span>（<b>'+ dayAll +'</b>工作日）</span></dt><dd><i>统计日期：</i><span>'+ this.getNot().jinDay +'</span></dd><dd><i>已打卡：</i><span>'+ dayOk +'</span>天</dd><dd><i>已打卡总计：</i><span>'+ timeok.h +'</span>小时'+timeok.m+'分钟</dd>';
					
					//已经打卡得时差
					/*if(dayOk*480 - timeok.mAll>0){
						html+= '<dd class="c_f00"><i>已打卡时差：</i><span>差' + kaH +'小时'+ kacha%60 +'</span>分钟</dd>';
					}else{
						html+= '<dd class="c_0C3"><i>已打卡时差：</i><span>多' + kaH +'小时'+ kacha%60 +'</span>分钟</dd>';
					}*/

					//无记录日期
					if(not.length>0){
						notHtml = '<dd class="wujilu text_red"><i>漏打卡日期：</i>';
						for(var i=0;i<not.length;i++){
							notHtml+='<p>'+ not[i] +'</p>'
						}
						/*for(var i=0;i<lou.length;i++){
							notHtml+='<p>'+ lou[i].start +'</p>'
						}*/
						notHtml+='</dd>';
						
						html+= notHtml;
					}


					//假日加班日期
					if(banOK.jiaban.length>0){
						jbHtml = '<dd class="wujilu"><i>节假日加班：</i><p><small>假日加班不计工时 </small></p>';
						for(var i=0;i<banOK.jiaban.length;i++){
							jbHtml+='<p>'+ banOK.jiaban[i].start +'</p>'
						}
						jbHtml+='</dd>';
						
						html+= jbHtml;
					}
					
					//补打卡
					if(budakaH!=0){
						html+= '<dd><i>补打卡：</i><span>'+(''+budakaH).substring(0,6)+'</span>小时</dd>';
					}
					
					//请假
					if(jiaH!=0){
						html+= '<dd><i>请假：</i><span>'+jiaH+'</span>小时</dd>';
					}


					
					
					//if(budakaH!=0 || jiaH!=0 || not.length>0 || tiaoH!=0){
						//总时差
						if(dayOk*480 - This.endtime()>0){
							html+= '<dd class="c_f00"><i>总时差：</i><span>差'+ zongchaH +'</span>小时'+ zongcha%60 +'</span>分钟</dd>';
						}else{
							html+= '<dd class="c_0C3"><i>总时差：</i><span>多'+ zongchaH +'</span>小时'+ zongcha%60 +'</span>分钟</dd>';
						}
					//}
					
					
					
					
					var tableHtml = '',
						tableAllH = 0;
					for (var i = 0; i < dayOk; i++) {
						var tableH = parseInt(This.getDayTime(banOK.banok[i].start)/60),
							tableM = This.getDayTime(banOK.banok[i].start)%60;
						tableHtml+='<tr><td>'+ banOK.banok[i].start +'</td><td>'+ banOK.banok[i].title +'</td><td><span class="c_f60">'+ tableH +'</span><span class="c_aaa">h</span><span class="c_f60">'+tableM+'</span><span class="c_aaa">m</span></td></tr>';
					};
					
					tableHtml += '<tr><td>工时总计：</td><td></td><td><span class="c_f60">'+ timeok.h +'</span><span class="c_aaa">h</span><span class="c_f60">'+timeok.m+'</span><span class="c_aaa">m</span></td></tr>';
					
					$('.winloading').html(html+'</dl><p class="joyu_gongju"><a class="js_days_table" href="javascript:;">打卡工时明细表</a><a href="http://ekp.joyu.com/km/review/calendar.jsp" target="_blank">EKP工时日历表</a></p><p class="guize">计算规则：<br>1、总时差已处理各类请假/补打卡/调休<br>2、请假满8H,不计算当天已打卡时间<br>3、补打卡后,不计算当天已打卡时间<br>4、节假日加班不算在工时里<br>5、满4H扣除1H就餐,每天只扣一次,不满不扣<br>6、每月1日后才会开始计算当月工时</p><div class="logo_lv"></div><div class="table_box"><table><tr><th width="38%">日期</th><th width="38%">打卡记录</th><th width="24%">工时</th></tr>'+tableHtml+'</table></div><div class="close_table">关闭表格</div></div>');
				}
				
			
			}//joyutime函数结束
			
			//调用创建工时明细
			joyutime.createHtml();
			
			
			var joyuBox = $('.winloading'),
				width = joyuBox.width(),
				height = joyuBox.height();
			$(document).bind('click',function(){ 
				joyuBox.animate({'height':24,'top':40,'width':50,'border-radius':35},500).css('cursor','pointer'); 
				setTimeout(function(){
					$('.logo_lv').fadeIn(200);
					joyuBox.css('border','1px solid rgb(255, 102, 0)');
				},400);
				$('.table_box,.close_table').hide();
			});
			
			joyuBox.bind('click',function(e){ 
				e.stopPropagation();
				$('.logo_lv').fadeOut(200,function(){
					joyuBox.animate({'height':height,'top':0,'width':width,'border-radius':8},500).css({'cursor':'default','border':'2px solid rgb(255, 102, 0)'});
				});

			});


			$('.js_days_table').bind('click',function(e){ 
				e.stopPropagation();
				$('.table_box').show().height(joyuBox.height());
				$('.close_table').show();
			});

			$('.close_table').bind('click',function(e){ 
				e.stopPropagation();
				$('.table_box,.close_table').hide();
			});
				
			});//请求结束
		//} 节假日年份检测
		
		
		//计算算法结束*************************************************
	  }
	}
	xhr.send();
	
	
	
	
	
	
		

	
});


