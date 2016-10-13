/**
* Created by luwp on 2016/7/25.
*/
var ActivitiesID = 201607256; //专题编号
$(document).ready(function () {
    url = BitautoMarketSk.webapiCommonurl + "Api/Handler1.ashx";
    LoadingProvInfo();
    $('.prov').change(function () {
        LoadingCityInfo($(this).eq(0).find("option:selected").text());
    });
    $('.city').change(function () {
        LoadingDealerInfo($(this).eq(0).find("option:selected").text());
    });

    $('.denging').unbind().bind("click", subForm);

    initVedio();
    voteClickFunck();
    $('#denging1').attr("href", "javascript:submitLogin1();");
});

var jingcai_voteID = 0;
//自7月31日起 每个周日（即7月31,8月7，8月14,8月21,8月28）下午13:00-14:00进行直播

var startTime1 = "2016/7/31 13:00:00";
var startTime2 = "2016/8/7 13:00:00";
var startTime3 = "2016/8/14 13:00:00";
var startTime4 = "2016/8/21 13:00:00";
var startTime5 = "2016/8/28 13:00:00";


var endTime1 = "2016/7/31 14:00:00";
var endTime2 = "2016/8/7 14:00:00";
var endTime3 = "2016/8/14 14:00:00";
var endTime4 = "2016/8/21 14:00:00";
var endTime5 = "2016/8/28 14:00:00";
var jingcai_option = "";

function voteClickFunck() {


    $('.popbtnli').each(function (i) {
        $(this).on('touchstart', function () {
            jingcai_option = $(this).parent().siblings().eq(1).html();
            $('.votepoptitle').html(jingcai_option);
            if (nowtime > new Date(startTime1) && nowtime < new Date(endTime1)) {

                if (i == 0) {
                    jingcai_voteID = 16977;
                }
                else {
                    jingcai_voteID = 16978;
                }
               pop_vote_div();
            }
            else if (nowtime > new Date(startTime2) && nowtime < new Date(endTime2)) {
                if (i == 0) {
                    jingcai_voteID = 16979;
                }
                else {
                    jingcai_voteID = 16980;
                }
               pop_vote_div();
            }
            else if (nowtime > new Date(startTime3) && nowtime < new Date(endTime3)) {
                if (i == 0) {
                    jingcai_voteID = 16981;
                }
                else {
                    jingcai_voteID = 16982;
                }
				               pop_vote_div();
            }
            else if (nowtime > new Date(startTime4) && nowtime < new Date(endTime4)) {
                if (i == 0) {
                    jingcai_voteID = 16983;
                }
                else {
                    jingcai_voteID = 16984;
                }
				               pop_vote_div();
            }
            else if (nowtime > new Date(startTime5) && nowtime < new Date(endTime5)) {
                if (i == 0) {
                    jingcai_voteID = 16985;
                }
                else {
                    jingcai_voteID = 16986;
                }
                 pop_vote_div();
            }
            else {
                alert('直播时段即可加入战队  赢取大奖');
            }

         
        });
    });



}

function pop_vote_div() {

    $('.livelink').css('transform', 'translate3d(-1000px,0,0)');
    $('.livelink').css('left', '-10rem');
    setTimeout(function () {
        $('.votepopbox').show();
    }, 100)
}




var nowtime = new Date().getTime();
function initVedio() {
    var tempnum = -1;

    if (nowtime < new Date(startTime1)) {
        $('.livelink').attr("src", "vedio_tvc.html");
        $('.livelist').find("li").eq(0).html('Vol.1<br>敬请期待 ');
        $('.livelist').find("li").eq(0).addClass("whilevideo").siblings().removeClass("whilevideo");
    }
    else if (nowtime > new Date(startTime1) && nowtime < new Date(endTime1)) {
        $('.livelink').attr("src", "http://mudu.tv/?a=index&c=show&id=12569&type=mobile");
        $('.livelist').find("li").eq(0).html('Vol.1<br>正在直播 ');
        $('.livelist').find("li").eq(0).addClass("whilevideo").siblings().removeClass("whilevideo");
        tempnum = 0;
        getVote(1, 16977, 16978);
    }

    else if (nowtime > new Date(endTime1) && nowtime < new Date(startTime2)) {
        $('.livelist').find("li").eq(0).html('Vol.1<br>精彩回放');
        $('.livelink').attr("src", "vedio_tvc.html");
        $('.livelist').find("li").eq(1).addClass("whilevideo").siblings().removeClass("whilevideo");
    }

    else if (nowtime > new Date(startTime2) && nowtime < new Date(endTime2)) {
        $('.livelink').attr("src", "http://mudu.tv/?a=index&c=show&id=12569&type=mobile");
        $('.livelist').find("li").eq(1).html('Vol.2<br>正在直播 ');
		   $('.livelist').find("li").eq(0).html('Vol.1<br>精彩回放');
        $('.livelist').find("li").eq(1).addClass("whilevideo").siblings().removeClass("whilevideo");
        tempnum = 1;
        getVote(1, 16979, 16980);
    }
    else if (nowtime > new Date(endTime2) && nowtime < new Date(startTime3)) {

        $('.livelist').find("li").eq(0).html('Vol.1<br>精彩回放');
        $('.livelist').find("li").eq(1).html('Vol.2<br>精彩回放');
        $('.livelink').attr("src", "vedio_tvc.html");
        $('.livelist').find("li").eq(2).addClass("whilevideo").siblings().removeClass("whilevideo");

    }

    else if (nowtime > new Date(startTime3) && nowtime < new Date(endTime3)) {

        $('.livelink').attr("src", "http://mudu.tv/?a=index&c=show&id=12569&type=mobile");
        $('.livelist').find("li").eq(2).html('Vol.3<br>正在直播 ');
		$('.livelist').find("li").eq(0).html('Vol.1<br>精彩回放');
		$('.livelist').find("li").eq(1).html('Vol.2<br>精彩回放');
        $('.livelist').find("li").eq(2).addClass("whilevideo").siblings().removeClass("whilevideo");
        getVote(1, 16981, 16982);
        tempnum = 2;
    }
    else if (nowtime > new Date(endTime3) && nowtime < new Date(startTime4)) {

        $('.livelist').find("li").eq(0).html('Vol.1<br>精彩回放');
        $('.livelist').find("li").eq(1).html('Vol.2<br>精彩回放');
        $('.livelist').find("li").eq(2).html('Vol.3<br>精彩回放');
        $('.livelink').attr("src", "vedio_tvc.html");
        $('.livelist').find("li").eq(3).addClass("whilevideo").siblings().removeClass("whilevideo");

    }
    else if (nowtime > new Date(startTime4) && nowtime < new Date(endTime4)) {

        $('.livelink').attr("src", "http://mudu.tv/?a=index&c=show&id=12569&type=mobile");
        $('.livelist').find("li").eq(3).html('Vol.4<br>正在直播 ');
		   $('.livelist').find("li").eq(0).html('Vol.1<br>精彩回放');
		      $('.livelist').find("li").eq(1).html('Vol.2<br>精彩回放');
			     $('.livelist').find("li").eq(2).html('Vol.3<br>精彩回放');
        $('.livelist').find("li").eq(3).addClass("whilevideo").siblings().removeClass("whilevideo");
        getVote(1, 16983, 16984);
        tempnum = 3;
    }

    else if (nowtime > new Date(endTime4) && nowtime < new Date(startTime5)) {
        $('.livelist').find("li").eq(0).html('Vol.1<br>精彩回放');
        $('.livelist').find("li").eq(1).html('Vol.2<br>精彩回放');
        $('.livelist').find("li").eq(2).html('Vol.3<br>精彩回放');
        $('.livelist').find("li").eq(3).html('Vol.4<br>精彩回放');
        $('.livelink').attr("src", "vedio_tvc.html");
        $('.livelist').find("li").eq(4).addClass("whilevideo").siblings().removeClass("whilevideo");
    }
    else if (nowtime > new Date(startTime5) && nowtime < new Date(endTime5)) {

        $('.livelink').attr("src", "http://mudu.tv/?a=index&c=show&id=12569&type=mobile");
        $('.livelist').find("li").eq(4).html('Vol.5<br>正在直播 ');
		$('.livelist').find("li").eq(0).html('Vol.1<br>精彩回放');
        $('.livelist').find("li").eq(1).html('Vol.2<br>精彩回放');
        $('.livelist').find("li").eq(2).html('Vol.3<br>精彩回放');
        $('.livelist').find("li").eq(3).html('Vol.4<br>精彩回放');
        $('.livelist').find("li").eq(4).addClass("whilevideo").siblings().removeClass("whilevideo");
        getVote(1, 16985, 16986);
        tempnum = 4;
    }
    else if (nowtime > new Date(endTime5)) {

        $('.livelist').find("li").eq(0).html('Vol.1<br>精彩回放');
        $('.livelist').find("li").eq(1).html('Vol.2<br>精彩回放');
        $('.livelist').find("li").eq(2).html('Vol.3<br>精彩回放');
        $('.livelist').find("li").eq(3).html('Vol.4<br>精彩回放');
        $('.livelist').find("li").eq(5).html('Vol.5<br>精彩回放');
        $('.livelink').attr("src", "vedio5.html");
        $('.livelist').find("li").eq(5).addClass("whilevideo").siblings().removeClass("whilevideo");
    }


    $('.livelist').find("li").each(function (i) {
        $(this).bind("click", function () {
            if (tempnum == i) {
                $('.livelink').attr("src", "http://mudu.tv/?a=index&c=show&id=12569&type=mobile");
            }
            else {
                $('.livelink').attr("src", "vedio" + (i + 1).toString() + ".html");
            }
            $(this).addClass("whilevideo").siblings().removeClass("whilevideo");
        });
    });

}



function subForm() {
    var userObj = {
        name: "",
        phone: "",
        sex: "",
        prov: "",
        city: "",
        dealer: "",
        chexing: "",
        buytime: "",
        email: ""
    }
    userObj.name = $.trim($('.LoginName').eq(0).val());
    userObj.phone = $.trim($('.LoginPhone').eq(0).val());
    userObj.email = $('#email').val();
    userObj.prov = $('.prov').eq(0).find("option:selected").text();
    userObj.city = $('.city').eq(0).find("option:selected").text();
    userObj.dealer = $('.dealer').eq(0).find("option:selected").text();
    userObj.chexing = $('#chexing').find("option:selected").text();
    userObj.buytime = $('#buytime').find("option:selected").text();

    //下拉框
    userObj.sex = $('#sex').find("option:selected").text();
    // userObj.sex = userObj.sex == "请选择" ? "" : userObj.sex;
    //单选按钮
    //var sex = $('input[name="sex"]:checked').val();
    userObj.name = userObj.name == "姓名" ? "" : userObj.name;
    userObj.phone = userObj.phone == "手机号码" ? "" : userObj.phone;
    userObj.sex = userObj.sex == "性别" ? "" : userObj.sex;
    userObj.prov = userObj.prov == "所在省/直辖市" ? "" : userObj.prov;
    userObj.city = userObj.city == "所在市/区" ? "" : userObj.city;
    userObj.dealer = userObj.dealer == "选择经销商" ? "" : userObj.dealer;
    userObj.chexing = userObj.chexing == "意向车型" ? "" : userObj.chexing;
    userObj.buytime = userObj.buytime == "近期购车意向" ? "" : userObj.buytime;
    userObj.provId = "";
    userObj.cityId = "";
    userObj.dealerId = "";
    if (checkFrom(userObj)) {
        for (var u in userObj) {
            userObj[u] = userObj[u] == undefined ? "" : userObj[u];
        }
        dengingLogin(userObj);
    }
}

/*
注册表单验证
*/
function checkFrom(userObj) {
    if (userObj.name == "") {
        alert('请填写姓名');
        return false;
    } else {
        if (GetStringRealLength(userObj.name) > 20) {
            alert('请输入正确的姓名');
            return false;
        }
    }
    if (exist("sex")) {
        if (userObj.sex == "") {
            alert('请选择性别');
            return false;
        }
    }
    if (userObj.phone == "") {
        alert('请填写手机号');
        return false;
    }
    else {
        if (!isMobile(userObj.phone)) {
            alert('请填写正确的手机号，如:13012345678');
            return false;
        }
    }
    if (exist("email")) {
        if (userObj.email != "") {
            if (!isMail(userObj.email)) {
                alert('请填写正确的邮箱号，如:yiche@qq.com');
                return false;
            }
        }
    }
    if (userObj.prov == "") {
        alert('请选择省份');
        return false;
    }
    if (userObj.city == "") {
        alert('请选择城市');
        return false;
    }
    if (userObj.dealer == "") {
        alert('请选择经销商');
        return false;
    }
    if (exist("chexing")) {
        if (userObj.chexing == "") {
            alert('请选择意向车型');
            return false;
        }
    }


    if (exist("buytime")) {
        if (userObj.buytime == "") {
            alert('请选择预计购车时间');
            return false;
        }
    }

    //if (!$('#check1').is(':checked')) {
    //    alert('请勾选 您的个人资料有可能会提交至北京现代厂商的授权经销商或易车客服，与您进一步沟通试驾、购车等事宜。');
    //    return false;
    //}

    return true;
}
/*
注册表单重置
*/
function Empty() {
    $('.LoginName').eq(0).val('');
    $('.LoginPhone').eq(0).val('');
    $('#sex').val('-1');
    $('.prov').eq(0).val('-1');
    $('.city').eq(0).val('-1');
    $('.dealer').eq(0).val('-1');
    $('#chexing').val('-1');
    $('#buytime').val('-1');

    $(".placeholder").each(function (i) {
        var defaultval = $(".placeholder").eq(i).val();
        $(this).bind({
            focus: function () {
                if ($(this).val() == defaultval) {
                    $(this).val("")
                }
            },
            blur: function () {
                if ($(this).val() == "") {
                    $(this).val(defaultval)
                }
            }
        })
    });

}
/*
注册表单提交
*/

function dengingLogin(userObj) {
    var YOrderTypeID = 1; //订单类型
    var YDealerID = ""; //经销商ID 销售提供
    var YLocationID = ""; //地区id
    var YUserIP = ""; //用户IP
    var YCarSerialId = '';
    ;  //车型ID 销售提供
    var YCarId = ""; //车款ID 销售提供
    //消息推送参数开始
    var msgUserId = 0; //易车会员ID
    var msgAddress = 0;  //地址
    var msgbsid = "78"; //车型品牌
    var msgcsid = ''; //车型
    try {
        if (Bitauto.Login.result.isLogined == true) {
            msgUserId = Bitauto.Login.result.userId;
        }
    } catch (err) {

    }

    try {
        YLocationID = bit_locationInfo.cityId
    } catch (e) {

    }
    try {
        YUserIP = bit_locationInfo.IP;
    } catch (e1) {

    }
    var xcweblog = "";
    try {
        xcweblog = XCWEBLOG_ID;
    } catch (err1) {
    }

    var filedgstr = "";
    var marketfromad = request("marketfromad");
    try {
        var fgcx = request("fgcx");
        if (fgcx == "yes") {
            if (filedgstr == "") {
                filedgstr = "6";
            }
            else {
                filedgstr += "(6)";
            }
        }
    } catch (err2) {

    }

    if (marketfromad == "") {
        filedgstr += marketfromad;
    }
    else {
        filedgstr += "(" + marketfromad + ")";
    }
    var SMARTCODE = request("SMARTCODE");
    var cityName = "";
    try {
        cityName = bit_locationInfo.cityName;
    } catch (e) {
    }

    var str = escapeStr('' + ',' + userObj.name + ',' + userObj.phone + ',' + userObj.prov + ',' + userObj.city + ',' + userObj.dealer + ',' + filedgstr + ',' + userObj.sex + ',' + userObj.chexing + ',' + userObj.email + ',' + userObj.buytime + ',' + ',' + ',,,' + xcweblog + ',' + userObj.provId + ',' + userObj.cityId + ',' + userObj.dealerId);

    var body = "isonlyphone=3&istdata=1&SMARTCODE=" + escapeStr(SMARTCODE) + "&strC=" + escapeStr(cityName); //常规参数
    body += "&isPostYiPai=0&YOrderTypeID=" + YOrderTypeID + "&YDealerID=" + YDealerID + "&YLocationID=" + YLocationID + "&YUserIP=" + YUserIP + "&YCarSerialId=" + YCarSerialId + "&YCarId=" + YCarId + ""; //易湃订单参数
    //消息推送传参开始
    body += "&isPushMsg=1&msgUserId=" + msgUserId + "&msgIP=" + YUserIP + "&msgAddress=" + msgAddress + "&msgCityId=" + YLocationID + "&msgbsid=" + msgbsid + "&msgcsid=" + msgcsid + ""; //发送消息参数
    //消息推送传参结束
    body += "&action=insert&actid=" + ActivitiesID + "&data=" + str; //报名参数
    $('.denging').eq(1).unbind();
    $.getJSON(url + "?callback=?", body, function (data) {
        if (data.success) {
            alert('报名成功，感谢您的关注！');
            Empty();
        }
        else {
            if (data.result == '-2') {
                alert('此手机号已报过名，请勿重复报名');
                Empty();
            }
            else {
                alert('报名失败');
            }
        }
        $('.denging').eq(1).bind("click", subForm);
    });
}
/*
省份城市经销商联动
*/
function LoadingProvInfo() {
    var prostr = "<option value=\"" + "-1" + "\">" + "所在省/直辖市" + "</option>";
    for (var i = 0; i < JSonData.Information.length; i++) {
        if (prostr.indexOf(JSonData.Information[i].prov) < 0) {

            prostr += "<option value=" + JSonData.Information[i].provId + ">" + JSonData.Information[i].prov + "</option>";
        }
    }
    $('.prov').eq(0).html(prostr);
    $('.prov').eq(1).html(prostr);
}
function LoadingCityInfo(prov) {
    var ctystr = "<option value=\"" + "-1" + "\">" + "所在市/区" + "</option>";
    for (var i = 0; i < JSonData.Information.length; i++) {
        if (ctystr.indexOf(JSonData.Information[i].city) < 0) {
            if (JSonData.Information[i].prov == prov) {
                ctystr += "<option value=" + JSonData.Information[i].cityId + ">" + JSonData.Information[i].city + "</option>";
            }
        }
    }
    $('.city').eq(0).html(ctystr);
    $('.city').eq(1).html(ctystr);
}
function LoadingDealerInfo(city) {
    var delstr = "<option value=\"" + "-1" + "\">" + "选择经销商" + "</option>";
    for (var i = 0; i < JSonData.Information.length; i++) {
        if (JSonData.Information[i].city == city) {
            delstr += "<option value=" + JSonData.Information[i].dealerId + ">" + JSonData.Information[i].dealer + "</option>";
        }
    }
    $('.dealer').eq(0).html(delstr);
    $('.dealer').eq(1).html(delstr);
}




//---------------------------------------------------竞猜留资----------2--------------------------



function VerifyLogin1() {
    var LoginName = $.trim($('#LoginName1').val());
    var LoginPhone = $.trim($('#LoginPhone1').val());


    if (LoginName == "") {
        alert('请填写姓名');
        return false;
    } else {
        if (GetStringRealLength(LoginName) > 20) {
            alert('请输入正确的姓名');
            return false;
        }
    }


    if (LoginPhone == "") {
        alert('请填写手机号');
        return false;
    }
    else {
        if (!isMobile(LoginPhone)) {
            alert('请填写正确的手机号，如:13012345678');
            return false;
        }
    }

    return true;
}
function Empty1() {
    $('#LoginName1').val('');
    $('#LoginPhone1').val('');
}


function submitLogin1() {
    if (VerifyLogin1()) {


        var YOrderTypeID = 1; //订单类型
        var YDealerID = 0; //经销商ID 销售提供
        var YLocationID = ""; //地区id
        var YUserIP = ""; //用户IP
        var YCarSerialId = 0;  //车型ID 销售提供
        var YCarId = 0; //车款ID 销售提供

        //消息推送参数开始
        var msgUserId = 0; //易车会员ID
        var msgAddress = 0;  //地址
        var msgbsid = ""; //车型品牌
        var msgcsid = ""; //车型
        try {
            if (Bitauto.Login.result.isLogined == true) {
                msgUserId = Bitauto.Login.result.userId;
            }
        } catch (err) {

        }

        try {
            YLocationID = bit_locationInfo.cityId
        } catch (e) {

        }
        try {
            YUserIP = bit_locationInfo.IP;
        } catch (e1) {

        }
        var xcweblog = "";
        try {
            xcweblog = XCWEBLOG_ID;
        } catch (err1)
        { }



        //  alert(msgAddress);

        var LoginName = jQuery('#LoginName1').val() == undefined ? "" : jQuery('#LoginName1').val();
        var LoginPhone = jQuery('#LoginPhone1').val() == undefined ? "" : jQuery('#LoginPhone1').val();




        var cityName = "";
        try {
            cityName = bit_locationInfo.cityName;
        } catch (e) {

        }
        //var str = escapeStr(',' + LoginName + ',' + LoginPhone + ',' + prov + ',' + city + ',' + dealer + ',' + filedgstr + ',' + sex + ',' + chexing + ',' + Email + ',' + buytime + ',' + ',' + ',,,' + xcweblog + ',' + provid + ',' + cityid + ',' + dealerid);                      //生成以","为分隔符的字符串
        var str = escapeStr(',' + LoginName + ',' + LoginPhone + ',' + ',' + ',' + ',' + ',' + ',' + ',' + ',' + ',' + ',' + jingcai_voteID + ',,,' + xcweblog);
        var body = "isonlyphone=3&istdata=1" + "&strC=" + escapeStr(cityName); //常规参数
        body += "&isPostYiPai=0&YOrderTypeID=" + YOrderTypeID + "&YDealerID=" + YDealerID + "&YLocationID=" + YLocationID + "&YUserIP=" + YUserIP + "&YCarSerialId=" + YCarSerialId + "&YCarId=" + YCarId + ""; //易湃订单参数
        //消息推送传参开始
        body += "&isPushMsg=1&msgUserId=" + msgUserId + "&msgIP=" + YUserIP + "&msgAddress=" + msgAddress + "&msgCityId=" + YLocationID + "&msgbsid=" + msgbsid + "&msgcsid=" + msgcsid + ""; //发送消息参数
        //消息推送传参结束
        body += "&action=insert&actid=" + "201607298" + "&data=" + str; //报名参数
        $('#denging1').removeAttr("href");
        // $('#denging').unbind();
        $.getJSON(url + "?callback=?", body, function (data) {
            if (data.success) {
                //                alert('报名成功！');
                //                Empty();
                add_vote_option_num(data.result);
            }
            else {
                //alert(data.message);
                if (data.result == '-2') {
                    add_vote_option_num(data.message);
                }
                else {
                    if (data.result == "-3") {
                        alert('验证码输入有误');
                    }

                    else {
                        alert('提交失败');
                    }

                }
            }
            $('#denging1').attr("href", "javascript:submitLogin1();");
            // $('#denging').bind("click", submitLogin);
        });


    }
}
var ActivitiesID1 = 201607298;

function add_vote_option_num(voteRecId) {


    $.getJSON('http://api.market.bitauto.com/webapi/AjaxServers/CommonBallot2012/VoteNew.ashx?jsoncallback=?', {
        ResourceID: jingcai_voteID,
        actid: ActivitiesID1,
        userid: voteRecId
    }, function (json) {
        // alert(json.result);
        if (json.success == "false") {
            if (json.result == "-1" || json.result == "-2") {
                alert('温馨提示：此期您已经参加过竞猜了！');
            }
        }
        else {
            setM(jingcai_option, voteRecId);
            alert("您的竞猜项已提交成功~");
        }
    });



}

function setM(result, recid) {
    var body = "action=updateByFieldM&actid=" + ActivitiesID1 + "&id1=" + recid + "&fm=" + result; //报名参数
    $.getJSON(url + "?callback=?", body, function (data) {
        if (data.success) {

        }
    });
}




function getVote(pageIndex, now_voteid_a, now_voteid_b) {
    //    $.getJSON('http://api.market.bitauto.com/webapi/AjaxServers/CommonBallot2012/GetResourcesInfo.ashx?jsoncallback=?', {
    //        ActivitiesID: ActivitiesID1,
    //        GetList: "yes",
    //        PageSize: "10",
    //        PageIndex: pageIndex == undefined ? 1 : pageIndex,
    //        VoteCount2: 10
    //    }, function (json) {
    //        var voteSum = 0, dzId = "";
    //        for (var i = 0; i < json.ResourcesList.length; i++) {
    //            voteSum = json.ResourcesList[i].VoteCount;
    //            dzId = json.ResourcesList[i].RecID;
    //            if (dzId == now_voteid_a) {
    //                $('#now_voteid_a').html("人气：" + voteSum);
    //            }
    //            if (dzId == now_voteid_b) {
    //                $('#now_voteid_b').html("人气：" + voteSum);
    //            }
    //        }
    //    });




    selectcount_a();

    selectcount_b();

}





function selectcount_a() {
    var str = '';
    var body = "action=count&actid=" + ActivitiesID1 + "&id1=1";

    $.getJSON(url + "?callback=?", body, function (data) {
        if (data.success) {
            $('#reqi1').html("人气：" + data.result + "人");
        }

    });

}

function selectcount_b() {
    var str = '';
    var body = "action=count&actid=" + ActivitiesID1 + "&id1=2";

    $.getJSON(url + "?callback=?", body, function (data) {
        if (data.success) {
            $('#now_voteid_a').html("人气：" + data.result);
            $('#now_voteid_b').html("人气：" + data.message);
        }

    });

}





//----------------end--------------------------------------------------------------------