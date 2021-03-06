(function () {
    'use strict';

    const $navBtn = document.querySelector('[data-js="nav-btn"]');
    const $navWrap = document.querySelector('[data-js="nav-menu-wrap"]');
    const $navMenu = document.querySelector('[data-js="nav-menu"]');
    const $headerInfo = document.querySelector('[data-js="header-info"]');
    const $headerSearch = document.querySelector('[data-js="header-search"]');
    const $headerSearchForm = document.querySelector('[data-js="header-search-form"]');
    const $footer = document.querySelector('[data-js="footer"]');
    const $footerInfo = document.querySelector('.footer-info');
    const $footerBrandWrap = document.querySelector('.footer-brand-wrap');
    const $main = document.querySelector('main');

    $navBtn.addEventListener('click', navMenuOpen, false);

    function navMenuOpen(event) {
        event.preventDefault();
        $navWrap.classList.toggle('nav-menu--on');
        execOnNavOpen();
    }

    function execOnNavOpen() {
        animateNavBtnWhenOpenClose();
        toggleNavDisplay();
        toggleFixedOnMainTag();
        appendHeaderSearchInNav();
        appendElementsInNav();
        changeHeaderSeachBtnColor();
        mobileScreenChanges.reloadForDesktop();
    }

    function animateNavBtnWhenOpenClose() {
        const $navBtnSpan = document.querySelector('.header-menu-btn__bar');
        $navBtnSpan.classList.toggle('header-menu-btn__bar--on');
    }

    function appendElementsInNav() {
        if (checkWindowInnerWidth(1199))
            navMenuAppendedElements();
    }

    function appendHeaderSearchInNav() {
        if ($navWrap.classList.contains('nav-menu--on') && checkWindowInnerWidth(1199))
            $navWrap.firstElementChild.insertBefore($headerSearchForm, $navMenu);
        else
            $headerSearch.appendChild($headerSearchForm);
    }

    function changeHeaderSeachBtnColor() {
        const $headerSearchBtn = document.querySelector('[data-js="header-search-btn"]');
        if(checkWindowInnerWidth(1199))
            $headerSearchBtn.classList.toggle('header-search__btn--on');
    }

    function manipulateHeaderInfo() {
        $headerInfo.style.display = 'block';
        const headerInfoText = $headerInfo.firstElementChild.nextElementSibling;
        if (checkWindowInnerWidth(575))
            headerInfoText.textContent = headerInfoText.textContent.replace('/', '');
    }

    function showFooterElement() {
        if ($navWrap.classList.contains('nav-menu--on') && checkWindowInnerWidth(1199))
            $footer.style.display = 'block';
    }

    function toggleNavDisplay() {
        if ($navWrap.classList.contains('nav-menu--on') && checkWindowInnerWidth(1199))
            $navWrap.style.display = 'block';
        else if (checkWindowInnerWidth(1199))
            $navWrap.style.display = 'none';
    }

    function toggleFixedOnMainTag(){
        if ($navWrap.classList.contains('nav-menu--on') && checkWindowInnerWidth(1199)){
            $main.style.position = 'fixed';
        } else {
            $main.style.position = 'static';
        }
    }

    function navMenuAppendedElements() {
        manipulateHeaderInfo();
        $navWrap.appendChild($headerInfo);
        $navWrap.appendChild($footer);
        showFooterElement();
        $footerInfo.appendChild($footerBrandWrap);
    }

})();