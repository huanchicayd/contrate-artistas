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

    //Export functions to global scope
    window.checkWindowInnerWidth = checkWindowInnerWidth;
    window.mobileScreenChanges = mobileScreenChanges;
    window.init = init;

})();