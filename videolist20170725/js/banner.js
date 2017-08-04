var viewSwiper = new Swiper('.view .swiper-container1', {
        autoplay:2500,
        loop:true,
        autoplayDisableOnInteraction : false,
        onSlideChangeStart: function() {
            updateNavPosition();
        }
    })

    $('.view .arrow-left,.preview .arrow-left').on('click', function(e) {
        e.preventDefault();
        if(viewSwiper.activeIndex == 0) {
            viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
            return;
        }
        viewSwiper.swipePrev();
    })
    $('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
        e.preventDefault();
        if(viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
            viewSwiper.swipeTo(0, 1000);
            return
        }
        viewSwiper.swipeNext();
    })

    var previewSwiper = new Swiper('.preview .swiper-container1', {
        visibilityFullFit: true,
         autoplay:2500,
        autoplayDisableOnInteraction : false,
        slidesPerView: 'auto',
        loop:true,

        onlyExternal: true,
        onSlideClick: function() {
            viewSwiper.swipeTo(previewSwiper.clickedSlideIndex);
        }
    })

    function updateNavPosition() {
        $('.preview .active-nav').removeClass('active-nav');
        var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav');
        if(!activeNav.hasClass('swiper-slide-visible')) {
            if(activeNav.index() > previewSwiper.activeIndex) {
                var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1;
                previewSwiper.swipeTo(activeNav.index() - thumbsPerNav);
            } else {
                previewSwiper.swipeTo(activeNav.index());
            }
        }
    }
var text=['官方微博','掌握滨州微信','今滨州微信','滨州手机台','全媒体','传媒网手机版']
$(".jz_list li").hover(function (){
    $(this).find('p').css({'background':'#F44343','color':'#fff'}).html('立即关注');
},function (){
    var thsindex=$(this).index();
    $(this).find('p').css({'background':' #F4F4F4','color':'#191919'}).html(text[thsindex]);
})