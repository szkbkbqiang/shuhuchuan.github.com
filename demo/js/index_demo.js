window.onload =function(){
	Vue.filter('isImg',function(input,type){
		if(type == 'image'){
			return '<img src="'+input+'"/>';
		}else{
			return input;
		}
	});
	var OBJECT_CRUD = new Vue({
	    el:'#list_tips',
	    data:{
	      list : ''
	    },
	    created:function(){
	      var _self = this;
	      var url = "../demo/js/1.json";
	      _self.$http.get(url).then(function (res) {
	        var data = res.data;
	         _self.list = data.content;
	      });
	    },
	    ready : function(){
	    	setTimeout(function(){
	    		swiperTimer();
	    		$('.details p').find('img').eq(0).parent().next().nextAll().hide();
	    		$(".add_details a").click(function(){
	    			$('.details p').find('img').eq(0).parent().next().nextAll().show();
	    			$(this).hide();
	    		});
	    	},1000);
	    }
	});

};
