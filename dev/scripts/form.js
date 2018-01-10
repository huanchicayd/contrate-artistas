(function(){
    'use strict';

    var input = document.querySelectorAll('.form-box__input');

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        
        element.addEventListener('blur', function(){
            if (element.value) {
                element.classList.add('used');
            } else {
                element.classList.remove('used');
            }
        })
    } 

})();


