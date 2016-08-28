define(function(require,exports,module){
	var $public = function () {
		this.init.apply(this,arguments);
	};
	$public.prototype = {
		init : function () {
			var $self = this;
			$self.bingEvent();
		},
		config:{
			indexArr : '<h2>活动规则</h2>\
			<p><span>活动时间：</span>2016年9月21日</p>\
			<p><span>游戏规则：</span>网友观看直播结束后，在注册报名后（如老虎机游戏已留，此处可直接抽奖）可参与直播抽奖，每名网友均有一次抽奖机会，奖品采取随机抽取的方式获得，奖品数量有限，先到先得。</p>\
			<p><span>奖品设置</span></p>\
			<p><b>天津一汽原厂车模</b>30个</p>\
			<p><span>活动说明:</span></p>\
			<p><small>●	</small>奖品将于活动结束后30个工作日内，由易车网工作人员通过电话核实收奖地址后安排发放。</p>\
			<p><small>●	</small>网友所填写的姓名、手机号码等信息均将作为参与本次活动的身份核实标准，具有唯一性，如因网友提交信息有误，导致无法参与或兑奖，易车网将不予承担责任。</p>\
			<p><small>●	</small>在发奖期间，因个人手机停机或注销等原因，未能联系到中奖网友的，将视此网友为弃权，不予补发。请中奖网友保持手机畅通，以便能够联系到您。</p>\
			<p><small>●	</small>本次活动严禁利用作弊器等一切违反活动规则的作弊行为，对于违背活动公平性的作弊者将直接取消其参与机会及获奖资格。</p>\
			<p><small>●	</small>λ	网友如有疑问可咨询易车网客服4000-168-168。</p>',
			yanzhiArr : '<h2>活动规则</h2>\
			<p><span>活动时间：</span>2016年9月12日-2016年9月21日</p>\
			<p><span>游戏规则：</span>网友进入页面参与刷脸测颜值，注册报名后即可参与老虎机赢大奖游戏，每名网友均有两次抽奖机会，奖品采取随机抽取的方式获得，奖品数量有限，先到先得。</p>\
			<p><span>奖品设置</span></p>\
			<p><b>50元京东电子券</b>150个</p>\
			<p><b>2D/3D通兑电子版电影票</b>200个</p>\
			<p><b>爱奇艺会员账号（一个月)</b>200个</p>\
			<p><span>活动说明:</span></p>\
			<p><small>●	</small>电影票、京东券和爱奇艺会员账号均为电子版，奖品将于活动结束后30个工作日内以短信的方式发给获奖网友。</p>\
			<p><small>●	</small>网友所填写的姓名、手机号码等信息均将作为参与本次活动的身份核实标准，具有唯一性，如因网友提交信息有误，导致无法参与或兑奖，易车网将不予承担责任。</p>\
			<p><small>●	</small>在发奖期间，因个人手机停机或注销等原因，未能联系到中奖网友的，将视此网友为弃权，不予补发。请中奖网友保持手机畅通，以便能够联系到您。</p>\
			<p><small>●	</small>本次活动严禁利用作弊器等一切违反活动规则的作弊行为，对于违背活动公平性的作弊者将直接取消其参与机会及获奖资格。</p>\
			<p><small>●	</small>网友如有疑问可咨询易车网客服4000-168-168。</p>',
			earsStr : '<div class="sEars"><p>我的天呐！这张照片好像没有人脸噢！<br />你在逗小骏玩吗？</p><p>这会大大降低您的颜值得分噢！</p></div>',

		},
		bingEvent : function () {
			$('.home-tabs .a70-drive-tab').on('click',function () {
				location.href = 'drive.html'
			});
			$('.home-tabs .a70-high-tab').on('click',function () {
				location.href = 'highlights.html'
			});
			$('.home-tabs .a70-live-tab').on('click',function () {
				location.href = 'index.html'
			});
		},
		alert : function (arr) {
			var html = [];
			html.push('<div class="alert-prompt">');
			html.push('<div class="alert-prompt-box"><div class="close"></div><div class="alert_main">'+arr+'</div></div>');
			html.push('</div>');
			if($('alert-prompt').length > 0)return;
			$('body').append(html.join('\n'));
			$('.alert-prompt .close').on('click',function () {
				$(this).parent().parent().remove();				
			});
		},
		alert : function (str) {
			var html = [];
			html.push('<div class="alert-prompt">');
			html.push('<div class="alert-prompt-box"><div class="close"></div><div class="alert_main">'+str+'</div></div>');
			html.push('</div>');
			if($('alert-prompt').length > 0)return;
			$('body').append(html.join('\n'));
			$('.alert-prompt .close').on('click',function () {
				$(this).parent().parent().remove();				
			});
		},
		alertTips : function (json) {
			json.confirm = json.confirm || '就要任性';
			json.cancel = json.cancel || '重新上传';
			var html = [];
			html.push('<div class="alert-tips">');
			html.push('<div>'+json.title+'</div>');
			html.push('<div class="alert-btn"><button>'+ json.confirm+'</button><button>'+json.cancel+'</button></div>')
			html.push('</div>');
			if($('alert-tips').length > 0)return;
			$('body').append(html.join('\n'));
			$('.alert-tips .alert-btn button:eq(0)').on('click',function () {
				// 就要任性 操作
				console.log(json.confirm);	
				$('.alert-tips').remove();
				$('.a70-yanzhi2').show();	
			});
			$('.alert-tips .alert-btn button:eq(1)').on('click',function () {
				location.reload();
			});
		},
		alertShowOff : function () {
			var html = [];
			html.push('<div class="alert-showOff">');
			html.push('<div><img src="img/share.png" alt="" /></div>');
			html.push('</div>');
			if($('alert-showOff').length > 0)return;
			$('body').append(html.join('\n'));
			$('.alert-showOff').on('click',function () {
				$(this).remove();
			});
		},
		alertFail : function (json) {
			json.more = json.more || false;
			var html = [];
			html.push('<div class="alert-dis" style="display:none"><div class="alert-arm">');
			html.push('<div>'+json.title+'</div>');
			html.push('<div class="arm-btn-back"><button>返回</button></div>');
			html.push('<div class="arm-discount"><a href="http://www.tjyqxs.com/active/a70/ssys/">更多优惠</a></div>');
			html.push('</div></div>');
			if($('alert-dis').length > 0)return;
			$('body').append(html.join('\n'));
			if(!json.more){
				$('.arm-discount').remove();
				$('.alert-arm').css({marginTop : '11rem'})
			}
			$('.alert-dis').fadeIn();
			$('.arm-btn-back').on('click',function () {
				// $('.alert-dis').remove();
				location.reload();
			});
		}
	}
	module.exports = new $public();
});