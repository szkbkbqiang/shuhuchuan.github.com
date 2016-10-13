//author:Ma WeiHai

var ActivitiesID = 201609052;
//var ActivitiesID = 201608055;

var url = "";
var imgurl = "";

$(document).ready(function () {
    var focusstus = false;
    $(':input').focus(function () {
        focusstus = true;
    });
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) { // enter 键
            if (focusstus) {
                submitLogin();
            }
        }
    };
});
$(document).ready(function () {
    url = BitautoMarketSk.webapiCommonurl + "Api/Handler1.ashx";
    // url = "http://localhost:49716/Api/Handler1.ashx";
   // imgurl = "http://localhost:49716";
     imgurl = "http://api2.market.bitauto.com/webapi";
    LoadingProvInfo();
    $('#prov').change(function () {
        LoadingCityInfo($('#prov').find('option:selected').text());
    });
    $('#city').change(function () {
        LoadingDealerInfo($('#city').find('option:selected').text());
    });
    $('#denging').unbind().bind("click", submitLogin);
    $('#qiangchemo').unbind().bind("click", CheMoPrize);

});


function LoadingProvInfo() {
    var prostr = "<option value=\"" + "-1" + "\">" + "省份" + "</option>";
    for (var i = 0; i < JSonData.Information.length; i++) {
        if (prostr.indexOf(JSonData.Information[i].prov) < 0) {
            prostr += "<option value=" + JSonData.Information[i].provId + ">" + JSonData.Information[i].prov + "</option>";
        }
    }
    $('#prov').html(prostr);
}
function LoadingCityInfo(prov) {
    var ctystr = "<option value=\"" + "-1" + "\">" + "城市" + "</option>";
    for (var i = 0; i < JSonData.Information.length; i++) {
        if (JSonData.Information[i].prov == prov) {
            if (ctystr.indexOf(JSonData.Information[i].city) < 0) {
                ctystr += "<option value=" + JSonData.Information[i].cityId + ">" + JSonData.Information[i].city + "</option>";
            }
        }
    }
    $('#city').html(ctystr);
    var delstr = "<option value=\"" + "-1" + "\">" + "选择经销商" + "</option>"; //经销商初始化
    $('#dealer').html(delstr);
}

function LoadingDealerInfo(city) {
    var delstr = "<option value=\"" + "-1" + "\">" + "选择经销商" + "</option>";
    for (var i = 0; i < JSonData.Information.length; i++) {
        if (JSonData.Information[i].city == city) {
            delstr += "<option value=" + JSonData.Information[i].dealerId + ">" + JSonData.Information[i].dealer + "</option>";
        }
    }
    $('#dealer').html(delstr);
}



function checkLoging() {
    var dzrecid = GetCookie('dzrecid_2016' + ActivitiesID);
    if (dzrecid == "" || dzrecid == undefined || dzrecid == null) {
        return false
    }
    return true;
}



//解析参数
function request(paras) {
    var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {}
    for (i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }
}
function isMobile(mobile) {
    return (/^(?:13\d|15\d|17\d|18\d|145|147)-?\d{5}(\d{3}|\*{3})$/.test(mobile));
}
function isMail(mail) {
    return (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(mail));
}

function is15sfz(sfz) {
    return (/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(sfz));
}
function is18sfz(sfz) {
    return (/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(sfz));
}
function GetStringRealLength(str) {
    var bytesCount = 0;
    if (str) {
        for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (/^[\u0000-\u00ff]$/.test(c)) //匹配双字节
            {
                bytesCount += 1;
            } else {
                bytesCount += 2;
            }
        }
    }
    return bytesCount;
}

//写cookies函数
function SetCookie(name, value) //两个参数，一个是cookie的名子，一个是值
{
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escapeStr(value) + ";expires=" + exp.toGMTString() + ';domain=bitauto.com;path=/;';
}

//写cookies函数
function SetCookie2(name, value) //两个参数，一个是cookie的名子，一个是值
{
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 1 * 1 * 60 * 1000);
    document.cookie = name + "=" + escapeStr(value) + ";expires=" + exp.toGMTString() + ';domain=bitauto.com;path=/;';
}
function GetCookie(name) //取cookies函数
{
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;

}
function DelCookie(name) //删除cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = GetCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";domain=bitauto.com;path=/;";
}

function escapeStr(str) {
    return escape(str).replace(/\+/g, '%2B').replace(/\"/g, '%22').replace(/\'/g, '%27').replace(/\//g, '%2F');
}

function exist(id) {
    var s = document.getElementById(id);

    if (s) {
        return true;
    }
}

function VerifyLogin() {
    var LoginName = $.trim($('#LoginName').val());
    var LoginPhone = $.trim($('#LoginPhone').val());
    var sex = $.trim($('#sex').val());
    var prov = $.trim($('#prov').val());
    var city = $.trim($('#city').val());
    var dealer = $.trim($('#dealer').val());
    if (exist("LoginName")) {
        if (LoginName == "" || LoginName == "您的姓名") {
            alert('请填写姓名');
            return false;
        } else {
            if (GetStringRealLength(LoginName) > 20) {
                alert('请输入正确的姓名');
                return false;
            }
        }
    }
    if (exist("sex")) {
        if (sex == "-1") {
            alert('请选择性别');
            return false;
        }

    }


    if (exist("LoginPhone")) {
        if (LoginPhone == "" || LoginPhone == "电话") {
            alert('请填写手机号');
            return false;
        } else {
            if (!isMobile(LoginPhone)) {
                alert('请填写正确的手机号，如:13012345678');
                return false;
            }
        }
    }


    if (exist("prov")) {
        if (prov == "-1") {
            alert('请选择省份');
            return false;
        }

    }

    if (exist("city")) {
        if (city == "-1") {
            alert('请选择所在城市');
            return false;
        }

    }

    if (exist("dealer")) {
        if (dealer == "-1") {
            alert('请选择经销商');
            return false;
        }
    }

    return true;
}
function Empty() {
    $('#LoginName').val('');
    $('#LoginPhone').val('');
    $('#dealer').val('-1');
    $('#city').val('-1');
    $('#prov').val('-1');
    $('#sex').val('-1');
    $('#dealer').html("<option value=\"" + "-1" + "\">" + "选择经销商" + "</option>");
    $('#city').html("<option value=\"" + "-1" + "\">" + "城市" + "</option>");
}

function submitLogin() {
    if (VerifyLogin()) {
        var YOrderTypeID = 1; //订单类型
        var YDealerID = 0; //经销商ID 销售提供
        var YLocationID = ""; //地区id
        var YUserIP = ""; //用户IP
        var YCarSerialId = 0; //车型ID 销售提供
        var YCarId = 0; //车款ID 销售提供

        //消息推送参数开始
        var msgUserId = 0; //易车会员ID
        var msgAddress = 0; //地址
        var msgbsid = "53"; //车型品牌
        var msgcsid = ""; //车型
        try {
            if (Bitauto.Login.result.isLogined == true) {
                msgUserId = Bitauto.Login.result.userId;
            }
        } catch (err) { }

        try {
            YLocationID = bit_locationInfo.cityId
        } catch (e) { }
        try {
            YUserIP = bit_locationInfo.IP;
        } catch (e1) { }
        var xcweblog = "";
        try {
            xcweblog = XCWEBLOG_ID;
        } catch (err1) { }

        //  alert(msgAddress);

        var LoginName = jQuery('#LoginName').val() == undefined ? "" : jQuery('#LoginName').val();
        var LoginPhone = jQuery('#LoginPhone').val() == undefined ? "" : jQuery('#LoginPhone').val();
        var chexing = jQuery('#chexing').find("option:selected").text() == undefined ? "" : jQuery('#chexing').find("option:selected").text();
        var city = jQuery('#city').find("option:selected").text() == undefined ? "" : jQuery('#city').find("option:selected").text();
        var dealer = jQuery('#dealer').find("option:selected").text() == undefined ? "" : jQuery('#dealer').find("option:selected").text();
        var prov = jQuery('#prov').find("option:selected").text() == undefined ? "" : jQuery('#prov').find("option:selected").text();

        var sex = jQuery('#sex').find("option:selected").text() == undefined ? "" : jQuery('#sex').find("option:selected").text();
        var filedgstr = "";
        var marketfromad = request("marketfromad");
        try {
            var fgcx = request("fgcx");
            if (fgcx == "yes") {
                if (filedgstr == "") {
                    filedgstr = "6";
                } else {
                    filedgstr += "(6)";
                }
            }
        } catch (err2) { }

        if (marketfromad == "") {
            filedgstr += marketfromad;
        } else {
            filedgstr += "(" + marketfromad + ")";
        }

        var SMARTCODE = request("SMARTCODE");

        var cityName = "";
        try {
            cityName = bit_locationInfo.cityName;
        } catch (e) { }
        var str = escapeStr(',' + LoginName + ',' + LoginPhone + ',' + prov + ',' + city + ',' + dealer + ',' + filedgstr + ',' + sex + ',' + chexing + ',' + ',' + ',' + ',' + ',,,' + xcweblog);
        var body = "isonlyphone=3&istdata=1&SMARTCODE=" + escapeStr(SMARTCODE) + "&strC=" + escapeStr(cityName); //常规参数
        body += "&isPostYiPai=0&YOrderTypeID=" + YOrderTypeID + "&YDealerID=" + YDealerID + "&YLocationID=" + YLocationID + "&YUserIP=" + YUserIP + "&YCarSerialId=" + YCarSerialId + "&YCarId=" + YCarId + ""; //易湃订单参数
        //消息推送传参开始
        body += "&isPushMsg=1&msgUserId=" + msgUserId + "&msgIP=" + YUserIP + "&msgAddress=" + msgAddress + "&msgCityId=" + YLocationID + "&msgbsid=" + msgbsid + "&msgcsid=" + msgcsid + ""; //发送消息参数
        //消息推送传参结束
        body += "&action=insert&actid=" + ActivitiesID + "&data=" + str; //报名参数
        //alert(url + "?callback=?" + "===" + body);
        $('#denging').unbind();
        $.getJSON(url + "?callback=?", body, function (data) {
            if (data.success) {
                var recId = data.result;
                SetCookie('dzrecid_2016' + ActivitiesID, recId);
                alert('报名成功！');
                Empty();
            } else {

                if (data.result == '-2') {
                    //                    alert('此手机号已报过名，无法再参加');
                    userLogin();
                } else {
                    alert('报名失败');
                }
            }
            $('#denging').bind("click", submitLogin);
        });
    }
}


function userLogin() {
    var userphone = $.trim($("#LoginPhone").val());
    var body = "action=checkByFieldC&actid=" + ActivitiesID + "&fc=" + userphone; //报名参数 
    $.getJSON(url + "?callback=?", body, function (data) {
        if (data.success) {
            var recId = data.result;
            SetCookie('dzrecid_2016' + ActivitiesID, recId);
        }
        else {
            alert('操作失败，请刷新重试！');
        }
    });
}

function CheMoPrize() {
    if (!checkLoging()) {
        alert("请先报名试驾再来抽奖吧！");
        return;
    }
    var LoginUserID = GetCookie('dzrecid_2016' + ActivitiesID);
    //    var LoginUserID = "351195";
    var body = "LoginUserID=" + LoginUserID;  //查询参数
    //    var chemoprizeurl = "http://localhost:49716/AjaxServers/2016/yiqi_zhibo_201609052/Handler1.ashx";
    var chemoprizeurl = BitautoMarketSk.webapiCommonurl + "AjaxServers/2016/yiqi_zhibo_201609052/Handler1.ashx";

    $.getJSON(chemoprizeurl + "?callback=?", body, function (data) {
        if (data.result != "") {
            var item = data.result;
            switch (parseInt(item)) {
                case 0: //谢谢参与 
                    //                    $public.alertFail({ title: '<div class="notWinning">非常遗憾，您未中奖！</div>' });
                    alert("非常遗憾，您未中奖！");
                    break;
                case -2:
                    alert('对不起,您的抽奖机会已用完！！');
                    break;
                case -4:
                    alert('此活动已结束！');
                    break;
                case -5:
                    alert('直播尚未开始，车模再等等吧！');
                    break;
                case 1:

                    //                    $public.alertFail({ title: '<div class="winning"><p>恭喜获得</p><p>天津一汽原厂车模大礼一份</p></div><div class="winningtips"></div>', more: true });
                    alert("恭喜获得天津一汽原厂车模大礼一份！");
                    break;

                default:
                    alert('系统异常，请联系管理员！');

                    break;
            }

        }
        else {
            alert('系统异常，请联系管理员！');
        }

    });
}