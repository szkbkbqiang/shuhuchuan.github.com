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
    $jssdk = new Jssdk("wx96fe5d7e119b2945", "d5d6a3485a2ab2cea887444286a154b3");
    $signPackage = $jssdk->GetSignPackage();
    return $signPackage;
}
?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta name="keywords" content="">
	<meta name="description" content="">
	<meta content="telephone=no" name="format-detection" />
	<title>Terminus特斯联-嗨客小镇</title>
	<meta itemprop="image" content="images/terminuswechat.jpeg"> 
	<meta itemprop="name" content="玩嗨丽江 敢触未来">
	<meta name="description" itemprop="description" content="惊呆！昨晚5万人共睹丽江雪山百架无人机空中群舞秀！厉害了！">
	<link rel="stylesheet" href="css/common.css">
	<link rel="stylesheet" href="css/animated.css">
	<script src="//cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
	<script>
	// 适配设备
	(function (doc, win) {
		var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			var fs = 100 * (clientWidth / 750);
			fs > 100 ? fs = 100 : "";
			docEl.style.fontSize = fs.toFixed(2) + 'px';
			doc.getElementsByTagName("body")[0].style.opacity = "1";
		};

		if (!doc.addEventListener) return;
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);
	</script>
</head>
<body style="background:#000">
	<div class="kv-box">
		<img class="logo" src="images/logo.png" alt="">
		<img class="banner fadeIn animated" src="images/banner.png" alt="">

		<img class="yun1 tranlate" src="images/yun1.png" alt="">
		<img class="yun2 tranlate2" src="images/yun2.png" alt="">
		<img class="yun3 tranlate3" src="images/yun3.png" alt="">

		<a class="link-a link-a1" href="http://future.tslsmart.com" >&nbsp;&nbsp;</a>
			<img class="yuan1" src="images/yuan1.png" alt="">
			<img class="yuan1bg" src="images/yuan1bg.png" alt="">
			<img class="waiyuan1" src="images/waiyuan1.png" alt="">
		
		<a class="text1" href="http://future.tslsmart.com"><img src="images/text1.png" alt=""></a>
		
		<a class="link-a link-a2" href="http://u848122.viewer.maka.im/k/6N6B021C?DSCKID=47901eaa-223d-4f6c-a682-907cc0037532&DSTIMESTAMP=1476423862573">&nbsp;&nbsp;</a>
			<img class="yuan2" src="images/yuan2.png" alt="">
			<img class="yuan2bg" src="images/yuan2bg.png" alt="">
			<img class="waiyuan2" src="images/waiyuan2.png" alt="">
		
		<a class="text2" href="http://u848122.viewer.maka.im/k/6N6B021C?DSCKID=47901eaa-223d-4f6c-a682-907cc0037532&DSTIMESTAMP=1476423862573"><img src="images/text2.png" alt=""></a>

	</div>
	<script>
	window.onload = function(){
		var kvbox = document.querySelector('.kv-box');
		var linka1 = document.querySelector('.link-a1');
		var yuan1 = document.querySelector('.yuan1');
		var waiyuan1 = document.querySelector('.waiyuan1');
		var linka2 = document.querySelector('.link-a2');
		var yuan2 = document.querySelector('.yuan2');
		var waiyuan2 = document.querySelector('.waiyuan2');
		var kvbox = document.querySelector('.kv-box');

		waiyuan1=yuan1=linka1.addEventListener('touchstart',function(){
			window.location.href = "http://future.tslsmart.com";
		},false)
		waiyuan2=yuan2=linka2.addEventListener('touchstart',function(){
			window.location.href = "http://u848122.viewer.maka.im/k/6N6B021C?DSCKID=47901eaa-223d-4f6c-a682-907cc0037532&DSTIMESTAMP=1476423862573";
		},false)

		setTimeout(function(){
			kvbox.style.display= "block";
		},100);

		var str = $('.cnzz-box a').eq(1).html();
		$('.cnzz-box a').hide()
		$('.cnzz-box a').eq(1).show().html(str.split('|')[2]);
	}
	</script>
	<div class="cnzz-box">
		<script type="text/javascript">
			// www.yduob.com
			//var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1260606670'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s11.cnzz.com/z_stat.php%3Fid%3D1260606670%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"));
		</script>
		<script type="text/javascript">
			// http://static.tslsmart.com/projects/haike/
			var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1260606793'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s11.cnzz.com/z_stat.php%3Fid%3D1260606793%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"));
		</script>
	</div>
	<style>
		.cnzz-box{font-size: 0.12rem; text-align: right; transform: scale(0.7); ;color: #fff; position: absolute !important; bottom: 0rem; right: 0rem;}
		.cnzz-box a{color: #fff;}
		..cnzz-box span a:nth-child(0){display: block; color: #ccc}
	</style>


</body>
</html>