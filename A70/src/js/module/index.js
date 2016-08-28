define(function(require, exports, module){
	var $public = require('public');
	require('slotmachine');
	require('tracking');
	require('eye');
	require('face');
	require('mouth');
	var $index = function () {
		this.init.apply(this,arguments);
	};
	$index.prototype = {
		init : function (param) {
			var $self = this;
			// loadEnd = true;
			/*****	车型亮点  *****/
			var swiper = new Swiper('.swiper-container', {
			    // pagination: '.swiper-pagination',
			    paginationClickable: true,
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev'
			});
			$self.bingEvent();
		},
		config : {
			loading : false,
			backEars : '',
			files : '',
			isRunning : true
		},
		bingEvent : function () {
			var _self = this;
			window.onload=function () {
				loadEnd = true;
			};

			$('#highlights,#drive').hide();
			// setTimeout(function () {
			// 	$('.loading').remove();
			// },2000);
			$('.start-btn').on('click',function () {
				// location.href = 'yanzhi.html';
				$('#yanzhi .yanzhi-text').eq(0).show().end().eq(1).hide();
				$('.demo-container').html('');
				$('#a70Home').hide();
				$('#yanzhi,#yz_btn').show();
			});
			$('.rule-activity').on('click',function () {
				$public.alert($public.config.indexArr);
			});
			$('.a70-kv').on('click',function () {
				var _this = $(this);
				setTimeout(function () {
					// location.href = 'index.html';
					_this.remove();
				},1000);
			});
			/*****	抽奖  *****/
			var machine1 = $("#machine1").slotMachine({
				active	: 0,
				delay	: 500
			});
			var machine2 = $("#machine2").slotMachine({
				active	: 1,
				delay	: 500
			});
			
			var machine3 = $("#machine3").slotMachine({
				active	: 2,
				delay	: 500
			});
			$('.arm-more').on('click',function () {
				location.href = 'http://www.tjyqxs.com/active/a70/ssys/'
			});
			if($('#click-num').text() > 0){
				var flag = true;
				$('.arm-play').on('click',function () {
					if($('#click-num').text() > 0 && flag){
						flag = false;
						_self.config.isRunning = true;
						console.log('抽奖');
						var num = $('#click-num').text();
						$('#click-num').text(--num);
						// 抽奖
						machine1.shuffle(3, onComplete);
						setTimeout(function(){
							machine2.shuffle(3, onComplete);
						}, 500);
						setTimeout(function(){
							machine3.shuffle(3, onComplete);
						}, 1000);
						if($('#click-num').text() <= 0){
							$('.arm-play').addClass('disable');
							$('.arm-more').show();
						}
						setInterval(function () {
							if(!machine1.isRunning() && !machine2.isRunning() && !machine3.isRunning() && _self.config.isRunning){
								_self.config.isRunning = false;
								setTimeout(function () {
									flag = true;
									if(_self.config.armOk){
										$public.alertFail({title : '<div class="notWinning">非常遗憾，您未中奖！</div>'});
									}else {
										$public.alertFail({title : '<div class="winning"><p>恭喜获得</p><p>京东电子券</p></div><div class="winningtips">中奖信息将发送至您预留的手机号<br />请留意短信通知</div>',more : true});
									}
								},500);
							}
						},10);
					}
				});
			}else {
				$('.arm-play').addClass('disable');
				$('.arm-more').show();
			}
			
			function onComplete($el, active){
				switch($el[0].id){
					case 'machine1':
						$("#machine1Result").text("Index: " + active.index);
						break;
					case 'machine2':
						$("#machine2Result").text("Index: " + active.index);
						break;
					case 'machine3':
						$("#machine3Result").text("Index: " + active.index);
						break;
				}
			}


			// 颜值测试
			$('#luckDraw').on('click',function () {
				// location.href = 'armBandit.html'
				$('.a70-box').find('section').hide();
				$('#armBandit').show();
			});
			$('#rule-yanzhi').on('click',function () {
				$public.alert($public.config.yanzhiArr);
			});
			// 炫耀一下
			$('#share-show').on('click',function () {
				$public.alertShowOff();
			});
			// 人脸扫描
			var filechooser = document.getElementById("fileId1");
			
		    filechooser.onchange = function() {
		    	if($('.demo-container').html() != ' '){
				    $('.demo-container').html('');
				}
			    if (!this.files.length) return;
			    $('#yanzhi .yanzhi-text').eq(0).hide().end().eq(1).show();
				$('.yanzhi-btn').hide();
				setTimeout(function () {
					_self.config.loading = true;
					_self.config.backEars = true;
				},2000);
			    _self.config.files = Array.prototype.slice.call(this.files);
			    _self.filesReader();
			}
		},
		getLoading : function (callback) {
			var _self = this;
			_self.fakeProgress(0, '#loadNumber',callback);
		},
		fakeProgress : function (v, el,callback) {
			var _self = this;
		    if(v <= 99){
		      _self.setSB(v, el);
		      window.setTimeout(function () {
		      	_self.fakeProgress(++v, $(el),callback)
		      }, 20);
		    }else if(v > 99 && _self.config.loading){
		      _self.setSB(100, $(el));
		      // el.parentNode.remove();
		      console.log('扫描完成')
		      // _self.filesReader();
		      callback&&callback();
		      return
		      if(_self.config.backEars === true){
		      	$('.a70-yanzhi2').show();
		      }else if(_self.config.backEars === false){
		      	$public.alertTips({
		      		title : $public.config.earsStr
		      	})
		      }
		    }
		},
		setSB: function (v, el) {
		    $(el).html(v+'%');
		},
		filesReader : function () {
			var _self = this;
			// var files;
		    _self.config.files.forEach(function(file, i) {
		      if (!/\/(?:jpeg|png|gif)/i.test(file.type)) return;
		      var reader = new FileReader();
		      var image = new Image();
			  //          获取图片大小
		      var size = file.size / 1024 > 1024 ? (~~(10 * file.size / 1024 / 1024)) / 10 + "MB" : ~~(file.size / 1024) + "KB";
		      image.id = 'imgs';
		      $(".demo-container").append($(image));
		      reader.onload = function() {
		        var result = this.result;
		        var img = new Image();
		        
		        img.src = result;
		        $('#updateImg').attr('src',result);
		        $(image).attr("src",  result);
		        _self.getLoading(function () {
		        	if (img.complete) {
		        	  callback(img);
		        	} else {
		        	  img.onload = callback;
		        	}
		        	function callback(img) {
		        	  var imgs = document.getElementById('imgs');
		        	  var tracker = new tracking.ObjectTracker(['face','eye','mouth']);
		        	  tracker.setStepSize(1.7);
		        	  console.log(tracker)
		        	  tracking.track('#imgs', tracker);
		        	  tracker.on('track', function(event) {
		        	    if(event.data.length === 0){
		        	      // alert('你TM在逗我吗?你的脸了？');
		        	      // return
		        	      $public.alertTips({
		        	      	title : $public.config.earsStr
		        	      });
		        	    }else{
		        	      event.data.forEach(function(rect) {
		        	      	$('.a70-yanzhi2').show();
		        	        // alert('啊啊啊， 帅哥啊！')
		        	        window.plot(rect.x, rect.y, rect.width, rect.height);
		        	      });
		        	    }
		        	  });

		        	  plot = function(x, y, w, h) {
		        	  	console.log(1)
	        	          var rect = document.createElement('div');
	        	          document.querySelector('.demo-container').appendChild(rect);
	        	          rect.classList.add('rect');
	        	          rect.style.width = w + 'px';
	        	          rect.style.height = h + 'px';
	        	          rect.style.left = (imgs.offsetLeft + x) + 'px';
	        	          rect.style.top = (imgs.offsetTop + y) + 'px';
	        	          rect.style.position = 'absolute';
	        	        };
		        	
		        	}
		        });
		        // return
				//      图片加载完毕之后进行压缩，然后上传
		        
		      };
		      reader.readAsDataURL(file);
		    });
		}
	}
	module.exports = new $index();
});