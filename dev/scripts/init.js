(function(window){
    'use strict';

<<<<<<< HEAD
    var $navBtn = document.querySelector('[data-js="nav-btn"]');
    var $navWrap = document.querySelector('[data-js="nav-menu-wrap"]');
    var $navMenu = document.querySelector('[data-js="nav-menu"]');
    var $headerInfo = document.querySelector('[data-js="header-info"]');
    var $headerSearch = document.querySelector('[data-js="header-search"]');
    var $headerSearchForm = document.querySelector('[data-js="header-search-form"]');
    var $footer = document.querySelector('[data-js="footer"]');
=======
    let $navBtn = document.querySelector('[data-js="nav-btn"]');
    let $navWrap = document.querySelector('[data-js="nav-menu-wrap"]');
    let $navMenu = document.querySelector('[data-js="nav-menu"]');
    let $headerInfo = document.querySelector('[data-js="header-info"]');
    let $headerSearch = document.querySelector('[data-js="header-search"]');
    let $headerSearchForm = document.querySelector('[data-js="header-search-form"]');
    let $footer = document.querySelector('[data-js="footer"]');
    let $footerInfo = document.querySelector('.footer-info');
    let $footerBrandWrap = document.querySelector('.footer-brand-wrap');
>>>>>>> Ultimo update com above the fold e ajustes nas fontes

    function checkWindowInnerWidth(value){
        return window.innerWidth <= value;
    }

<<<<<<< HEAD
    var mobileScreenChanges = {
        reloadForMobile: function(){
            var reload = window.addEventListener('resize', function(){
=======
    let mobileScreenChanges = {
        reloadForMobile: () => {
            var reload = window.addEventListener('resize', () => {
>>>>>>> Ultimo update com above the fold e ajustes nas fontes
                if(window.innerWidth <= 1199)
                    location.reload();
            });
            return reload;
        },
<<<<<<< HEAD
        reloadForDesktop: function(){
            var reload = window.addEventListener('resize', function(){
=======
        reloadForDesktop: () => {
            var reload = window.addEventListener('resize', () => {
>>>>>>> Ultimo update com above the fold e ajustes nas fontes
                if(window.innerWidth > 1199)
                    location.reload();
            });
            return reload;
        }
    };

    (function openNavMenu(){
        $navBtn.addEventListener('click', navMenuOpen, false);

        function navMenuOpen(event){
            event.preventDefault();
            $navWrap.classList.toggle('nav-menu--on');
            execOnNavOpen();
        }

        function execOnNavOpen(){
            animateNavBtnWhenOpenClose();
            toggleNavDisplay();
            appendHeaderSearchInNav();
            appendElementsInNav();
            changeHeaderSeachBtnColor();
            mobileScreenChanges.reloadForDesktop();
        }

        function animateNavBtnWhenOpenClose(){
<<<<<<< HEAD
            var $navBtnSpan = document.querySelector('.header-menu-btn__bar');
=======
            let $navBtnSpan = document.querySelector('.header-menu-btn__bar');
>>>>>>> Ultimo update com above the fold e ajustes nas fontes
            $navBtnSpan.classList.toggle('header-menu-btn__bar--on');
        }

        function appendElementsInNav(){
<<<<<<< HEAD
            if(checkWindowInnerWidth(1199)){
                navMenuAppendedElements();
            }
        }

        function appendHeaderSearchInNav(){
            if($navWrap.classList.contains('nav-menu--on') && checkWindowInnerWidth(1199)){
                $navWrap.firstElementChild.insertBefore($headerSearchForm, $navMenu);
            } else {
                $headerSearch.appendChild($headerSearchForm);
            }
        }

        function changeHeaderSeachBtnColor(){
            var $headerSearchBtn = document.querySelector('[data-js="header-search-btn"]');
=======
            if(checkWindowInnerWidth(1199))
                navMenuAppendedElements();
        }

        function appendHeaderSearchInNav(){
            if($navWrap.classList.contains('nav-menu--on') && checkWindowInnerWidth(1199))
                $navWrap.firstElementChild.insertBefore($headerSearchForm, $navMenu);
            else
                $headerSearch.appendChild($headerSearchForm);
        }

        function changeHeaderSeachBtnColor(){
            let $headerSearchBtn = document.querySelector('[data-js="header-search-btn"]');
>>>>>>> Ultimo update com above the fold e ajustes nas fontes
            $headerSearchBtn.classList.toggle('header-search__btn--on');
        }

        function manipulateHeaderInfo(){
            $headerInfo.style.display = 'block';
<<<<<<< HEAD
            var headerInfoText = $headerInfo.firstElementChild.nextElementSibling;
=======
            let headerInfoText = $headerInfo.firstElementChild.nextElementSibling;
>>>>>>> Ultimo update com above the fold e ajustes nas fontes
            if(checkWindowInnerWidth(575))
                headerInfoText.textContent = headerInfoText.textContent.replace('/', '');
        }

        function showFooterElement(){
            if($navWrap.classList.contains('nav-menu--on') && checkWindowInnerWidth(1199))
                $footer.style.display = 'block';
        }

        function toggleNavDisplay(){
<<<<<<< HEAD
            if($navWrap.classList.contains('nav-menu--on') && checkWindowInnerWidth(1199)){
                $navWrap.style.display = 'block';
            } else if(checkWindowInnerWidth(1199)) {
                $navWrap.style.display = 'none';
            }
=======
            if($navWrap.classList.contains('nav-menu--on') && checkWindowInnerWidth(1199))
                $navWrap.style.display = 'block';
            else if(checkWindowInnerWidth(1199))
                $navWrap.style.display = 'none';
>>>>>>> Ultimo update com above the fold e ajustes nas fontes
        }

        function navMenuAppendedElements(){
            manipulateHeaderInfo();
            $navWrap.appendChild($headerInfo);
            $navWrap.appendChild($footer);
            showFooterElement();
<<<<<<< HEAD
            var $footerInfo = document.querySelector('.footer-info');
            var $footerBrandWrap = document.querySelector('.footer-brand-wrap');
            var teste = $footer.lastElementChild;
=======
>>>>>>> Ultimo update com above the fold e ajustes nas fontes
            $footerInfo.appendChild($footerBrandWrap);
        }

    })();

    (function homeArtistFilter(){
<<<<<<< HEAD
        var $gridBtn = document.querySelector('[data-js="view-grid-btn"]');
        var $listBtn = document.querySelector('[data-js="view-list-btn"]');

        var $gridPanel = document.querySelector('.home-content__artista-wrap');
        var $artistaBox = document.querySelectorAll('.artista-box__link');
        var $artistaProfile = document.querySelector('.artista-box__profile');
        var $artistaProfileImage = document.querySelector('.artista-box__profile__image');
=======
        let $gridBtn = document.querySelector('[data-js="view-grid-btn"]');
        let $listBtn = document.querySelector('[data-js="view-list-btn"]');

        let $gridPanel = document.querySelector('.home-content__artista-wrap');
        let $artistaBox = document.querySelectorAll('.artista-box__link');
        let $artistaProfile = document.querySelector('.artista-box__profile');
        let $artistaProfileImage = document.querySelector('.artista-box__profile__image');
>>>>>>> Ultimo update com above the fold e ajustes nas fontes

        function activeGridFilter(){
            $gridBtn.addEventListener('click', gridFilterChangeStyle, false);
        }

        function gridFilterChangeStyle(){
            $gridBtn.classList.add('filter-btn-active');
            $listBtn.classList.remove('filter-btn-active');
            $gridPanel.classList.add('home-content__artista-wrap-vertical');
            Array.prototype.forEach.call($artistaBox, function(artistaBox){
                artistaBox.classList.add('artista-box-vertical');
            });
            mobileScreenChanges.reloadForMobile();
        }

        function activeListFilter(){
            $listBtn.addEventListener('click', listFilterChangeStyle, false);
        }

        function listFilterChangeStyle(){
            $listBtn.classList.add('filter-btn-active');
            $gridBtn.classList.remove('filter-btn-active');
            $gridPanel.classList.remove('home-content__artista-wrap-vertical');
            Array.prototype.forEach.call($artistaBox, function(artistaBox){
                artistaBox.classList.remove('artista-box-vertical');
            });
        }

        (function filtroArtistasBtnActive() {
            if($gridPanel)
                $listBtn.classList.add('filter-btn-active');
        })();

        activeGridFilter();
        activeListFilter();

    })();

    (function filterCategoriesWhenMobile(){
<<<<<<< HEAD
        var $sidebarBtnFilter = document.querySelector('[data-js="sidebar-categorias-btn"]');
        var $sidebarWrap = document.querySelector('[data-js="sidebar-wrap"]');
        var $sidebar = document.querySelector('[data-js="sidebar"]');
        var $sidebarOverlay = document.querySelector('#overlay');

        $sidebarBtnFilter.addEventListener('click', activeSidebarFilter, false);
        function activeSidebarFilter(){
            $sidebarBtnFilter.textContent === 'Filtrar' ? $sidebarBtnFilter.textContent = 'Filtrar Categorias' : $sidebarBtnFilter.textContent = 'Filtrar';

            var sidebarParent = $sidebarWrap.parentElement;
=======
        let $sidebarBtnFilter = document.querySelector('[data-js="sidebar-categorias-btn"]');
        let $sidebarWrap = document.querySelector('[data-js="sidebar-wrap"]');
        let $sidebar = document.querySelector('[data-js="sidebar"]');
        let $sidebarOverlay = document.querySelector('#overlay');

        $sidebarBtnFilter.addEventListener('click', activeSidebarFilter, false);
        function activeSidebarFilter(){
            $sidebarBtnFilter.textContent === 'Filtrar' ? 
            $sidebarBtnFilter.textContent = 'Filtrar Categorias' : 
            $sidebarBtnFilter.textContent = 'Filtrar';

            let sidebarParent = $sidebarWrap.parentElement;
>>>>>>> Ultimo update com above the fold e ajustes nas fontes
            sidebarParent.style.position = 'relative';

            $sidebarWrap.classList.toggle('sidebar-wrap--isactive');
            $sidebarBtnFilter.classList.toggle('sidebar-categorias__btn--isabove');
            $sidebar.classList.toggle('sidebar--active');
            $sidebarOverlay.classList.toggle('sidebar-overlay');

            mobileScreenChanges.reloadForDesktop();
        }

    })();

<<<<<<< HEAD
    if(!checkWindowInnerWidth(1199)){
=======
    if(!checkWindowInnerWidth(1199))
>>>>>>> Ultimo update com above the fold e ajustes nas fontes
        $('.home-clientes__slider').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: true
        });
<<<<<<< HEAD
    }
=======
>>>>>>> Ultimo update com above the fold e ajustes nas fontes

})(window);