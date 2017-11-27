function showHeaderOnScroll() {
  var $navbar = $('[data-js="navbar"]');

  window.addEventListener('scroll', function(){
    var $telaY = window.pageYOffset;

    if($telaY >= 300){
      $navbar.addClass('header-fixed-appear');
    } else {
      $navbar.removeClass('header-fixed-appear');
    }

    if($telaY >= 380){
      $navbar.addClass('header-fixed');
      $headerSearch.addClass('header-search--on');
    } else {
      $navbar.removeClass('header-fixed');
      $headerSearch.removeClass('header-search--on');
    }
  });
}