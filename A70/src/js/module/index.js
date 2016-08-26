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
			$('.start-btn').on('click',function () {
				location.href = 'yanzhi.html'
			});
		},
	}
	module.exports = new $index();
});