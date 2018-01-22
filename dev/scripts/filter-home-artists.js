(function(){
    'use strict';

    var pageUrl = window.location.href;
    var currentPage = pageUrl.substr(pageUrl.lastIndexOf('/') + 1);
    currentPage === 'index.php' || currentPage === '' ? initHomeFilters() : false;

    function initHomeFilters(){
        const $gridBtn = document.querySelector('[data-js="view-grid-btn"]');
        const $listBtn = document.querySelector('[data-js="view-list-btn"]');

        const $gridPanel = document.querySelector('.home-content__artista-wrap');
        const $artistaBox = document.querySelectorAll('.artista-box__link');
        const $artistaProfile = document.querySelector('.artista-box__profile');
        const $artistaProfileImage = document.querySelector('.artista-box__profile__image');

        function activeGridFilter(){
            $gridBtn.addEventListener('click', gridFilterChangeStyle, false);
        }

        function gridFilterChangeStyle(){
            $gridBtn.classList.add('filter-btn-active');
            $listBtn.classList.remove('filter-btn-active');
            $gridPanel.classList.add('home-content__artista-wrap-vertical');
            Array.prototype.forEach.call($artistaBox, (artistaBox) => {
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
            Array.prototype.forEach.call($artistaBox, (artistaBox) => {
                artistaBox.classList.remove('artista-box-vertical');
            });
        }

        (function filtroArtistasBtnActive(){
            if($gridPanel)
                $listBtn.classList.add('filter-btn-active');
        })();

        activeGridFilter();
        activeListFilter();
    }
    
})();