/**
 * Created by Bter on 15/4/17.
 */
var shareObj = {
    title: shareTitle,
    desc: shareSub,
    link: window.location.href,
    imgUrl: shareImg ? shareImg : 'http://m.timekiss.cn/images/Timekiss_Logo(0615).png',
    trigger: function (res) {
        //alert(JSON.stringify(shareObj));
    },
    success: function (res) {
        //alert('已分享');
    },
    cancel: function (res) {
        //alert('已取消');
    },
    fail: function (res) {
        //alert(JSON.stringify(res));
    }
};
var shareObj1= {
    title: shareTitle + (shareSub ? ': '+shareSub:'' ),
    desc: shareSub,
    link: window.location.href,
    imgUrl: shareImg ? shareImg : 'http://m.timekiss.cn/images/Timekiss_Logo(0615).png',
    trigger: function (res) {
        //alert(JSON.stringify(shareObj));
    },
    success: function (res) {
        //alert('已分享');
    },
    cancel: function (res) {
        //alert('已取消');
    },
    fail: function (res) {
        //alert(JSON.stringify(res));
    }
};
$(function(){
    init();
    if ($('.asidebar').length > 0) {
        $('.tkPage').on('touchstart', footerHide).on('touchcancel', footerShow).on('touchend', footerShow);

    }
    $.getJSON('?r=weixin/signature', { href: window.location.href }, function(d) {
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: d.appid, // 必填，公众号的唯一标识
            timestamp: d.timestamp, // 必填，生成签名的时间戳
            nonceStr: d.noncestr, // 必填，生成签名的随机串
            signature: d.signature,// 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'checkJsApi']
        });
        wx.ready(function(){
            wx.checkJsApi({
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage'
                ],
                success: function (res) {
                    //alert(JSON.stringify(res));
                }
            });
            wx.onMenuShareTimeline(shareObj1);
            wx.onMenuShareAppMessage(shareObj);
        });
        wx.error(function(res){
            //alert(JSON.stringify(res)+'--'+JSON.stringify(d));
        });
    });
});

function getWxTitle() {
    var wxtitle = '';
    if (shareTitle) {
        wxtitle += shareTitle;
    }
    if (shareSub) {
        wxtitle += ':' + shareSub;
    }
    return wxtitle;
}

var ismove = false, topValue = 0;

function footerHide(e) {
    if ($(document).scrollTop() + window.innerHeight >= $(document).height()) {
        return;
    }
    $('.asidebar').hide();
    topValue = Math.min(topValue + 1000, 1000);
}

function footerShow(e) {

}

setInterval(function() {
    topValue = Math.max(topValue - 500, 0);
    if (topValue <= 0) {
        $('.asidebar').show();
    }
}, 500);


