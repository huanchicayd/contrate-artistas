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

    //Add custom scroll
    /*
        Se der algum problema pode remover
    */

    function detectMobileScreenNiceScroll(){
        if (window.innerWidth < 1199) {
            $('html').getNiceScroll().remove()
        } else {
            $('html').niceScroll({
                cursorwidth: 7,
                cursorcolor: '#ffcc00',
                cursorborder: 'none',
                cursoropacitymin: 0.2,
                horizrailenabled: false,
                zindex: 9999,
                background: '#ddd'
            });
        }
    }
    detectMobileScreenNiceScroll();

    window.addEventListener('resize', function(){
        detectMobileScreenNiceScroll();
    })

    //Export functions to global scope
    window.checkWindowInnerWidth = checkWindowInnerWidth;
    window.mobileScreenChanges = mobileScreenChanges;
    window.init = init;

})();