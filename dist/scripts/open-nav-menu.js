"use strict";!function(){function e(){n(),r(),d(),o(),t(),c(),mobileScreenChanges.reloadForDesktop()}function n(){document.querySelector(".header-menu-btn__bar").classList.toggle("header-menu-btn__bar--on")}function t(){checkWindowInnerWidth(1199)&&s()}function o(){u.classList.contains("nav-menu--on")&&checkWindowInnerWidth(1199)?u.firstElementChild.insertBefore(y,h):f.appendChild(y)}function c(){var e=document.querySelector('[data-js="header-search-btn"]');checkWindowInnerWidth(1199)&&e.classList.toggle("header-search__btn--on")}function a(){m.style.display="block";var e=m.firstElementChild.nextElementSibling;checkWindowInnerWidth(575)&&(e.textContent=e.textContent.replace("/",""))}function i(){u.classList.contains("nav-menu--on")&&checkWindowInnerWidth(1199)&&(p.style.display="block")}function r(){u.classList.contains("nav-menu--on")&&checkWindowInnerWidth(1199)?u.style.display="block":checkWindowInnerWidth(1199)&&(u.style.display="none")}function d(){u.classList.contains("nav-menu--on")&&checkWindowInnerWidth(1199)?b.style.position="fixed":b.style.position="static"}function s(){a(),u.appendChild(m),u.appendChild(p),i(),W.appendChild(S)}var l=document.querySelector('[data-js="nav-btn"]'),u=document.querySelector('[data-js="nav-menu-wrap"]'),h=document.querySelector('[data-js="nav-menu"]'),m=document.querySelector('[data-js="header-info"]'),f=document.querySelector('[data-js="header-search"]'),y=document.querySelector('[data-js="header-search-form"]'),p=document.querySelector('[data-js="footer"]'),W=document.querySelector(".footer-info"),S=document.querySelector(".footer-brand-wrap"),b=document.querySelector("main");l.addEventListener("click",function(n){n.preventDefault(),u.classList.toggle("nav-menu--on"),e()},!1)}();