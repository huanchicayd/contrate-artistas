function showHeaderOnScroll() {
  var $navbar = document.querySelector('[data-js="navbar"]');

  window.addEventListener('scroll', function(){
    var $telaY = window.pageYOffset;

    if($telaY >= 300){
      $navbar.classList.add('header-fixed-appear');
    } else {
      $navbar.classList.remove('header-fixed-appear');
    }

    if($telaY >= 380){
      $navbar.classList.add('header-fixed');
      $headerSearch.classList.add('header-search--on');
    } else {
      $navbar.classList.remove('header-fixed');
      $headerSearch.classList.remove('header-search--on');
    }
  });
}