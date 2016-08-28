define(function(require, exports, module){
	var $public = require('public');
	var $index = function () {
		this.init.apply(this,arguments);
	};
	$index.prototype = {
		init : function (param) {
			var $self = this;
			
			$self.bingEvent();
			// $self.loading();
		},
		bingEvent : function () {
			var _self = this;
			window.onload=function () {
				loadEnd = true;
			};
			setTimeout(function () {
				$('.loading').remove();
			},3000);
			$('.start-btn').on('click',function () {
				location.href = 'yanzhi.html'
			});
			$('.rule-activity').on('click',function () {
				$public.alert($public.config.indexArr);
			});
			$('.a70-kv').on('click',function () {
				var _this = $(this);
				setTimeout(function () {
					_this.remove();
				},1000);
			});
		},
	}
	module.exports = new $index();
});