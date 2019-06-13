$(function () {
   var items = $('.carousel-inner .item');
   // console.log(items);
   $(window).on('resize', function () {
      /*1.获取当前屏幕的宽度*/
      var width = $(window).width();
      if (width >= 768) { //pc端
         /*为每一个item添加子元素--遍历*/
         items.each(function (index, value) {
            /*当前自定义属性中 存储的图片路径*/
            var imgSrc = $(this).data('largeImage');
            console.log(imgSrc);
            /*添加非移动端的子元素*/
            $(this).html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage", "url('" + imgSrc + "')"));
         });
      } else {
         items.each(function () {
            var imgSrc = $(this).data('smallImage');
            $(this).html(' <a href="javascript:;" class="smallImage"><img src="' + imgSrc + '" alt=""></a>');
         });
      }
   }).trigger('resize'); //定义事件的时候立刻触发一次



   /*添加移动端的滑动操作*/
   var startX, endX;
   var carousel_inner = $('.carousel-inner')[0];
   //获取当前得轮播图
   var carousel = $('.carousel');
   carousel_inner.addEventListener('touchstart', function (e) {
      startX = e.changedTouches[0].clientX;
      console.log(e);
   });
   carousel_inner.addEventListener('touchend', function (e) {
      endX = e.changedTouches[0].clientX;
      var distance=Math.abs(endX-startX);
      if (distance> 50) {
         carousel.carousel(startX>endX?'next':'prev');
      }
   });


   //   计算产品块导航项的原始宽度

});