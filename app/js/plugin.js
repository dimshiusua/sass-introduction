// more options in/out plugin
;(function ($){
    var moreOptionsBtn = $('.more-options-btn');
    var moreOptionsForm = $('.more-options-form');

    moreOptionsBtn.on('click', function(){
        moreOptionsForm.slideToggle();
    })
})(jQuery);