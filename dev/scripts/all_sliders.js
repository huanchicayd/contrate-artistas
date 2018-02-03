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

})();