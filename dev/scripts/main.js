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

    function backToTop() {
        const $btnBackLink = $('a.btn-back');
        
        $(document).on('scroll', showHideBtnScroll);
        function showHideBtnScroll(){
            const $screenY = $(this).scrollTop();
            $screenY > 500 ? $btnBackLink.fadeIn() : $btnBackLink.fadeOut();
        }

        $($btnBackLink).click(scrollBackWhenClick);
        function scrollBackWhenClick(){
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        }
    }
    backToTop();


    //Export functions to global scope
    window.checkWindowInnerWidth = checkWindowInnerWidth;
    window.mobileScreenChanges = mobileScreenChanges;
    window.init = init;

})();

function manipulateArtistaForm(){
    const $artistaFormWrap = $('[data-js="artista-especifica-form-wrap"]');
    const $artistaOrcamentoWrap = $('.artista-sobre__orcamento');
    const $formOrcamento = $('.artistas-especifica__form');
    const $btnOrcamento = $('[data-js="btn-orcamento"]');
    
    $btnOrcamento.click(function(){
        $artistaOrcamentoWrap.append($formOrcamento);
        $formOrcamento.css('display', 'block');
    
        $(window).resize(function(){
            if($(window).width() > 991){
                $artistaFormWrap.append($formOrcamento);
                $formOrcamento.css('display', 'block');
                window.location.reload();
            }
        })
    });
}
manipulateArtistaForm();
