$(function(){

  $('.banner_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
  autoplaySpeed: 2000,
});
  $('.clients_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
});

  $(window).scroll(function(){
    var scrolling=$(this).scrollTop()

    if (scrolling >20) {
      $("nav").addClass("menu_bg");
  }else{$("nav").removeClass("menu_bg")};


if (scrolling >20) {
    $(".back_to").fadeIn();
}else{$(".back_to").fadeOut()};

})
$(".back_to").click(function(){
  $("html,body").animate({
    scrollTop:0,
  })
})

  AOS.init();



});
