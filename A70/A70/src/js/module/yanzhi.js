define(function(require, exports, module){
	var $public = require('public');
	require('tracking');
	require('eye');
	require('face');
	require('mouth');
	var $yanzhi = function () {
		this.init.apply(this,arguments);
	};
	$yanzhi.prototype = {
		init : function (param) {
			var $self = this;
			
			$self.bingEvent();
			// $self.loading();
		},
		config : {
			loading : false,
			backEars : '',
			files : ''
		},
		bingEvent : function () {
			var _self = this;
			$('#luckDraw').on('click',function () {
				location.href = 'armBandit.html'
			});
			$('#rule-yanzhi').on('click',function () {
				$public.alert($public.config.yanzhiArr);
			});
			// 测试颜值，传图
			// $('#fileId1').on('change',function () {
			// 	$('.yanzhi-text').eq(0).hide().end().eq(1).show();
			// 	$('.yanzhi-btn').hide();
			// 	setTimeout(function () {
			// 		_self.config.loading = true;
			// 		_self.config.backEars = true;
			// 	},2000);
			// 	_self.getLoading();
			// });
			// 炫耀一下
			$('#share-show').on('click',function () {
				$public.alertShowOff();
			});
			// 人脸扫描
			var filechooser = document.getElementById("fileId1");
			$("#yz_btn").on("click", function() {
			  if($('.demo-container').html() != ' '){
			    $('.demo-container').html('');
			  }
			  filechooser.click();
			});
		  filechooser.onchange = function() {
		    if (!this.files.length) return;
		    $('.yanzhi-text').eq(0).hide().end().eq(1).show();
			$('.yanzhi-btn').hide();
			setTimeout(function () {
				_self.config.loading = true;
				_self.config.backEars = true;
			},2000);
			
		    _self.config.files = Array.prototype.slice.call(this.files);
		    _self.filesReader();
		  };
		},
		getLoading : function (callback) {
			console.log(1)
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
		    //  return
		      if(_self.config.backEars === true){
		      	$('.a70-yanzhi2').show();
		      	// _self.filesReader();
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
		        $(image).attr("src",  result);
		        _self.getLoading(function () {
		        	if (img.complete) {
		        	  callback(img);
		        	} else {
		        	  img.onload = callback;
		        	}
		        	function callback(img) {
		        	  var imgs = document.getElementById('imgs');
		        		console.log(imgs)
		        	  var tracker = new tracking.ObjectTracker(['face']);
		        	  tracker.setStepSize(1.7);
		        	  console.log(tracker)
		        	  tracking.track('#imgs', tracker);
		        	  tracker.on('track', function(event) {
		        	    if(event.data.length === 0){
		        	      alert('你TM在逗我吗?你的脸了？');
		        	      return
		        	      $public.alertTips({
		        	      	title : $public.config.earsStr
		        	      });
		        	    }else{
		        	      event.data.forEach(function(rect) {
		        	      	$('.a70-yanzhi2').show();
		        	        alert('啊啊啊， 帅哥啊！')
		        	        window.plot(rect.x, rect.y, rect.width, rect.height);
		        	      });
		        	    }
		        	  });

		        	  plot = function(x, y, w, h) {
		        	          var rect = document.createElement('div');
		        	          document.querySelector('.demo-container').appendChild(rect);
		        	          rect.classList.add('rect');
		        	          rect.style.width = w + 'px';
		        	          rect.style.height = h + 'px';
		        	          rect.style.left = (imgs.offsetLeft + x) + 'px';
		        	          rect.style.top = (imgs.offsetTop + y) + 'px';
		        	        };
		        	
		        	}
		        });
		        return
				//      图片加载完毕之后进行压缩，然后上传
		        
		      };
		      reader.readAsDataURL(file);
		    });
		}
	}
	module.exports = new $yanzhi();
});