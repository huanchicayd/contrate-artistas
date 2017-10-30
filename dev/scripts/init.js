(function(){
  'use strict';

  var $navbar = document.querySelector('[data-js="navbar"]');
  window.addEventListener('scroll', function(){
    var teste = this.pageYOffset;
    if(teste >= 380){
      $navbar.classList.add('header-fixed');
    } else if(teste <= 380){
      $navbar.classList.remove('header-fixed');
    }
  });

console.log('Carregou');

})();
