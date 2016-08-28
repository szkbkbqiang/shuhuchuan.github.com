// 模块配置
seajs.config({
  alias : { //alias配置各模块别名，页面引入直接引入别名
    'jquery' : 'jquery-1.11.1.min',
    'bootstrap' : 'bootstrap.min',
    'public' : 'module/public',
    'index' : "module/index",
    'yanzhi' : "module/yanzhi",
    'arm' : "module/arm",
    'highlights' : "module/highlights",
    'swiper' : "plugin/swiper.jquery.min",
    'slotmachine' : "plugin/jquery.slotmachine",
    'tracking' : "plugin/tracking-min",
    'eye' : "data/eye-min",
    'face' : "data/face-min",
    'mouth' : "data/mouth-min",
  },
  preload : ['jquery'],//配置提取预加载模块，全局模块，所有页面都需要使用的模块
  debug : true
});