(function(win, doc){
  'use strict';

  $('.home-clientes__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true
  });

  //Init functions

  openNavMenu(); //Active menu on click
  //showHeaderOnScroll(); //Active fixed header bar on scroll
  filtroArtistas(); //Active grid/list panel of home artists

})(window, document);