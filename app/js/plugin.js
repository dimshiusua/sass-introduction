// more options in/out plugin
;(function ($){
    var moreOptionsBtn = $('.more-options-btn');
    var moreOptionsForm = $('.more-options-form');

    moreOptionsBtn.on('click', function(){
        moreOptionsForm.slideToggle();
    })
})(jQuery);

//search-form in/out plugin
;(function ($){
    var searchBtn = $('.search-btn');
    var searchForm = $('.search-form');
    var headerNav = $('.header-nav');

    searchBtn.on('click', function(){
        searchForm.slideToggle();
        headerNav.slideToggle();
    })
})(jQuery);