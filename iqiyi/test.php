<?php
require("Robert.class.php"); 
$signPackage = Robert::GetWechatsign();
?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>百部大剧巨巨巨巨……巨长，都在爱奇艺</title>
  <meta name="Description" content="翻到底可能要很久很久很久">
  <meta name="sharecontent" data-msg-img="" data-msg-title="百部大剧巨巨巨巨……巨长，都在爱奇艺" data-msg-content="翻到底可能要很久很久很久" data-msg-callBack="" data-line-img="你的缩略图地址" data-line-title="你的标题" data-line-callBack=""/>
  <link rel="stylesheet" href="./src/reset.css">
  <link href="./src/video-js.css" rel="stylesheet">
  <link rel="stylesheet" href="./src/animate.css">
  <link rel="stylesheet" href="./src/index.css">
  <script src="http://ossweb-img.qq.com/images/js/zepto/zepto1.2.min.js"></script>
  <script src="./src/video.min.js"></script>
  <script src="./src/flexible.js"></script>
  <style type="text/css">
    #vjs {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 8;
    }
    #my-video {
      margin-top: -1000px;
    }
    .logo { position: fixed; top: .35rem; right: .35rem; color: #fff; }
    .logo span { display: inline-block; width: 8.25rem; height: 2.725rem; background: url('img/logo.png') 0 0 no-repeat; }
    .logo img {
      width: 2rem;
    }
    .full_loading {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #000;
      z-index: 998
    }
    .loading{
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -40px;
      margin-right: -20px;
      width: 80px;
      height: 40px;
      z-index: 999;
  }
  .loading span{
      display: inline-block;
      width: 8px;
      height: 100%;
      border-radius: 4px;
      background: lightgreen;
      -webkit-animation: load 1s ease infinite;
  }
  @-webkit-keyframes load{
      0%,100%{
          height: 40px;
          background: lightgreen;
      }
      50%{
          height: 70px;
          margin: -15px 0;
          background: lightblue;
      }
  }
  .loading span:nth-child(2){
      -webkit-animation-delay:0.2s;
  }
  .loading span:nth-child(3){
      -webkit-animation-delay:0.4s;
  }
  .loading span:nth-child(4){
      -webkit-animation-delay:0.6s;
  }
  .loading span:nth-child(5){
      -webkit-animation-delay:0.8s;
  }
    .pull {
    position: fixed;
    width: .6rem;
    height: .2rem;
    bottom: .5rem;
    left: 50%;
    margin-left: -.3rem;
  }
  .pull img { width: 100% }
  </style>
  <script>
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "https://hm.baidu.com/hm.js?173d7d9207f9466e77009de58b6e16c2";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();
</script>

</head>

<body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
  <!-- <div class="full_loading">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div> -->
  
  <div id="box">
    <div class="logo"><img src="img/logo.png"></div>
    <!-- <div id="vjs">
     <video id="my-video" class="video-js vjs-big-play-centered vjs-default-skin" height="320" webkit-playsinline="playsinline" playsinline="true" x5-playsinline="true" autoplay="autoplay">
      <source src="aiqiyi_1.mp4" type="video/mp4">
     </video> --> 
    <!-- </div> -->
  	<div class="home"><img min-height="100" src="img/home.jpg" alt=""></div>
  	<!-- <div class="line"></div> -->   
    <ul>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/1.jpg">
        <div class="content">
          <h2>凰权•弈天下</h2>
          <h5>艺人阵容:陈坤、倪妮、赵立新、倪大红、袁弘、王鸥、白敬亭、张晓晨</h5>
          <p>· 陈坤，倪妮双电影卡司主演，著名导演沈严，刘海波联合执导；<br>· 改编自天下归元畅销IP《凰权》。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/2.jpg">
        <div class="content">
          <h2>黄金瞳</h2>
          <h5>艺人阵容:张艺兴</h5>
          <p>《老九门》主创班底聚首，张艺兴领衔演绎都市鉴宝冒险传奇。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/3.jpg">
        <div class="content">
          <h2>火王</h2>
          <h5>艺人阵容:景甜、陈柏霖、张逸杰、赖雨濛</h5>
          <p>上部：火王之破晓之战<br>下部：火王之千里同风<br>改编自游素兰同名漫画，景甜、陈柏霖领衔主演。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>冒险王卫斯理之支离人</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li><li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>冒险王卫斯理之蓝血人</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li><li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>冒险王卫斯理之无名发</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <!-- <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/4.jpg">
        <div class="content">
          <h2>卫斯理传奇之支离人、卫斯理传奇之蓝血人、卫斯理传奇之无名发</h2>
          <h5>艺人阵容:余文乐、胡然、文咏珊、杨蓉</h5>
          <p>中国科幻文学教父，倪匡人气榜首IP改编，著名导演王晶首次触电网剧，埃及、东京跨国取景，打造科幻动作冒险新奇观。</p>
        </div>
        <div class="line"></div>
      </li> -->
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/5.jpg">
        <div class="content">
          <h2>凤囚凰</h2>
          <h5>艺人阵容:关晓彤、宋威龙</h5>
          <p>金牌编剧于正出品，李慧珠导演倾力加盟。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/6.jpg">
        <div class="content">
          <h2>甜蜜暴击</h2>
          <h5>艺人阵容:鹿晗、关晓彤</h5>
          <p>前所未有的青春热血格斗题材。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/7.jpg">
        <div class="content">
          <h2>脱身</h2>
          <h5>艺人阵容:陈坤、万茜</h5>
          <p>·陈坤主演，一线电影大咖荧幕回归；<br>·9年扎实剧本创作，热门题材；<br>·王耀庆、赵文瑄、廖凡等实力明星加盟，成为经典谍战剧奠定基石。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/8.jpg">
        <div class="content">
          <h2>爵迹·临界天下</h2>
          <h5>艺人阵容:郑元畅、张铭恩、黄梦莹、季晨、熊乃瑾</h5>
          <p>爆款IP，网剧一哥“白一骢制作”。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/9.jpg">
        <div class="content">
          <h2>唐砖</h2>
          <h5>艺人阵容:张佳宁、王天辰、袁咏仪、张智尧</h5>
          <p>唐穿第一书，香港金像奖评委会主席陈嘉上监制，张晓龙重塑盛世礼仪，袁咏仪华丽入宫、张智尧仙班登基，打造穿越武侠轻喜剧。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/10.jpg" onerror="this.src='img/grey.gif'">
        <div class="content">
          <h2>动物管理局</h2>
          <h5>艺人阵容:陈赫、王子文</h5>
          <p>由工夫影业、工夫真言影业、天工异彩联合出品，以匠人精神著称的工夫影业全程领航指导，知名领航人陈国富为品质把关。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/11.jpg">
        <div class="content">
          <h2>河神2</h2>
          <h5>艺人阵容:待定</h5>
          <p>原班人马集结打造《河神》续集再续民国八大奇案。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/12.jpg">
        <div class="content">
          <h2>老九门2</h2>
          <h5>艺人阵容:待定</h5>
          <p>超强IP再掀狂澜，《老九门》重现江湖。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/13.jpg">
        <div class="content">
          <h2>知否知否应是绿肥红瘦</h2>
          <h5>艺人阵容:赵丽颖、冯绍峰</h5>
          <p>·改编自关心则乱同名小说，正午阳光出品，侯鸿亮担任制片人，赵丽颖、冯绍峰联袂主演；<br>·古代礼教制度下的女性奋斗传奇。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/14.jpg">
        <div class="content">
          <h2>剑王朝</h2>
          <h5>艺人阵容:李现、李一桐</h5>
          <p>网络人气作家无罪原创小说，纵横中文网双榜冠军，影漫游全产业联动，冯小刚监制，饶俊编剧，打造倚剑走天下的新王朝。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/15.jpg">
        <div class="content">
          <h2>绯闻女孩</h2>
          <h5>艺人阵容:待定</h5>
          <p>37份精英深度访谈问卷，上海、澳门、纽约三地拍摄，原班底倾情加盟，华纳兄弟正版授权，小糖人诚意之作。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/16.jpg">
        <div class="content">
          <h2>西游降魔篇</h2>
          <h5>艺人阵容:待定</h5>
          <p>西游经典迭代换新，周星驰再闯网剧江湖。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/17.jpg">
        <div class="content">
          <h2>谈判官</h2>
          <h5>艺人阵容:杨幂、黄子韬</h5>
          <p>·《翻译官》姊妹篇，聚焦精英行业人群谈判官；<br>·杨幂、黄子韬三度合作。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/18.jpg">
        <div class="content">
          <h2>租界少年热血档案</h2>
          <h5>艺人阵容:黄子韬</h5>
          <p>当红小生黄子韬领衔书写“租界恩仇传奇”。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/19.jpg">
        <div class="content">
          <h2>美人鱼</h2>
          <h5>艺人阵容：待定</h5>
          <p>华人喜剧大师周星驰超级IP，《美人鱼》再现荧屏。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/20.jpg">
        <div class="content">
          <h2>《盗墓笔记》之<蛇沼鬼蜮>、<阴山古楼>、<邛笼石影>、<谜海归巢></h2>
          <h5>艺人阵容：待定</h5>
          <p>《盗墓笔记》四重奏连环轰炸，谜团套谜团全新盗墓体验。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/21.jpg">
        <div class="content">
          <h2>凉生，我们可不可以不忧伤</h2>
          <h5>艺人阵容:钟汉良，马天宇，孙怡，于朦胧，孟子义，王智</h5>
          <p>·乐小米同名现代言情小说改编，男主被网友誉为言情小说界天神男主的模板级人物，是无数人青春记忆中的精神图腾；<br>·由慈文传媒与其旗下的上海蜜淘影业倾力打造。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/22.jpg">
        <div class="content">
          <h2>蜀山战纪2踏火行歌</h2>
          <h5>艺人阵容:吴奇隆，雨婷儿，陈哲远，刘一曈，聂子皓</h5>
          <p>吴奇隆携原班主创续写蜀山传奇，取景新西兰绝美风光。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/23.jpg">
        <div class="content">
          <h2>老男孩</h2>
          <h5>艺人阵容:刘烨、林依晨</h5>
          <p>·影帝视后高端配置，机场题材引爆燃点，麻辣人师如何应招；<br>·由十佳导演刘俊杰执导，讲述了桀骜老男孩人至不惑之年经历爱与成长的故事。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/24.jpg">
        <div class="content">
          <h2>夜旅人</h2>
          <h5>艺人阵容：待定</h5>
          <p>1937年民国律师与2017年女法医超越时空的爱。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/25.jpg">
        <div class="content">
          <h2>飞行少年</h2>
          <h5>艺人阵容:严屹宽、范世錡</h5>
          <p>国内首部有关飞机军旅题材的优质偶像剧，飞机特效成为一大亮点，其中展现了我国最先进的歼-20等飞机，青春、励志、热血、偶像题材。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/26.jpg">
        <div class="content">
          <h2>同学两亿岁1/2</h2>
          <h5>艺人阵容:李庚希，朱致灵，梁宝玲</h5>
          <p>疯丢子同名小说IP改编。徐静蕾亲情监制，鲜花盛开影业首次打造网络剧，美国后期特效团队担任制作。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/27.jpg">
        <div class="content">
          <h2>明君修炼记</h2>
          <h5>艺人阵容：待定</h5>
          <p>群穿+双向穿越的新鲜定位，顶级团队加盟，联手打造融合古今奇幻盛宴。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/28.jpg">
        <div class="content">
          <h2>我和两个TA</h2>
          <h5>艺人阵容:张子枫、熊梓淇</h5>
          <p>延续爱奇艺2016年热门网剧《老师晚上好》，爆笑剧情继续上演。一人分饰两角，打造“两个人的三角恋”的全新故事。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/29.jpg">
        <div class="content">
          <h2>以你为名的青春</h2>
          <h5>艺人阵容：待定</h5>
          <p>《我的少女时代》原班团队打造台湾风格的校园青春剧，继《最好的我们》《你好，旧时光》后的又一校园风格力作。更有台湾摇滚天团五月天演唱剧中插曲，带你回到那个青春悸动的年代。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg">
        <div class="content">
          <h2>晨阳</h2>
          <h5>艺人阵容:杨东清、蔡知辰、吕星辰、冯建宇</h5>
          <p>《如果蜗牛有爱情》《余罪》之后，又一精彩警匪谍战的传奇故事。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/32.jpg">
        <div class="content">
          <h2>亲爱的活祖宗</h2>
          <h5>艺人阵容:陈哲远、董晴、戴向宇</h5>
          <p>2010年反穿越小说巅峰之作《我的活祖宗》改编，天马行空的浪漫，不按常理的套路，打造最极致的爱情科幻喜剧。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/33.jpg">
        <div class="content">
          <h2>再创世纪</h2>
          <h5>艺人阵容:郭晋安、周丽淇、周柏豪、杨怡、林文龙、钟嘉欣</h5>
          <p>延续90年代《创世纪》的商战巅峰，TVB50周年压轴台庆剧，内地、香港、加拿大、布拉格四地拍摄，老面孔、新故事，揭秘香港10年金融风云录。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/34.jpg">
        <div class="content">
          <h2>守护神</h2>
          <h5>艺人阵容:黄宗泽、苗侨伟、刘心悠</h5>
          <p>爱奇艺与邵氏影业首次合作，香港鬼才编剧陈十三执笔；黄宗泽、苗侨伟等组成超强演员阵容。欧洲、东南亚，香港内地全球取景。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/35.jpg">
        <div class="content">
          <h2>我真是大明星</h2>
          <h5>艺人阵容：待定</h5>
          <p>著名编剧秦雯为知名网文IP执笔，呈现更燃都市科幻。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/36.jpg">
        <div class="content">
          <h2>为了你，我愿意热爱整个世界</h2>
          <h5>艺人阵容:罗晋、郑爽</h5>
          <p>唐家三少同名小说改编，克顿集团新天地工作室出品，余翠华执导。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/37.jpg">
        <div class="content">
          <h2>延禧攻略</h2>
          <h5>艺人阵容:秦岚，聂远，佘诗曼，吴谨言，许凯</h5>
          <p>金牌编剧于正出品，宫廷女性励志成长史。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/38.jpg">
        <div class="content">
          <h2>半生缘</h2>
          <h5>艺人阵容:刘嘉玲，蒋欣，郑元畅，郭晓东</h5>
          <p>·张爱玲大IP，老上海、爱恨情仇、视觉享受、重塑经典；<br>·刘嘉玲演反派虐蒋欣，看点足。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/39.jpg">
        <div class="content">
          <h2>独孤皇后</h2>
          <h5>艺人阵容:陈乔恩，陈晓</h5>
          <p>·蒹葭夫妇“贞情”留青史，陈乔恩陈晓携手“乱世帝后情”；<br>·华策影视三年磨一剑，匠心打造历史正剧新标杆，古装女性励志大剧王者归来。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/40.jpg">
        <div class="content">
          <h2>天乩之白蛇传说</h2>
          <h5>艺人阵容:杨紫、任嘉伦</h5>
          <p>制作精良，刘嘉玲、赵雅芝等加盟，经典重现。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/41.jpg">
        <div class="content">
          <h2>幸福的理由</h2>
          <h5>艺人阵容:钟汉良、乔振宇、王晓晨</h5>
          <p>·寄情音乐敲击心灵，打造原创音乐治愈题材电视剧；<br>·钟汉良在开拍之前，潜心学习小提琴和指挥，并亲自担当出品人；<br>·取景将横跨中奥两国，在上海、音乐之都奥地利维也纳两地进行实景拍摄。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/42.jpg">
        <div class="content">
          <h2>亲·爱的味道</h2>
          <h5>艺人阵容:陆毅、郭采洁</h5>
          <p>·“偶像剧教父”陈铭章执导，陆毅郭采洁搭配新CP，变身一对欢喜冤家；<br>·网罗了美食、爱情、奇幻、美颜、实力演技等当下收视热点。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/43.jpg">
        <div class="content">
          <h2>香蜜沉沉烬如霜</h2>
          <h5>艺人阵容:杨紫，邓伦，陈钰琪，罗云熙，王一菲，邹廷威，夏志远</h5>
          <p>·优质IP改编，与《花千骨》、《三生三世十里桃花》并称为国产“仙侠三部曲”，原著作者全程坐镇幕后全新定义《香蜜》“花语幻境”；<br>·细节制胜打造精致造型，金牌幕后团队缔造匠心之作。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/44.jpg">
        <div class="content">
          <h2>泡沫之夏</h2>
          <h5>艺人阵容:张雪迎、秦俊杰</h5>
          <p>经典IP全新演绎 再现甜宠高虐华丽青春。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/45.jpg">
        <div class="content">
          <h2>利刃出击</h2>
          <h5>艺人阵容:杨烁，牟星</h5>
          <p>·著名导演刘猛继《我是特种兵》系列、《特警力量》后，首部表现武警特战题材的电视剧，被誉为武警题材的“雄性力作”；<br>·积极弘扬武警官兵和公安干警为国奉献的主旋律，人物形象新鲜丰满，故事情节紧张递进。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/46.jpg">
        <div class="content">
          <h2>好久不见</h2>
          <h5>艺人阵容:杨子姗、郑恺、张国立、江珊</h5>
          <p>杨子姗首部电视剧作品，搭档郑恺，张国立、江珊等实力派演员加盟。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/47.jpg">
        <div class="content">
          <h2>封神重临</h2>
          <h5>艺人阵容:罗晋、王丽坤、张博、邓伦</h5>
          <p>颠覆传统故事主线，大胆将杨戬、妲己组成CP。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/48.jpg">
        <div class="content">
          <h2>真爱的谎言之破冰者</h2>
          <h5>艺人阵容:罗晋，潘之琳，张晨光，曹征，吕星辰，王砚辉，程煜</h5>
          <p>·不仅情节烧脑，情感投入上也更烧心；<br>·悬疑、爱情、人性、情怀、实力卡司，兼具商业片的冲击力，也深藏人文主义的光辉。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/49.jpg">
        <div class="content">
          <h2>如果可以这样爱</h2>
          <h5>艺人阵容:佟大为、刘诗诗、保剑锋、杨壹童、齐欢</h5>
          <p>根据千与千寻同名小说改编。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/50.jpg">
        <div class="content">
          <h2>仙侠奇缘之杀阡陌</h2>
          <h5>艺人阵容：待定</h5>
          <p>剧王《花千骨》前传，原著果果及南派三叔鼎力护航。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/51.jpg">
        <div class="content">
          <h2>钟馗捉妖记</h2>
          <h5>艺人阵容:杨蓉、杨旭文、麦迪娜、李子峰</h5>
          <p>郑伟文执导，秦溱担任监制、编剧，东方古装魔幻大剧。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/52.jpg">
        <div class="content">
          <h2>狼殿下</h2>
          <h5>艺人阵容:王大陆、李沁</h5>
          <p>陈玉珊《兰陵王》后3亿投资再拍古装片，造型既有古典美又有时尚感，贴近观众；<br>·古代战争剧里的爱情故事，权谋、复仇、危机纠葛其中，看点十足。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
         <img min-height="100" src="img/blank.gif" data-echo="img/53.jpg">
        <div class="content">
          <h2>归去来</h2>
          <h5>艺人阵容:唐嫣、罗晋</h5>
          <p>·超强主创阵容、顶级实力偶像，全程横跨中美两国拍摄；<br>·最深情的暗恋，最虐心的青春。不仅仅有90后的物欲、迷失和出走，更有他们的选择、觉醒和归来。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/54.jpg">
        <div class="content">
          <h2>朝歌</h2>
          <h5>艺人阵容:吴谨言、张哲瀚、保剑锋、吴佳怡、林佑威、刘敏</h5>
          <p>·于正担任总制片及编剧；<br>·采用实拍的方式呈现，以最大的诚意将殷商王朝神话展现在观众面前；<br>·深度挖掘权利漩涡中心的秘闻秘事,高度还原一代王朝的荣辱兴衰，看点十足。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/55.jpg">
        <div class="content">
          <h2>写命师</h2>
          <h5>艺人阵容:唐艺昕</h5>
          <p>“50亿姐”陈祉希的首部网剧，打造中国式都市奇幻爱情童话。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/56.jpg">
        <div class="content">
          <h2>源宇宙</h2>
          <h5>艺人阵容：待定</h5>
          <p>南派三叔与《花千骨》作者果果强强联手，打造新领域科幻题材。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/57.jpg">
        <div class="content">
          <h2>谁的青春不迷茫·我在未来等你</h2>
          <h5>艺人阵容：待定</h5>
          <p>畅销书跨界作家刘同最新力作，金牌电影团队倾力打造，带你重返17岁，安放青春的遗憾。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/58.jpg">
        <div class="content">
          <h2>仙剑奇侠传4</h2>
          <h5>艺人阵容：待定</h5>
          <p>最具时代影响力的仙侠超级IP，高燃人气基础。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/59.jpg">
        <div class="content">
          <h2>灵域</h2>
          <h5>艺人阵容：待定</h5>
          <p>逆苍天知名IP改编,动漫版本破9亿播放。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/62.jpg">
        <div class="content">
          <h2>大主宰</h2>
          <h5>艺人阵容：待定</h5>
          <p>全网排名第一玄幻IP改编，网文之王天蚕土豆最强力作，被誉为“东方版哈利波特”。白一骢监制，当红青春小生出演，有望打造成为《权力的游戏》类型的东方玄幻史诗。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/63.jpg">
        <div class="content">
          <h2>热血狂篮</h2>
          <h5>艺人阵容:佟梦实 、邢菲、聂子皓</h5>
          <p>稀缺高颜值篮球少年题材，灌篮高手音乐重现。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/64.jpg">
        <div class="content">
          <h2>面具</h2>
          <h5>艺人阵容:祖峰、侯勇、梅婷、佳琪</h5>
          <p>既有林海雪原的传奇故事，也有危机四伏的紧张悬疑。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/65.jpg">
        <div class="content">
          <h2>神犬小七3</h2>
          <h5>艺人阵容:姜潮、宋妍霏、徐可、王煜</h5>
          <p>《神犬小七》系列第三部，中国萌宠时尚影视剧。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/67.jpg">
        <div class="content">
          <h2>一路繁花相送</h2>
          <h5>艺人阵容:钟汉良、江疏影、炎亚纶</h5>
          <p>改编自网络人气作家“青衫落拓”同名小说，“IP”男神钟汉良保驾护航。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/68.jpg">
        <div class="content">
          <h2>南方有乔木</h2>
          <h5>艺人阵容:白百何、陈伟霆</h5>
          <p>·陈伟霆，白百何首次联袂，演绎势均力敌的爱情和并肩作战的友情；<br>·改编自网络作家小狐濡尾的同名IP，豆瓣网友强推；<br>·柠萌影业出品，集结顶级配置制作资源。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/69.jpg">
        <div class="content">
          <h2>飘香剑雨</h2>
          <h5>艺人阵容:任言恺、吴优、肖燕、高广泽</h5>
          <p>古龙经典IP改编江湖恩怨，快意情仇。</p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/98.jpg">
        <div class="content">
          <h2>远大前程</h2>
          <h5>艺人阵容:陈思诚、佟丽娅、袁弘、郭采洁、金士杰、倪大红、刘奕君、赵立新</h5>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/89.jpg">
        <div class="content">
          <h2>烈火海洋</h2>
          <h5>艺人阵容:路晨、杨旭文、米热、毛林林、范凌子</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/90.jpg">
        <div class="content">
          <h2>重返20岁</h2>
          <h5>艺人阵容:韩东君、胡冰卿、归亚蕾、秦汉</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/91.jpg">
        <div class="content">
          <h2>娘道</h2>
          <h5>艺人阵容:岳丽娜、于毅、张少华、刘智扬、史可</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/93.jpg">
        <div class="content">
          <h2>火柴小姐和美味先生</h2>
          <h5>艺人阵容:陈晓、陈意涵</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/96.jpg">
        <div class="content">
          <h2>左耳</h2>
          <h5>艺人阵容:米咪、马吟吟、郑凯</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/66.jpg">-->
        <div class="content">
          <h2>梦想合伙人</h2>
          <h5>艺人阵容:李光洁、高露、袁文康、刘天佐</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/86.jpg">-->
        <div class="content">
          <h2>欲望之城</h2>
          <h5>艺人阵容:吴秀波、杨颖、任重、蒋勤勤、陈道明特别出演</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/87.jpg">-->
        <div class="content">
          <h2>大江大河</h2>
          <h5>艺人阵容:王凯、杨烁</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/88.jpg">-->
        <div class="content">
          <h2>都挺好</h2>
          <h5>艺人阵容:姚晨、倪大红</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/92.jpg">-->
        <div class="content">
          <h2>壮志高飞</h2>
          <h5>艺人阵容:陈乔恩、郑恺、朱梓骁、吕一、胡兵、赵子琪、王佳宇</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/94.jpg">-->
        <div class="content">
          <h2>和平饭店</h2>
          <h5>艺人阵容:雷佳音，陈数</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/97.jpg">-->
        <div class="content">
          <h2>越活越来劲</h2>
          <h5>艺人阵容:闫学晶、范明、邵峰、乔杉、修睿</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/99.jpg">-->
        <div class="content">
          <h2>小欢喜</h2>
          <h5>艺人阵容:黄磊</h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/71.jpg">-->
        <div class="content">
          <h2>悍城</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/73.jpg">-->
        <div class="content">
          <h2>无主之城（天机）</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/74.jpg">-->
        <div class="content">
          <h2>坑王驾到</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/75.jpg">-->
        <div class="content">
          <h2>霍元甲</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/76.jpg">-->
        <div class="content">
          <h2>刑侦五局</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!--<img min-height="100" src="img/blank.gif" data-echo="img/77.jpg">-->
        <div class="content">
          <h2>万古仙穹</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/78.jpg">-->
        <div class="content">
          <h2>新白娘子传奇</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li><li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/81.jpg">-->
        <div class="content">
          <h2>战争传说</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li><li>
         <!--<img min-height="100" src="img/blank.gif" data-echo="img/85.jpg">-->
        <div class="content">
          <h2>尉官正年轻</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li><li>
        <!--<img min-height="100" src="img/blank.gif" data-echo="img/95.jpg">-->
        <div class="content">
          <h2>爱情没有暂住证</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <!-- <li>
        <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg">
        <div class="content">
          <h2>大汉夜郎歌1/2</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li> -->
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>莽荒纪</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>坏小孩</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>奇货</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>买手</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>长夜难明</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>大宗师</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>天香美人</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>神探蒲松龄</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>时光机</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>新大头儿子和小头爸爸</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>希望使命</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>后妈的春天</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>突击再突击</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>我曾爱过你，想起就心酸</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>双枪</h2>
          <h5> </h5>
          <p></p>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <!-- <img min-height="100" src="img/blank.gif" data-echo="img/30.jpg"> -->
        <div class="content">
          <h2>哪吒与杨戬</h2>
          <h5> </h5>
          <p></p>
        </div>
        <!-- <div class="line"></div> -->
        <div id="share">
          <img src="img/footer.png" alt="">
        </div>
      </li>
    </ul>
    <div class="fixed">
      <div class="animated pulse infinite top">
        <img src="img/share1.png" alt="">
      </div>
      <!-- <div class="bottom">
        <img src="img/footer.png" alt="">
      </div> -->
    </div>
    <div class="pull"><div class="animated bounce infinite"><img src="img/pull.png" alt=""></div></div>
  </div>
  <script src="src/echo.min.js"></script>
  <script>
  $('document').scrollTop(0)
  $(window).scroll(function (e) {
    $('.pull').hide(1000)
  })
    $('#share').click(function(){
      $('.fixed').show()
    })
    $('.fixed').click(function(){
      $('.fixed').hide()
    })
    echo.init({
      offset: 500
    });
      // $('#vjs').show(200)
      // $('#my-video').css({width: $(window).width(), height: $(window).height(), marginTop: 0})
      // var myPlayer = videojs('my-video',{
      //   "controls": false
      //  });
      //  myPlayer.ready(function(){
      //   myPlayer.width($(window).width());
      //   myPlayer.height($(window).height());

      //   myPlayer.play();

      //   document.addEventListener("WeixinJSBridgeReady", function () {
      //      $('.full_loading').hide()
      //       myPlayer.play();
      //   }, false);
      //   myPlayer.play();
      //   myPlayer.on('timeupdate', function () {  
      //     duration = myPlayer.duration()
      //     currentTime = myPlayer.currentTime();
      //     if (currentTime > 0) {
      //        $('.full_loading').hide()
      //     }
      //     // 如果 currentTime() === duration()，则视频已播放完毕
      //     if (duration != 0 && currentTime === duration) {
      //       // 播放结束
      //       $('#my-video').hide(200).remove()
      //       $('#vjs').hide(200)
      //     }
      //   });
      // });
  </script>

<script>
wx.config({
	debug: false,
	appId: '<?php echo $signPackage["appId"];?>',
	timestamp: <?php echo $signPackage["timestamp"];?>,
	nonceStr: '<?php echo $signPackage["nonceStr"];?>',
	signature: '<?php echo $signPackage["signature"];?>',
	jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
});
wx.ready(function () {
	wx.onMenuShareAppMessage({//分享给朋友
		title: '百部大剧巨巨巨巨……巨长，都在爱奇艺', // 分享标题
		desc: '翻到底可能要很久很久很久', // 分享描述
		link: 'http://aiqiyi100.yduob.com', // 分享链接
		imgUrl: 'http://aiqiyi100.yduob.com/share.jpg', // 分享图标
		type: 'link', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function () { 
			// 用户确认分享后执行的回调函数
		},
		cancel: function () { 
			// 用户取消分享后执行的回调函数
		}
	});

	wx.onMenuShareTimeline({//分享到朋友圈
		title: '百部大剧巨巨巨巨……巨长，都在爱奇艺', // 分享标题
		link: 'http://aiqiyi100.yduob.com', // 分享链接
		imgUrl: 'http://aiqiyi100.yduob.com/share.jpg', // 分享图标
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