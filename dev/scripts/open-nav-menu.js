(function(){
    'use strict';

    let $navBtn = document.querySelector('[data-js="nav-btn"]');
    let $navWrap = document.querySelector('[data-js="nav-menu-wrap"]');
    let $navMenu = document.querySelector('[data-js="nav-menu"]');
    let $headerInfo = document.querySelector('[data-js="header-info"]');
    let $headerSearch = document.querySelector('[data-js="header-search"]');
    let $headerSearchForm = document.querySelector('[data-js="header-search-form"]');
    let $footer = document.querySelector('[data-js="footer"]');
    let $footerInfo = document.querySelector('.footer-info');
    let $footerBrandWrap = document.querySelector('.footer-brand-wrap');

    $navBtn.addEventListener('click', navMenuOpen, false);

    function navMenuOpen(event) {
        event.preventDefault();
        $navWrap.classList.toggle('nav-menu--on');
        execOnNavOpen();
    }

    function execOnNavOpen() {
        animateNavBtnWhenOpenClose();
        toggleNavDisplay();
        appendHeaderSearchInNav();
        appendElementsInNav();
        changeHeaderSeachBtnColor();
        mobileScreenChanges.reloadForDesktop();
    }

    function animateNavBtnWhenOpenClose() {
        let $navBtnSpan = document.querySelector('.header-menu-btn__bar');
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
        let $headerSearchBtn = document.querySelector('[data-js="header-search-btn"]');
        $headerSearchBtn.classList.toggle('header-search__btn--on');
    }

    function manipulateHeaderInfo() {
        $headerInfo.style.display = 'block';
        let headerInfoText = $headerInfo.firstElementChild.nextElementSibling;
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

    function navMenuAppendedElements() {
        manipulateHeaderInfo();
        $navWrap.appendChild($headerInfo);
        $navWrap.appendChild($footer);
        showFooterElement();
        $footerInfo.appendChild($footerBrandWrap);
    }

})();