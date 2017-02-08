
$('.carousel').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button type="button" class="slick-prev-arrow"><img src="img/arrow-prev.png"></button>',
  nextArrow: '<button type="button" class="slick-next-arrow"><img src="img/arrow-next.png"></button>',
});
//form styler init
(function($) {
$(function() {

  $('select').styler();

});
})(jQuery);
//form styler delay to correct fonts errors (http://dimox.name/jquery-form-styler/ )
setTimeout(function() {
  $('input, select').styler();
}, 100)