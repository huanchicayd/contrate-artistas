(function(){
    'use strict';

    const $artistaFormWrap = $('[data-js="artista-especifica-form-wrap"]');
    const $artistaOrcamentoWrap = $('.artista-sobre__orcamento');
    const $formOrcamento = $('.artistas-especifica__form');
    const $btnOrcamento = $('[data-js="btn-orcamento"]');

    function manipulateArtistaForm() {
        $btnOrcamento.click(function() {
            $artistaOrcamentoWrap.append($formOrcamento);
            $formOrcamento.css('display', 'block');

            $(window).resize(function () {
                if ($(window).width() > 991) {
                    $artistaFormWrap.append($formOrcamento);
                    $formOrcamento.css('display', 'block');
                    window.location.reload();
                }
            })
        });
    }
    manipulateArtistaForm();

})();