define(function(require, exports, module){
	var $public = require('public');
	require('swiper');
	var $highlights = function () {
		this.init.apply(this,arguments);
	};
	$highlights.prototype = {
		init : function (param) {
			var $self = this;
			$self.bingEvent();
		},
		bingEvent : function () {
			var _self = this;
			
			var swiper = new Swiper('.swiper-container', {
			    pagination: '.swiper-pagination',
			    paginationClickable: true,
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev'
			});
		},
	}
	module.exports = new $highlights();
});