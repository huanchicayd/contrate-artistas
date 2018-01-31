(function(){
    'use strict';

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
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000
    });

    $('.artista-video__related-videos').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //Quem somos scroll link
    $('.quem-somos__banner__link').click(function (e) {
        e.preventDefault();
        const $quemSomosSaibaMais = $('#quem-somos__sobre').offset().top - 50;
        $('html').animate({
            scrollTop: $quemSomosSaibaMais + 'px'
        }, 1000);
    })

    $('.particular__banner__content__link').click(function (e) {
        e.preventDefault();
        const $quemSomosSaibaMais = $('.particular__sobre').offset().top - 100;
        $('html').animate({
            scrollTop: $quemSomosSaibaMais + 'px'
        }, 1000);
    })

})();