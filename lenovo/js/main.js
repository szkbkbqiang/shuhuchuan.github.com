
$(function(){

  var mySwiper = new Swiper('.swiper-container', {
    initialSlide:0,
    autoplay: false,//可选选项，自动滑动
    mousewheel: true,
    direction : 'vertical',
    on:{
      slideChange: function () {
        $('.swiper-count').html((this.activeIndex+1)+'/6');
        if(this.activeIndex == 2){
          $('.login-logo').addClass('color000');
        }else{
          $('.login-logo').removeClass('color000');
        }
        if(this.activeIndex == 0){
          $('.swiper-scroll').show();
        }else{
          $('.swiper-scroll').hide();
        }
      },
    }
  });

  $('.map_list ul').on('click','li',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });



  $('.recruit-mover').on('click',function(){
    $('.imgs-recru').hide();
    $('.recruit-hide').hide();
    $('.recruit-tab2').show();
  });

  $('.re-btn1').on('click',function(){
    $('.recruit-tab2').hide();
    $('.recruit-tab3').show();
  })
  $('.recruit-success-btn').on('click',function(){
    $(this).hide().next().show();
  })
  $('.next-recru').on('click',function(){
    $('.recruit-tab3').hide();
    $('.recruit-tab4').show();
  });

  $('.spokesman-more-btn').on('click',function(){
    $('.spokesman-text').hide();
    $('.min-list').hide();
    $('.spokesman-more-list').show();
  });

  $('.click-spok').on('click','li',function(){
    $('.spokesman-more-data').show();
  });

  $('.spokesman-more-data .close').on('click',function(){
    $('.spokesman-more-data').hide();
  })

  $('.team-more-btn').on('click',function(){
    $('.team-left').hide();
    $('.team-boxs').show();
  });

  $('.try-img').on('click',function(){
    $('.team-photo').hide();
    $('.img-update').show();
  });

  $('.img-update .close').on('click',function(){
    $('.team-photo').show();
    $('.img-update').hide();
  });

  $('.more-small-btn').on('click',function(){
    $('.small-text-center').hide();
    $('.small-content-scroll').show();
  });

  $('.release-btn').on('click',function(){
    $('.fabu-anli').show();
  });

  $('.fabu-anli .close').on('click',function(){
    $('.fabu-anli').hide();
  })

  $('.fabu-help-btn').on('click',function(){
    $('.help-from').show();
  })
  $('.help-from .close').on('click',function(){
    $('.help-from').hide();
  })


  $('.mouse-disable').on('mouseover',function(){
    mySwiper.mousewheel.disable();
  })
  $('.mouse-disable').on('mouseout',function(){
    mySwiper.mousewheel.enable();
  })
});
