(function(){
    'use strict';

    const $nav = document.querySelector('.header-wrap');
    const $headerSearch = document.querySelector('[data-js="header-search"]');
    const $windowY = window.pageY;

    window.addEventListener('scroll', fixNavWhenScroll,false);
    function fixNavWhenScroll(){
        if (scrollY > 500 && window.innerWidth > 1199){
            $nav.style.position = 'fixed';
            $nav.style.zIndex = 9999;
            $headerSearch.style.visibility = 'visible';
        } else if(scrollY < 500 && window.innerWidth > 1199){
            $nav.style.position = 'absolute';
            $headerSearch.style.visibility = 'hidden';
        } else if(window.innerWidth < 1199){
            $nav.style.position = 'absolute';
        }
    }

})();