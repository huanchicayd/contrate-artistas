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

  $('.home-clientes__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true
  });

  function filtroArtistas(){
    var $gridBtn = $('[data-js="view-grid-btn"]');
    var $listBtn = $('[data-js="view-list-btn"]');

    var $gridPanel = $('.home-content__artista-wrap');
    var $artistaBox = $('.artista-box__link');
    var $artistaProfile = $('.artista-box__profile');
    var $artistaProfileImage = $('.artista-box__profile__image');

    $gridBtn.click(function(){
      $gridBtn.addClass('filter-btn-active');
      $listBtn.removeClass('filter-btn-active');

      $gridPanel.addClass('home-content__artista-wrap-vertical');
      $artistaBox.addClass('artista-box-vertical');
    });

    $listBtn.click(function(){
      $listBtn.addClass('filter-btn-active');
      $gridBtn.removeClass('filter-btn-active');

      $gridPanel.removeClass('home-content__artista-wrap-vertical');
      $artistaBox.removeClass('artista-box-vertical');
    });

    if($gridPanel){
      $listBtn.addClass('filter-btn-active');
    }
  }
  filtroArtistas();

})(window, document);