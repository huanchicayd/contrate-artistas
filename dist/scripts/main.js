"use strict";!function o(){var e={reloadForMobile:function(){return window.addEventListener("resize",function(){window.innerWidth<=1199&&setTimeout(function(){window.location.reload()})})},reloadForDesktop:function(){return window.addEventListener("resize",function(){window.innerWidth>1199&&setTimeout(function(){window.location.reload()})})}};$(".nossos-clientes__slider").slick({slidesToShow:5,slidesToScroll:5,dots:!0,arrows:!1,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".galeria-menor").slick({slidesToShow:1,slidesToScroll:1,arrows:!0}),$(".nossos-clientes__depoimentos").slick({slidesToShow:1,slidesToScroll:1,dots:!0}),$(".artista-video__related-videos").slick({slidesToShow:3,slidesToScroll:3,dots:!0,arrows:!1}),$(".quem-somos__banner__link").click(function(o){o.preventDefault();var e=$("#quem-somos__sobre").offset().top-50;$("html").animate({scrollTop:e+"px"},1e3)}),function(){var o=$("a.btn-back");$(document).on("scroll",function(){$(this).scrollTop()>500?o.fadeIn():o.fadeOut()}),$(o).click(function(){return $("html, body").animate({scrollTop:0},1e3),!1})}(),window.checkWindowInnerWidth=function(o){return window.innerWidth<=o},window.mobileScreenChanges=e,window.init=o}();