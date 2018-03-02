
// 基础方法
var BaseFun = {
  //  内容提示
    textpop:function(json){
      var _this = this;
      var title = json.title || '提示';
      if($('.popbox').length || json.text == ''){return};
      var TextHmtl = ('<div class="text-pop-box">\
                          <div class="text-pop-center">\
                            <h3 class="text-pop-title">'+title+'</h3>\
                            <p>'+json.text+'</p>\
                            <span class="text-pop-close">x</span>\
                          </div>\
                       </div>');
      $(document.body).append(TextHmtl);
      var marginLefts = '-'+$('.text-pop-center').innerHeight()/2+'px';
      $('.text-pop-center').css({'margin-top':marginLefts});
      $('.text-pop-close,.text-pop-box').on('click',function(e){
        if(this == e.target){
            _this.removeTextPop();
        }      
      });
    },
  // 错误警告提示框
    pop : function(json){
      if($('.popbox').length || json.text == ''){return};
      var popHtml = ('<div class="popbox">\
                        <div class="popcenter">'+json.text+'</div>\
                      </div>');
        $(document.body).append(popHtml);
        var marginLefts = '-'+$('.popcenter').innerWidth()/2+'px';
        $('.popcenter').css({'margin-left':marginLefts});
        setTimeout(function(){$('.popbox').remove();},1500);
    },
  // 提交确认框
    dialog : function(json){
        var _this = this;
        var title = json.title || '提示';
        var text = json.text || '你确定吗？';
        var cancel = json.cancel || '取消';
        var confirm = json.confirm || '确定';
        var callback = json.callback || function(){};
        var configHtml = ('<div class="dialog-box">\
                            <div class="dialog-center">\
                                <p class="dialog-title">'+title+'</p>\
                                <p class="dialog-text"><span>'+text+'</span></p>\
                                <div class="dialog-btn">\
                                    <a href="javascript:;" class="dialog-cancel">'+cancel+'</a>\
                                    <a href="javascript:;" class="dialog-confirm">'+confirm+'</a>\
                                </div>\
                            </div>\
                       </div>');
        $(document.body).append(configHtml);
        $('.dialog-cancel').on('click',function(){
            callback(0);
            _this.RemoveDialog();
        });
        $('.dialog-confirm').on('click',function(){
            callback(1);
            _this.RemoveDialog();
        });
        $('.dialog-box').on('click',function(e){
            if(this == e.target){
                $(this).remove();
            }
        })
    },
    removeTextPop : function(){
      $('.text-pop-box').remove();
    },
    RemoveDialog : function(){
        $('.dialog-box').remove();
    }
};
