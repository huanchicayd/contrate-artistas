(function(){
    'use strict';

    const $header = document.querySelector('.header-wrap');
    const $headerSearch = document.querySelector('[data-js="header-search"]');

    window.addEventListener('scroll', fixNavWhenScroll, false);
    function fixNavWhenScroll(){
        if (scrollY > 700 && window.innerWidth > 1199){
            $header.classList.add('header-fixed');
        } else if(scrollY < 700 && window.innerWidth > 1199){
            $header.classList.remove('header-fixed');
        } else if(window.innerWidth < 1199){
            $header.classList.remove('header-fixed');
        }
    }

    window.addEventListener('resize', function(){
        if(window.innerWidth < 1199)
            $header.classList.remove('header-fixed');
    });

})();