(function(){
    'use strict';

    const $infograficoEstrela = document.querySelector('.infografico__estrela');
    const $particularDestaque = document.querySelector('.particular__destaque');
    const $corpParticularMainSection = document.querySelector('.servicos');
    const $newSection = document.createElement('section');
    const $newContainer = document.createElement('div');

    function changeInfograficoPosition() {
        createNewSection();
        createNewContainer();
        appendInsertElements();
    };

    function createNewSection(){
        $newSection.setAttribute('class', 'newSection');
        $newSection.style.background = '#000';
    }

    function createNewContainer(){
        $newContainer.setAttribute('class', 'container');
    }

    function appendInsertElements(){
        if(window.innerWidth <= 991){
            $corpParticularMainSection.insertBefore($newSection, $particularDestaque);
            $newSection.appendChild($newContainer);
            $newContainer.appendChild($infograficoEstrela);
        }
    }

    //changeInfograficoPosition();

})();