define(function(require,exports,module){
	var $public = function () {
		this.init.apply(this,arguments);
	};
	$public.prototype = {
		init : function () {
			var $self = this;
		},
	}
	module.exports = new $public();
});