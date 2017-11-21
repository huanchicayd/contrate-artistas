(function(win, doc){
  'use strict';

  var $headerMenu = $('[data-js="header-menu"]');
  var $headerBtn = $('[data-js="header-menu-btn"]');

  function showHeaderOnScroll() {
    var $navbar = $('[data-js="navbar"]');
    var $headerSearch = $('[data-js="header-search"]');
    window.addEventListener('scroll', function(){
      var $tela = window.pageYOffset;
      if($tela >= 300){
        $navbar.addClass('header-fixed-appear');
      } else {
        $navbar.removeClass('header-fixed-appear');
      }

      if($tela >= 380){
        $navbar.addClass('header-fixed');
        $headerSearch.addClass('header-search--on');
      } else {
        $navbar.removeClass('header-fixed');
        $headerSearch.removeClass('header-search--on');
      }
    });
  }
  
  function openHeaderMenu() {
    var $headerBtn = $('[data-js="header-menu-btn"]');
    var $headerMenu = $('[data-js="header-menu"]');
    $headerBtn.click(function(){
      $headerMenu.toggleClass('header-menu--on');
    });
    //closeHeaderMenuOutside();
  }

  function closeHeaderMenuOutside(){
    window.addEventListener('mouseup', function(e){
      console.log(e.target)
      if(e.target !== $headerMenu
      && e.target.parent !== $headerMenu
      && e.target !== $headerBtn){
        $headerMenu.removeClass('header-menu--on');
      }
    });
  }
  
  showHeaderOnScroll();
  openHeaderMenu();
  
  
})(window, document);