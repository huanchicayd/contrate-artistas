(function(){
    'use strict';

    const $accordionItem = document.querySelectorAll('.accordion-item');
    const $accordionHeader = document.querySelectorAll('.infografico__estrela__button');

    for(let i = 0; i < $accordionHeader.length; i++){
        $accordionHeader[i].addEventListener('click', toggleItem, false);
    }

    function toggleItem(e){
        e.preventDefault();
        const itemClass = this.parentNode.className;
        const testandoA = document.querySelectorAll('.infografico__estrela__button__arrow');

        for(let i = 0; i < $accordionItem.length; i++){
            $accordionItem[i].className = 'accordion-item close';
        }

        if(itemClass === 'accordion-item close'){
            this.parentNode.className = 'accordion-item open';
        }
    }

})();