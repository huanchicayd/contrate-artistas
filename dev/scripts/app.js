(function(win, doc){
    'use strict';

    var $headerRow = document.querySelector('[data-js="info-parent"]');
    var $headerSearch = document.querySelector('[data-js="header-search"]');
    var $headerSearchForm = document.querySelector('.header-search__form');
    var $headerSearchBtn = document.querySelector('[data-js="header-search-btn"]');
    var $headerInfo = document.querySelector('.header-info');
    var $headerTelefones = document.querySelector('.header-info__telefones');
    var $headerMenu = document.querySelector('[data-js="header-menu-wrap"]');
    var $headerBtn = document.querySelector('[data-js="header-menu-btn"]');
    var $navMenu = document.querySelector('[data-js="nav-menu"]');
    var $body = document.querySelector('#overlay');
    var $bodyB = document.querySelector('body');
    var $sidebarFiltrosBtn = document.querySelector('[data-js="sidebar-categorias-btn"]');
    var $sidebar = document.querySelector('[data-js="sidebar"]');
    var $footer = document.querySelector('[data-js="footer"]');
    var $footerNewsletter = document.querySelector('[data-js="footer-newsletter"]');

    var windowMobileWidth = window.innerWidth;
    windowMobileWidth = 1199;



    function filtroDeExibicaoArtistas(){
        var $gridBtn = document.querySelector('[data-js="view-grid-btn"]');
        var $listBtn = document.querySelector('[data-js="view-list-btn"]');

        var $gridPanel = document.querySelector('.home-content__artista-wrap');
        var $artistaBox = document.querySelectorAll('.artista-box__link');
        var $artistaProfile = document.querySelector('.artista-box__profile');
        var $artistaProfileImage = document.querySelector('.artista-box__profile__image');

        function filtroGrid(){
            $gridBtn.addEventListener('click', function(){
                $gridBtn.classList.add('filter-btn-active');
                $listBtn.classList.remove('filter-btn-active');
                $gridPanel.classList.add('home-content__artista-wrap-vertical');
                for(var i = 0; i < $artistaBox.length; i++){
                    $artistaBox[i].classList.add('artista-box-vertical');
                }
            }, false);
        }
        filtroGrid();

        function filtroList(){
            $listBtn.addEventListener('click', function(){
                $listBtn.classList.add('filter-btn-active');
                $gridBtn.classList.remove('filter-btn-active');
                $gridPanel.classList.remove('home-content__artista-wrap-vertical');
                for(var i = 0; i < $artistaBox.length; i++){
                    $artistaBox[i].classList.remove('artista-box-vertical');
                }
            }, false);
        }
        filtroList();

        function filtroArtistasBtnActive() {
            if($gridPanel)
                $listBtn.classList.add('filter-btn-active');
        }
        filtroArtistasBtnActive();
    }

    function appendHeaderInfoMobile(){
        if(window.innerWidth <= 1199){
          $navMenu.appendChild($headerInfo);
          $navMenu.appendChild($footer);
        } else {
          $headerRow.appendChild($headerInfo);
          $bodyB.appendChild($footer);
        }
      }
    appendHeaderInfoMobile();

    function openNavMenu(){
        $headerBtn.addEventListener('click', function(){
            $headerMenu.classList.toggle('header-menu--on');
            $navMenu.classList.toggle('header-menu--show');

            if(window.innerWidth <= 1199){
                appendSearchForm();
            }

            window.addEventListener('resize', appendSearchForm);
        });
    }

    function appendSearchForm(){
        var $headerMenuList = document.querySelector('.header-menu__list');

        if($headerMenu.classList.contains('header-menu--on') && window.innerWidth <= windowMobileWidth){
            $navMenu.insertBefore($headerSearchForm, $headerMenuList);
            $headerSearchBtn.classList.add('btn-black');
        } else {
            $headerSearch.appendChild($headerSearchForm);
            $headerSearchBtn.classList.remove('btn-black');
        }
    }
    openNavMenu();

    function toggleSidebarArtistFilter(){
        $sidebarFiltrosBtn.addEventListener('click', function(){
        if($sidebarFiltrosBtn.textContent === 'Filtrar'){
            $sidebarFiltrosBtn.textContent = 'Filtrar categorias';
            toggleSidebarClassesAdd();
        } else {
            $sidebarFiltrosBtn.textContent = 'Filtrar';
            toggleSidebarClassesRemove();
            }
        });
    }
    toggleSidebarArtistFilter();

    function toggleSidebarClassesAdd(){
        $sidebarFiltrosBtn.classList.add('sidebar-categorias__btn--isabove');
        $sidebar.classList.add('sidebar--slide');
        $body.classList.add('sidebar-overlay');
    }

    function toggleSidebarClassesRemove(){
        $sidebarFiltrosBtn.classList.remove('sidebar-categorias__btn--isabove');
            $sidebar.classList.remove('sidebar--slide');
            $body.classList.remove('sidebar-overlay');
    }

    function clientesSlider(){
        $('.home-clientes__slider').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: true
        });
    }
    clientesSlider();



})(window, document);