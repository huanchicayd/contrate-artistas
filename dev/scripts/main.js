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
            dots: true
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

    window.checkWindowInnerWidth = checkWindowInnerWidth;
    window.mobileScreenChanges = mobileScreenChanges;
    window.init = init;

})();


