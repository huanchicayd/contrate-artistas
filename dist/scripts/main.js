"use strict";function manipulateArtistaForm(){var n=$('[data-js="artista-especifica-form-wrap"]'),i=$(".artista-sobre__orcamento"),o=$(".artistas-especifica__form");$('[data-js="btn-orcamento"]').click(function(){i.append(o),o.css("display","block"),$(window).resize(function(){$(window).width()>991&&(n.append(o),o.css("display","block"),window.location.reload())})})}!function n(){var i={reloadForMobile:function(){return window.addEventListener("resize",function(){window.innerWidth<=1199&&setTimeout(function(){window.location.reload()})})},reloadForDesktop:function(){return window.addEventListener("resize",function(){window.innerWidth>1199&&setTimeout(function(){window.location.reload()})})}};!function(){var n=$("a.btn-back");$(document).on("scroll",function(){$(this).scrollTop()>500?n.fadeIn():n.fadeOut()}),$(n).click(function(){return $("html, body").animate({scrollTop:0},1e3),!1})}(),window.checkWindowInnerWidth=function(n){return window.innerWidth<=n},window.mobileScreenChanges=i,window.init=n}(),manipulateArtistaForm();