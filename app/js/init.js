//carousel init
$('.carousel').slick({
  slidesToShow:6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button type="button" class="slick-prev-arrow"><img src="img/arrow-prev.png"></button>',
  nextArrow: '<button type="button" class="slick-next-arrow"><img src="img/arrow-next.png"></button>',
  centerMode: true,
  centerPadding: '0px',
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1081,
      settings:{
        slidesToShow:4,
      }
    }
  ]
});
//form styler init
(function($) {
$(function() {

  $('select').styler();

});
})(jQuery);


//slick nav mobile menu init
;$(function(){  
	$('.header-nav').slicknav({
    label:'',
    closeOnClick: true,
  });
});
