var shareurl = "http://www.bitauto.com/topics/ad_topic/tjyq_a70/";
var sharetitle = "测测你的颜值值多少钱？";
var sharedesc = "骏派A70 9月21日荣耀上市，网红直播嗨翻天，参与互动活动赢取精美车模！";
function wx_init() {
    wx.config({
        debug: false,
        appId: wx_appId,
        timestamp: wx_timestamp,
        nonceStr: wx_nonceStr,
        signature: wx_signature,
        jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem',
                    'translateVoice',
                    'startRecord',
                    'stopRecord',
                    'onRecordEnd',
                    'playVoice',
                    'pauseVoice',
                    'stopVoice',
                    'uploadVoice',
                    'downloadVoice',
                    'chooseImage',
                    'previewImage',
                    'uploadImage',
                    'downloadImage',
                    'getNetworkType',
                    'openLocation',
                    'getLocation',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'closeWindow',
                    'scanQRCode',
                    'chooseWXPay',
                    'openProductSpecificView',
                    'addCard',
                    'chooseCard',
                    'openCard'
                ]
    });

    wx.ready(function () {
        wx_ready_mainfunk();
    });

    wx.error(function (res) {
        wx_error_log(res);
    });
}



function wx_ready_mainfunk() {
    //        var shareurl = "http://www.bitauto.com/topics/ad_topic/OnlyForTest/";
    //        var sharetitle = "测测你的颜值值多少钱？";
    //        var sharedesc = "骏派A70邀您拼颜值抢好礼！";  
    var wx_title = sharetitle; // 分享标题
    var wx_desc = sharedesc; // 分享描述
    var wx_link = shareurl;  // 分享链接
    //  var wx_imgUrl = "../img/shareLogo.jpg"; // 分享图标
    var wx_imgUrl = "http://www.bitauto.com/topics/ad_topic/tjyq_a70/img/shareLogo.jpg"; // 分享图标  
    var wx_type = ""; // 分享类型,music、video或link，不填默认为link
    var wx_dataUrl = ""; // 如果type是music或video，则要提供数据链接，默认为空

    //分享到朋友圈
    wx.onMenuShareTimeline({
        title: wx_title, // 分享标题
        link: wx_link, // 分享链接
        imgUrl: wx_imgUrl, // 分享图标
        success: function () {
            wx_success(1, wx_title + "-" + wx_desc + "-" + wx_link + "-" + wx_imgUrl + "-" + wx_type + "-" + wx_dataUrl);
        },
        cancel: function () {
        },
        complete: function (errMsg) {
        }
    });

    //分享给朋友
    wx.onMenuShareAppMessage({
        title: wx_title, // 分享标题
        desc: wx_desc, // 分享描述
        link: wx_link, // 分享链接
        imgUrl: wx_imgUrl, // 分享图标
        type: wx_type, // 分享类型,music、video或link，不填默认为link
        dataUrl: wx_dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            wx_success(2, wx_title + "-" + wx_desc + "-" + wx_link + "-" + wx_imgUrl + "-" + wx_type + "-" + wx_dataUrl);
        },
        cancel: function () {
        },
        complete: function (errMsg) {
        }
    });
    //分享到qq
    wx.onMenuShareQQ({
        title: wx_title, // 分享标题
        desc: wx_desc, // 分享描述
        link: wx_link, // 分享链接
        imgUrl: wx_imgUrl, // 分享图标
        success: function () {
            wx_success(3, wx_title + "-" + wx_desc + "-" + wx_link + "-" + wx_imgUrl + "-" + wx_type + "-" + wx_dataUrl);
        },
        cancel: function () {
        },
        complete: function (errMsg) {
        }
    });
    //分享到腾讯微博
    wx.onMenuShareWeibo({
        title: wx_title, // 分享标题
        desc: wx_desc, // 分享描述
        link: wx_link, // 分享链接
        imgUrl: wx_imgUrl, // 分享图标
        success: function () {
            wx_success(4, wx_title + "-" + wx_desc + "-" + wx_link + "-" + wx_imgUrl + "-" + wx_type + "-" + wx_dataUrl);
        },
        cancel: function () {
        },
        complete: function (errMsg) {
        }
    });
    //分享到微信
    $('#fenxiang').bind("click", function () {
        if (ischeck_wx()) {//微信浏览器打开
            alert('您当前使用的微信浏览器，指示或提示点击微信分享按钮（右上角）');
        }
        else {//使用非微信浏览器打开
            alert('您当前使用的不是微信浏览器，指示或提示点击浏览器自带分享按钮');
        }
    })
}

//判断是否微信打开
function ischeck_wx() {
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    var isAndroid = ua.indexOf('android') != -1;
    var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
    function onReady() {
        if (isAndroid) {
            if (history.length && history.length > 1) {
                history.back();
            } else {
                WeixinJSBridge.invoke('closeWindow');
            }
        }
    }
    document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", onReady, !1) : document.attachEvent && document.attachEvent("onWeixinJSBridgeReady", onReady);
    if (!isWeixin) {
        return false;
    }
    else {
        return true;
    }
}

$(document).ready(function () {

    var body = "action=getCurrentTime";  //查询参数
    var gettimeurl = "http://api.market.bitauto.com/webapi/Api/Handler1.ashx";
    $.getJSON(url + "?callback=?", body, function (data) {
        if (data.success) {
            var endtime = new Date('2016/9/21 20:00:00');
            var nowtime = new Date(nowtime);
            var leftsecond = parseInt((endtime.getTime() - nowtime.getTime()) / 1000); //把剩余时间转化成秒。
            //  var cc = document.getElementById(divname);
            shareurl = window.location.href;
            if (leftsecond <= parseInt(60 * 60 * 20)) {//微信分享当天 
                sharetitle = "骏派A70 型动•心动上市直播？";
                sharedesc = "美女网红陪你嗨翻天，参与互动抢红包！";
            }
            wx_init();
        }
    });
});
