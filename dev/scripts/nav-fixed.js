(function(){
    'use strict';

    const $nav = document.querySelector('.header-wrap');
    const $windowY = window.pageY;

    window.addEventListener('scroll', fixNavWhenScroll,false);
    function fixNavWhenScroll(){
        if (scrollY > 500 && window.innerWidth > 1199){
            $nav.style.position = 'fixed';
        } else if(scrollY < 500){
            $nav.style.position = 'absolute';
        }
    }

})();