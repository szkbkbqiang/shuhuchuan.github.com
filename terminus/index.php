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
    $jssdk = new Jssdk("wx96fe5d7e119b2945", "34c82b350102c847670fb53409e0ce12");
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
	<script src="//cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
</head>
<body style="background:#000">
	<div class="play"><span></span></div>
	<video class="video-box"  width="100%" webkit-playsinline style="display:none">
		<source src="http://sto.tslsmart.com/activity/20161016terminus.mp4" type="video/mp4" />
	</video>
	<script>
	window.onload = function(){
		var aVideo = document.querySelector('.video-box');
		var aplay = document.querySelector('.play');

		aplay.addEventListener('click', function(){
			this.style.display = "none";
			aVideo.style.display = "block";
			aVideo.webkitEnterFullScreen();
			aVideo.play();
		}, false)
		aVideo.onended = function(){
			setTimeout(function(){
				window.location.href = 'kv.php'
			},10)
		}	
	}

	</script>
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

            // 分享到朋友圈
            wx.onMenuShareTimeline({
                title: '玩嗨丽江 敢触未来', // 分享标题
                link: window.location.href, // 分享链接
                imgUrl: 'http://haike.tslsmart.com/images/terminuswechat.jpeg', // 分享图标
                success: function () { 
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () { 
                    // 用户取消分享后执行的回调函数
                }
            });
            // 分享给朋友
            wx.onMenuShareAppMessage({
                title: '玩嗨丽江 敢触未来', // 分享标题
                desc: '惊呆！昨晚5万人共睹丽江雪山百架无人机空中群舞秀！厉害了！', // 分享描述
                link: window.location.href, // 分享链接
                imgUrl: 'http://haike.tslsmart.com/images/terminuswechat.jpeg', // 分享图标
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
                title: '玩嗨丽江 敢触未来', // 分享标题
                desc: '惊呆！昨晚5万人共睹丽江雪山百架无人机空中群舞秀！厉害了！', // 分享描述
                link: window.location.href, // 分享链接
                imgUrl: 'http://haike.tslsmart.com/images/terminuswechat.jpeg', // 分享图标
                success: function () { 
                   // 用户确认分享后执行的回调函数
                },
                cancel: function () { 
                   // 用户取消分享后执行的回调函数
                }
            });
            // 分享到QQ空间
            wx.onMenuShareQZone({
                title: '玩嗨丽江 敢触未来', // 分享标题
                desc: '惊呆！昨晚5万人共睹丽江雪山百架无人机空中群舞秀！厉害了！', // 分享描述
                link: window.location.href, // 分享链接
                imgUrl: 'http://haike.tslsmart.com/images/terminuswechat.jpeg', // 分享图标
                success: function () { 
                   // 用户确认分享后执行的回调函数
                },
                cancel: function () { 
                    // 用户取消分享后执行的回调函数
                }
            });
           
        }); 
	</script>
</body>
</html>