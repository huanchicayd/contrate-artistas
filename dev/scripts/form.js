(function(){
    'use strict';

    console.log('Carregado...');

    let pageUrl = window.location.href;
    let currentPage = pageUrl.substr(pageUrl.lastIndexOf('/') + 1);
    if(currentPage === 'artista_especifica.php' || currentPage === 'contato.php'){
        initForm();
    }

    function initForm(){

        let input = document.querySelectorAll('.form-box__input');
        for (let i = 0; i < input.length; i++) {
            const element = input[i];

            element.addEventListener('blur', function () {
                if (element.value) 
                    element.classList.add('used');
                else
                    element.classList.remove('used');
            })
        }

        function activeSelectTipoEvento() {
            var $inputSelectTipo = document.querySelector('[data-js="form-input__select-tipo"]');
            var $formboxSelectTipo = document.querySelector('.form-box__select-tipo');

            $inputSelectTipo.addEventListener('click', openSelectTipoEvento, false);

            function openSelectTipoEvento() {
                $formboxSelectTipo.classList.toggle('form-box__select-tipo--active');
                var $itens = document.querySelectorAll('.form-box__select-tipo a');
                for (var i = 0; i < $itens.length; i++) {
                    $itens[i].addEventListener('click', function (e) {
                        e.preventDefault();
                        $inputSelectTipo.value = this.textContent;
                        $inputSelectTipo.classList.add('used');
                        $inputSelectTipo.classList.add('form-box__input--isvalid');
                        $formboxSelectTipo.classList.remove('form-box__select-tipo--active');
                    })
                }
            }
        }

        activeSelectTipoEvento();

        function activeSelectEstado(){
            var $inputSelectEstado = document.querySelector('[data-js="form-input__select-estado"]');
            var $formboxSelectEstado = document.querySelector('.form-box__select-estado');
            
            $inputSelectEstado.addEventListener('click', openSelectEstado, false);

            function openSelectEstado(){
                $formboxSelectEstado.classList.toggle('form-box__select-estado--active');
                var $itens = document.querySelectorAll('.form-box__select-estado a');
                for (var i = 0; i < $itens.length; i++) {
                    $itens[i].addEventListener('click', function (e) {
                        e.preventDefault();
                        $inputSelectEstado.value = this.textContent;
                        $inputSelectEstado.classList.add('used');
                        $inputSelectEstado.classList.add('form-box__input--isvalid');
                        $formboxSelectEstado.classList.remove('form-box__select-estado--active');
                    })
                }
            }
        }

        activeSelectEstado();

        function activeSelectCidade() {
            var $inputSelectCidade = document.querySelector('[data-js="form-input__select-cidade"]');
            var $formboxSelectCidade = document.querySelector('.form-box__select-cidade');

            $inputSelectCidade.addEventListener('click', openSelectEstado, false);

            function openSelectEstado() {
                $formboxSelectCidade.classList.toggle('form-box__select-cidade--active');
                var $itens = document.querySelectorAll('.form-box__select-cidade a');
                for (var i = 0; i < $itens.length; i++) {
                    $itens[i].addEventListener('click', function (e) {
                        e.preventDefault();
                        $inputSelectCidade.value = this.textContent;
                        $inputSelectCidade.classList.add('used');
                        $inputSelectCidade.classList.add('form-box__input--isvalid');
                        $formboxSelectCidade.classList.remove('form-box__select-cidade--active');
                    })
                }
            }
        }

        activeSelectCidade();
    }

})();


