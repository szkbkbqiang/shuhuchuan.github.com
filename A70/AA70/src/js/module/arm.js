define(function(require, exports, module){
	var $public = require('public');
	require('slotmachine');
	var $arm = function () {
		this.init.apply(this,arguments);
	};
	$arm.prototype = {
		init : function (param) {
			var $self = this;
			
			$self.bingEvent();
			// $self.loading();
		},
		config : {
			// 控制抽奖是否成功 false == 成功 / true == 失败
			armOk : false
		},
		bingEvent : function () {
			var _self = this;
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
							if(!machine1.isRunning() && !machine2.isRunning() && !machine3.isRunning()){
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
			
		},
	}
	module.exports = new $arm();
});