(function(){
    'use strict';

    $('.quem-somos__banner__link').click(function (e) {
        e.preventDefault();
        const $quemSomosSaibaMais = $('#quem-somos__sobre').offset().top - 50;
        $('html').animate({
            scrollTop: $quemSomosSaibaMais + 'px'
        }, 1000);
    });

    $('.particular__banner__content__link').click(function (e) {
        e.preventDefault();
        const $quemSomosSaibaMais = $('.particular__sobre').offset().top - 100;
        $('html').animate({
            scrollTop: $quemSomosSaibaMais + 'px'
        }, 1000);
    });

    function backToTop() {
        const $btnBackLink = $('a.btn-back');

        $(document).on('scroll', showHideBtnScroll);
        function showHideBtnScroll() {
            const $screenY = $(this).scrollTop();
            $screenY > 500 ? $btnBackLink.fadeIn() : $btnBackLink.fadeOut();
        }

        $($btnBackLink).click(scrollBackWhenClick);
        function scrollBackWhenClick() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        }
    }
    backToTop();

})();