(function init(){
    'use strict';

    function checkWindowInnerWidth(value){
        return window.innerWidth <= value;
    }

    let mobileScreenChanges = {
        reloadForMobile: () => {
            var reload = window.addEventListener('resize', () => {
                if(window.innerWidth <= 1199)
                    location.reload();
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

    $('.quem-somos__galeria').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });

    $('.nossos-clientes__depoimentos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

    window.checkWindowInnerWidth = checkWindowInnerWidth;
    window.mobileScreenChanges = mobileScreenChanges;
    window.init = init;

})();

