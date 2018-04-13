eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('$(\'1b\').1c(\'<v 15="u" k=" U:1n; G:0; F:0; E:23%; P:#H; 1P:1U(x=K); -1h-x:0.5; -1M-x:0.5; x:0.5; z-14:1Y;"></v><v 15="I" k=" E:24; 25:19 0; 1a-N:1d; 1e-s:1i; 1j-1l:1m; q:#1o; P:#1p; 1E:#H 1F 1J; z-14:H; U:1L; G:K%; O-G:-1N; F:K%; O-F:-1O;"><Q k=" 1Q-N:1R;" 1T="S://1W.1X.W/Q/1Z/20/21.22" E="X" s="X" />　工时查询中...</v>\');n Z=$(27).s();$(\'.u\').29({\'s\':Z});M L(a){e(a<10){R\'0\'+a}R a}n B=1f 1g(),T=B.V(),J=L(B.1k()+1),y=B.V(),A=L(J-1);e(A==0){A=12;y=y-1}n 13=y+\'-\'+A,18=T+\'-\'+J;$.1q(\'S://1r.1s.W/1t/1u/1v/1w.1x?1y=1z&1A=1B&1C=&1D=\'+13+\'-26 D:D&1G=\'+18+\'-26 D:D&1H=1I\',M(a){n b=a.1K,g=0,d=0,C=\'\',4=0,j=0,l=b*8;1S(n i=0;i<b;i++){n c=a[i].1V,h=c.w(6,8)-c.w(0,2)-1,m=c.w(9,11)-c.w(3,5);g+=h;d+=m}e(d>=0){e(d>=7){g+=Y(d/7)}C=g+\'小时\'+d%7+\'分钟\';4=g;j=d%7}t{e(d<=7){g-=Y(r.o(d)/7)}C=(g-1)+\'小时\'+(7-r.o(d)%7)+\'分钟\';4=g-1;j=7-r.o(d)%7}e(4>=l){e(4-l==0){4=\'<f k="q:16;">多\'+j+\'分钟</f>\'}t{4=\'<f k="q:16;">多\'+(4-l)+\'小时\'+j+\'分钟</f>\'}}t{e(r.o(4-l+1)==0){4=\'<f k="q:17;">差\'+(7-j)+\'分钟</f>\'}t{4=\'<f k="q:17;">差\'+r.o(4-l+1)+\'小时\'+(7-j)+\'分钟</f>\'}}$(\'.I\').28(\'<p><b>您本月上了 \'+b+\' 天</b></p>\'+\' \'+\'<p><b>共计：</b>\'+C+\'</p>\'+\' \'+\'<p>\'+4+\'</p>\');$(\'.u\').2a(\'2b\',M(){$(\'.I,.u\').2c()})});', 62, 137, '||||timec|||60||||||timeM|if|span|timeH|||timef|style|timex||var|abs||color|Math|height|else|windowBg|div|substring|opacity|upy||upm|sdate|timeall|00|width|left|top|999|winloading|nowm|50|buling|function|align|margin|background|img|return|http|nowy|position|getFullYear|com|46|parseInt|height_w||||upt|index|class|green|red|nowt|26px|text|body|append|center|line|new|Date|moz|52px|font|getMonth|size|14px|absolute|666|fff|getJSON|ekp|joyu|km|review|km_review_card_record|kmReviewCardRecord|do|jsoncallback|aaa|method|data|exceptLabelIds|fdStart|border|solid|fdEnd|_|1451887111345|1px|length|fixed|khtml|50px|150px|filter|vertical|middle|for|src|alpha|title|pic|lvmama|998|new_v|ui_scrollLoading|loadingGIF46px|gif|100|300px|padding||document|html|css|bind|click|remove'.split('|'), 0, {}))


$('body').append('<div class="windowBg" style=" position:absolute; top:0; left:0; width:100%; background:#999; filter:alpha(opacity=50); -moz-opacity:0.5; -khtml-opacity:0.5; opacity:0.5; z-index:998;"></div><div class="winloading" style=" width:300px; padding:26px 0; text-align:center; line-height:52px; font-size:14px; color:#666; background:#fff; border:#999 solid 1px; z-index:999; position:fixed; top:50%; margin-top:-50px; left:50%; margin-left:-150px;"><img style=" vertical-align:middle;" src="http://pic.lvmama.com/img/new_v/ui_scrollLoading/loadingGIF46px.gif" width="46" height="46" />　工时查询中...</div>');
var height_w = $(document).height();
$('.windowBg').css({
    'height': height_w
});

function buling(a) {
    if (a < 10) {
        return '0' + a
    }
    return a
}
var sdate = new Date(),
    nowy = sdate.getFullYear(),
    nowm = buling(sdate.getMonth() + 1),
    upy = sdate.getFullYear(),
    upm = buling(nowm - 1);
if (upm == 0) {
    upm = 12;
    upy = upy - 1
}
var upt = upy + '-' + upm,
    nowt = nowy + '-' + nowm;
$.getJSON('http://ekp.joyu.com/km/review/km_review_card_record/kmReviewCardRecord.do?jsoncallback=aaa&method=data&exceptLabelIds=&fdStart=' + upt + '-26 00:00&fdEnd=' + nowt + '-26 00:00&_=1451887111345', function(a) {
    var b = a.length,
        timeH = 0,
        timeM = 0,
        timeall = '',
        timec = 0,
        timef = 0,
        timex = b * 8;
    for (var i = 0; i < b; i++) {
        var c = a[i].title,
            h = c.substring(6, 8) - c.substring(0, 2) - 1,
            m = c.substring(9, 11) - c.substring(3, 5);
        timeH += h;
        timeM += m
    }
    if (timeM >= 0) {
        if (timeM >= 60) {
            timeH += parseInt(timeM / 60)
        }
        timeall = timeH + '小时' + timeM % 60 + '分钟';
        timec = timeH;
        timef = timeM % 60
    } else {
        if (timeM <= 60) {
            timeH -= parseInt(Math.abs(timeM) / 60)
        }
        timeall = (timeH - 1) + '小时' + (60 - Math.abs(timeM) % 60) + '分钟';
        timec = timeH - 1;
        timef = 60 - Math.abs(timeM) % 60
    }
    if (timec >= timex) {
        if (timec - timex == 0) {
            timec = '<span style="color:green;">多' + timef + '分钟</span>'
        } else {
            timec = '<span style="color:green;">多' + (timec - timex) + '小时' + timef + '分钟</span>'
        }
    } else {
        if (Math.abs(timec - timex + 1) == 0) {
            timec = '<span style="color:red;">差' + (60 - timef) + '分钟</span>'
        } else {
            timec = '<span style="color:red;">差' + Math.abs(timec - timex + 1) + '小时' + (60 - timef) + '分钟</span>'
        }
    }
    $('.winloading').html('<p><b>您本月上了 ' + b + ' 天</b></p>' + ' ' + '<p><b>共计：</b>' + timeall + '</p>' + ' ' + '<p>' + timec + '</p>');
    $('.windowBg').bind('click', function() {
        $('.winloading,.windowBg').remove()
    })
});

// http://ekp.joyu.com/km/review/km_review_card_record/kmReviewCardRecord.do?method=data&exceptLabelIds=&fdStart=2015-12-26 00:00&fdEnd=2016-01-26 00:00