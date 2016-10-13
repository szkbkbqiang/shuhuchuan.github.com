<?php
require('Jssdk.class.php');

$wx_jsapi_list = array(
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareQZone',
        'openLocation'
    );

$signPackage = getwechatsign();
function getwechatsign(){
    $jssdk = new Jssdk("wx069d3f045c334934", "34c82b350102c847670fb53409e0ce12");
    $signPackage = $jssdk->GetSignPackage();
    return $signPackage;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta name="keywords" content="">
<meta name="description" content="">
<meta content="telephone=no" name="format-detection" />
<title>杨眼眼_MR.JUZI-再生_邀请函</title>
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/swiper.min.css">
<link rel="stylesheet" href="css/animate.css">
<script src="js/viewport.js"></script>
<script src="js/swiper.min.js"></script>
<script src="js/jquery.1.11.1.min.js"></script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: '<?php echo $signPackage["appId"];?>',
				timestamp: '<?php echo $signPackage["timestamp"];?>',
				nonceStr: '<?php echo $signPackage["nonceStr"];?>',
				signature: '<?php echo $signPackage["signature"];?>',
                jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone','openLocation']// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function(){
                // 检测接口是否可用
                // wx.checkJsApi({
                //     jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareQZone','openLocation'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                //     success: function(res) {
                //         // 以键值对的形式返回，可用的api值true，不可用为false
                //         // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                //         console.log(res);
                //     }
                // });
                // 分享到朋友圈
                wx.onMenuShareTimeline({
                    title: '杨眼眼 [Mr.JUZi-再生]艺术展_邀请函', // 分享标题
                    link: window.location.href, // 分享链接
                    imgUrl: 'http://mrjuzi.yueyanzhao.cn/images/42721290658455964.jpg', // 分享图标
                    success: function () { 
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () { 
                        // 用户取消分享后执行的回调函数
                    }
                });
                // 分享给朋友
                wx.onMenuShareAppMessage({
                    title: '杨眼眼 [Mr.JUZi-再生]艺术展_邀请函', // 分享标题
                    desc: '一起把C装进灵魂里2016.9.23-10.7 北京国际设计周 |杨眼眼#Mr.JUZi 再生艺术展#过去/留下/与再生。', // 分享描述
                    link: window.location.href, // 分享链接
                    imgUrl: 'http://mrjuzi.yueyanzhao.cn/images/42721290658455964.jpg', // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () { 
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () { 
                        // 用户取消分享后执行的回调函数
                    }
                });
                // 分享到QQ
                wx.onMenuShareQQ({
                    title: '杨眼眼 [Mr.JUZi-再生]艺术展_邀请函', // 分享标题
                    desc: '一起把C装进灵魂里2016.9.23-10.7 北京国际设计周 |杨眼眼#Mr.JUZi 再生艺术展#过去/留下/与再生。', // 分享描述
                    link: window.location.href, // 分享链接
                    imgUrl: 'http://mrjuzi.yueyanzhao.cn/images/42721290658455964.jpg', // 分享图标
                    success: function () { 
                       // 用户确认分享后执行的回调函数
                    },
                    cancel: function () { 
                       // 用户取消分享后执行的回调函数
                    }
                });
                // 分享到QQ空间
                wx.onMenuShareQZone({
                    title: '杨眼眼 [Mr.JUZi-再生]艺术展_邀请函', // 分享标题
                    desc: '一起把C装进灵魂里2016.9.23-10.7 北京国际设计周 |杨眼眼#Mr.JUZi 再生艺术展#过去/留下/与再生。', // 分享描述
                    link: window.location.href, // 分享链接
                    imgUrl: 'http://mrjuzi.yueyanzhao.cn/images/42721290658455964.jpg', // 分享图标
                    success: function () { 
                       // 用户确认分享后执行的回调函数
                    },
                    cancel: function () { 
                        // 用户取消分享后执行的回调函数
                    }
                });
                // 使用微信内置地图查看位置接口
                $('.mapimg, .mapimg_1').on('click',function(){
                    wx.openLocation({
                        latitude: 39.9238351469, // 纬度，浮点数，范围为90 ~ -90
                        longitude: 116.3609631474, // 经度，浮点数，范围为180 ~ -180。
                        name: 'Mr.JUZi - 再生', // 位置名
                        address: '杨眼眼 [Mr.JUZi-再生]艺术展_邀请函', // 地址详情说明
                        scale: 18, // 地图缩放级别,整形值,范围从1~28。默认为最大
                        infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
                    });
                })
            }); 
</script>
</head>
<body>
	<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide tablist1">
            	<img class="logo fadeIn animated animated2" src="images/logo.png" alt="">
            	<img class="gqimg  fadeIn animated animated2" src="images/gqimg_02.png" alt="">
				<img class="zsimg  fadeIn animated animated2" src="images/zsimg_02.png" alt="">
				<img class="yqhimg fadeIn animated animated3" src="images/yqhimg_02.png" alt="">
				<img class="text2_02  fadeIn animated animated4" src="images/text2_02.png" alt="">
				<img class="text1_03  fadeIn animated animated4" src="images/text1_03.png" alt="">
				<img class="topimg" src="images/top_03.png" alt="">
            </div>
            <div class="swiper-slide tablist2">
				<img class="logo list2logo" src="images/logo.png" alt="">
				<img class="zsimg_list2" src="images/zsimg_03_02.png" alt="">
				<img class="xrimg" src="images/xrimg_02.png" alt="">
				<img class="gqwlimg" src="images/gqwlimg.png" alt="">
				<img class="rebimg" src="images/rebimg.png" alt="">
            	<img class="topimg" src="images/top_03.png" alt="">
            </div>
            <div class="swiper-slide tablist3">
				<div class="maploca">
					<p class="font30">北京国际设计周-白塔寺再生计划</p>
  					<p class="font22">9月23日-10月7日</p>
  					<p class="font36">《 Mr.JUZi - 再生 》</p>
				</div>
				<div class="mapbox">
					北京市西城区阜成门内大街235号<br>
					<a href="javascript:;" class="mapbox_a">
                        <img class="mapimg" src="images/mapimg_03.png" alt="">
                        <img class="mapimg_1" src="images/mapimg_03_1.png" alt="">
                    </a>
				</div>
            	<img class="topimg" src="images/top_03.png" alt="">
            </div>
             <div class="swiper-slide tablist4">
				<img class="list4img" src="images/list4img_02.png" alt="">
                <div class="sharebg" ></div>
            </div>
        </div>
    </div>
    <script>
    	var mySwiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                loop: false,
                longSwipesRatio: 0.2,
                onTransitionStart:function(swiper){
                  if(swiper.activeIndex == 1){  //当进入第一页是执行动画
            		document.querySelector('.list2logo').className = 'logo list2logo bounceInLeft animated';
            		document.querySelector('.zsimg_list2').className = 'zsimg_list2 bounceInLeft animated animated2';
            		document.querySelector('.xrimg').className = 'xrimg rotateimg animated animated3';
            		document.querySelector('.gqwlimg').className = 'gqwlimg bounceInUp animated animated4';
            		document.querySelector('.rebimg').className = 'rebimg bounceInUp animated animated4';
                  }else if(swiper.activeIndex == 3){
                    setTimeout(function(){
                        $('.sharebg').hide(200);
                    },2000)
                  }
                }
            })
    </script>
</body>
</html>