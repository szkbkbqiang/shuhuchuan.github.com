
document.write('<scri' + 'pt src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript"></s' + 'cript>');

var wx_appId = null, wx_timestamp = null, wx_nonceStr = null, wx_signature = null;
var wx_url = window.location.href;
wx_url = wx_url.replace(/&/g, '$1010101$');

$(document).ready(function () {
    $.getJSON("http://api.market.bitauto.com/webapisk/wx/common/GetSignature.ashx?callback=?", "url=" + wx_url + "", function (data) {
        if (data.success) {
            var obj = eval("(" + data.result + ")");
            wx_appId = obj.appid;
            wx_timestamp = obj.timestamp;
            wx_nonceStr = obj.nonceStr;
            wx_signature = obj.signature;

            wx_init();
        }
        else {
            if (data.result == "-2") {
                alert('token异常请联系管理员');
            }
            else if (data.result == "-3") {
                alert('ticket异常请联系管理员');
            }
        }
    });
});

function wx_error_log(res) {
    $.getJSON("http://api.market.bitauto.com/webapi/Api/Common.ashx?callback=?", "action=wx_errlog&fb=" + escape(res.errMsg) + ":" + wx_url + "", function (data) {

    });
}

function wx_success(type, content) {
    $.getJSON("http://api.market.bitauto.com/webapi/Api/Common.ashx?callback=?", "action=wx_success&id1=" + type + "&fb=" + escape(content) + ":" + wx_url + "", function (data) {

    });
    addFengXiangNum(0);
}



function addFengXiangNum(num) {
    //alert("sss");
    try {
        var body = "action=UpdateActivitiesNum&ActivitiesID=" + ActivitiesID + "&Type=" + num;

        $.getJSON("http://api.market.bitauto.com/webapi/AjaxServers/MessageNew/Handler1.ashx?callback=?", body, function (data) {

        });

    } catch (e) {
    }

}