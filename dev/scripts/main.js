(function init() {
    'use strict';

    function checkWindowInnerWidth(value) {
        return window.innerWidth <= value;
    }

    let mobileScreenChanges = {
        reloadForMobile: function() {
            let reload = window.addEventListener('resize', function() {
                if (window.innerWidth <= 1199) {
                    setTimeout(function(){
                        window.location.reload();
                    });
                }
            });
            return reload;
        },
        reloadForDesktop: function() {
            let reload = window.addEventListener('resize', function() {
                if (window.innerWidth > 1199){
                    setTimeout(function(){
                        window.location.reload();
                    });
                }
            });
            return reload;
        }
    };

    $('.nossos-clientes__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.galeria-menor').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });

    $('.nossos-clientes__depoimentos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

    $('.artista-video__related-videos').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false
    });

    //Quem somos scroll link
    $('.quem-somos__banner__link').click(function (e) {
        e.preventDefault();
        const $quemSomosSaibaMais = $('#quem-somos__sobre').offset().top - 50;
        $('html').animate({
            scrollTop: $quemSomosSaibaMais + 'px'
        }, 1000);
    })

    function backToTop() {
        
        const $btnBackLink = $('a.btn-back');
        
        $(document).on('scroll', showHideBtnScroll);
        function showHideBtnScroll(){
            const $screenY = $(this).scrollTop();
            $screenY > 500 ? $btnBackLink.fadeIn() : $btnBackLink.fadeOut();
        }

        $($btnBackLink).click(scrollBackWhenClick);
        function scrollBackWhenClick(){
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        }
    }
    backToTop();

    //Export functions to global scope
    window.checkWindowInnerWidth = checkWindowInnerWidth;
    window.mobileScreenChanges = mobileScreenChanges;
    window.init = init;

})();