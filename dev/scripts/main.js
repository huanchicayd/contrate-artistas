(function init(){
    'use strict';

    function checkWindowInnerWidth(value){
        return window.innerWidth <= value;
    }

    let mobileScreenChanges = {
        reloadForMobile: () => {
            var reload = window.addEventListener('resize', () => {
                if(window.innerWidth <= 1199){
                    location.reload();
                }
            });
            return reload;
        },
        reloadForDesktop: () => {
            var reload = window.addEventListener('resize', () => {
                if(window.innerWidth > 1199)
                    location.reload();
            });
            return reload;
        }
    };

    $('.nossos-clientes__slider').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: true,
            responsive: [
                {
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
        console.log('Clicado');
        e.preventDefault();
        var teste = $('#quem-somos__sobre').offset().top - 50;
        console.log(teste);
        $('html').animate({
            scrollTop: teste + 'px'
        }, 1000);
    })

    function voltarAoTopo() {
        $(document).on('scroll', function () {
            var y = $(this).scrollTop();
            if (y > 500) {
                $('a.btn-back').fadeIn();
            } else {
                $('a.btn-back').fadeOut();
            }
        });

        $('a.btn-back').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false
        });
    }
    voltarAoTopo();

    window.checkWindowInnerWidth = checkWindowInnerWidth;
    window.mobileScreenChanges = mobileScreenChanges;
    window.init = init;

})();


