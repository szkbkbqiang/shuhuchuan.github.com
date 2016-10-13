<?php

// $appid = $_GET["appid"];
// $secret_code = $_GET["secret_code"];
$appid = "wx069d3f045c334934";
$secret_code = "34c82b350102c847670fb53409e0ce12";
$wx_jsapi_list = array(
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareQZone',
        'openLocation'
    );


 function get_wx_access_token($appid, $secret_code)
    {
        $url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' . $appid . '&secret=' . $secret_code;
        // 如果一次不成功则尝试获取3次
        $access_token = null;
        for ($i = 0; $i < 3; $i++) {
            $json_string = httpGet($url);
            $obj = json_decode($json_string); // 将json字符串解析为json数组
            $access_token = $obj->access_token;
            if (!empty($access_token)) {
                break;
            }
        }
        return $access_token;
    }

 function httpGet($url) {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_TIMEOUT, 60);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_URL, $url);

        $res = curl_exec($curl);
        curl_close($curl);

        return $res;
    }

function get_wx_jsapi_ticket($appid, $secret_code)
    {
        $access_token = get_wx_access_token($appid, $secret_code);
        $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=" . $access_token . "&type=jsapi";
        $json_string = httpGet($url);
        $obj = json_decode($json_string); // 将json字符串解析为json数组
        return $obj->ticket;
    }

function get_wx_js_sign_package($appid, $secret_code)
    {
        $ticket = get_wx_jsapi_ticket($appid, $secret_code);
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
        $url = $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $nonceStr = get_verify_code(16, 4);
        $timestamp = time();
        $string = "jsapi_ticket=$ticket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";
        $signature = sha1($string);
        $signPackage = array(
            "appId" => $appid,
            "nonceStr" => $nonceStr,
            "timestamp" => $timestamp,
            "url" => $url,
            "signature" => $signature,
            "rawString" => $string
        );
        return $signPackage;
    }

function get_verify_code($length = 6, $mode = 1)
    {
        switch ($mode) {
            case '1':
                $str = '1234567890';
                break;
            case '2':
                $str = 'abcdefghijklmnopqrstuvwxyz';
                break;
            case '3':
                $str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;
            case '4':
                $str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                break;
            case '5':
                $str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
                break;
            case '6':
                $str = 'abcdefghijklmnopqrstuvwxyz1234567890';
                break;
            default:
                $str = 'ABCDEFGHIJKLMNOPQRSTUVWXOr91kVqOZImiMEnIrrXVoWFy18PHg197v6QddhJ3MyHP0rkMylLBXB5SSCQ2mp7HYZabcdefghijklmnopqrstuvwxyz1234567890';
                break;
        }
        $checkstr = '';
        $len = strlen($str) - 1;
        for ($i = 0; $i < $length; $i++) {
            // $num=rand(0,$len);//产生一个0到$len之间的随机数
            $num = mt_rand(0, $len); // 产生一个0到$len之间的随机数
            $checkstr .= $str[$num];
        }
        return $checkstr;
    }
$package = get_wx_js_sign_package($appid, $secret_code);
echo json_encode(array(
	"error_code" => 0,
	"sign_package"  => $package,
	"jsapi_list"  => $wx_jsapi_list));
exit();