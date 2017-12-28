(function(window){
    'use strict';

    var $navBtn = document.querySelector('[data-js="nav-btn"]');
    var $navWrap = document.querySelector('[data-js="nav-menu-wrap"]');
    var $navMenu = document.querySelector('[data-js="nav-menu"]');
    var $headerInfo = document.querySelector('[data-js="header-info"]');
    var $headerSearch = document.querySelector('[data-js="header-search"]');
    var $headerSearchForm = document.querySelector('[data-js="header-search-form"]');
    var $footer = document.querySelector('[data-js="footer"]');

    function checkWindowInnerWidth(){
        return window.innerWidth <= 1199;
    }

    var mobileScreenChanges = {
        reloadForMobile: function(){
            var reload = window.addEventListener('resize', function(){
                if(window.innerWidth <= 1199)
                    location.reload();
            });
            return reload;
        },
        reloadForDesktop: function(){
            var reload = window.addEventListener('resize', function(){
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
            var $navBtnSpan = document.querySelector('.header-menu-btn__bar');
            $navBtnSpan.classList.toggle('header-menu-btn__bar--on');
        }

        function appendElementsInNav(){
            if(checkWindowInnerWidth()){
                navMenuAppendedElements();
            }
        }

        function appendHeaderSearchInNav(){
            if($navWrap.classList.contains('nav-menu--on') && checkWindowInnerWidth()){
                $navWrap.firstElementChild.insertBefore($headerSearchForm, $navMenu);
            } else {
                $headerSearch.appendChild($headerSearchForm);
            }
        }

        function changeHeaderSeachBtnColor(){
            var $headerSearchBtn = document.querySelector('[data-js="header-search-btn"]');
            $headerSearchBtn.classList.toggle('header-search__btn--on');
        }

        function manipulateHeaderInfo(){
            $headerInfo.style.display = 'block';
            var headerInfoText = $headerInfo.firstElementChild.nextElementSibling;
            headerInfoText.textContent = headerInfoText.textContent.replace('/', ' ');
        }

        function showFooterElement(){
            if($navWrap.classList.contains('nav-menu--on') && checkWindowInnerWidth())
                $footer.style.display = 'block';
        }

        function toggleNavDisplay(){
            if($navWrap.classList.contains('nav-menu--on') && checkWindowInnerWidth()){
                $navWrap.style.display = 'block';
            } else if(checkWindowInnerWidth()) {
                $navWrap.style.display = 'none';
            }
        }

        function navMenuAppendedElements(){
            manipulateHeaderInfo();
            $navWrap.appendChild($headerInfo);
            $navWrap.appendChild($footer);
            showFooterElement();
        }

    })();

    (function homeArtistFilter(){
        var $gridBtn = document.querySelector('[data-js="view-grid-btn"]');
        var $listBtn = document.querySelector('[data-js="view-list-btn"]');

        var $gridPanel = document.querySelector('.home-content__artista-wrap');
        var $artistaBox = document.querySelectorAll('.artista-box__link');
        var $artistaProfile = document.querySelector('.artista-box__profile');
        var $artistaProfileImage = document.querySelector('.artista-box__profile__image');

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
        var $sidebarBtnFilter = document.querySelector('[data-js="sidebar-categorias-btn"]');
        var $sidebarWrap = document.querySelector('[data-js="sidebar-wrap"]');
        var $sidebar = document.querySelector('[data-js="sidebar"]');

        $sidebarBtnFilter.addEventListener('click', activeSidebarFilter, false);
        function activeSidebarFilter(){
            var btnText = $sidebarBtnFilter.textContent;
            btnText === 'Filtrar' ? btnText = 'Filtrar Categorias' : btnText = 'Filtrar';

            var sidebarParent = $sidebarWrap.parentElement;
            sidebarParent.style.position = 'relative';

            $sidebarWrap.classList.toggle('sidebar-wrap--isactive');
            $sidebarBtnFilter.classList.toggle('sidebar-categorias__btn--isabove');
            $sidebar.classList.toggle('sidebar--active');
        }

    })();

})(window);