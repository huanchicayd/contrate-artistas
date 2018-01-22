(function(){
    'use strict';

    var pageUrl = window.location.href;
    var currentPage = pageUrl.substr(pageUrl.lastIndexOf('/') + 1);
    currentPage === 'index.php' || currentPage === '' ? initSidebarFilters() : false;

    function initSidebarFilters(){
        const $sidebarBtnFilter = document.querySelector('[data-js="sidebar-categorias-btn"]');
        const $sidebarWrap = document.querySelector('[data-js="sidebar-wrap"]');
        const $sidebar = document.querySelector('[data-js="sidebar"]');
        const $sidebarOverlay = document.querySelector('#overlay');

        $sidebarBtnFilter.addEventListener('click', activeSidebarFilter, false);
        
        function activeSidebarFilter() {
            verifyBtnTextContent();
            changeSidebarParentPosition()
            toggleSidebarStyles();
            mobileScreenChanges.reloadForDesktop();
        }

        function verifyBtnTextContent(){
            $sidebarBtnFilter.textContent === 'Filtrar' ?
                $sidebarBtnFilter.textContent = 'Filtrar Categorias' :
                $sidebarBtnFilter.textContent = 'Filtrar';
        }

        function changeSidebarParentPosition(){
            const sidebarParent = $sidebarWrap.parentElement;
            sidebarParent.style.position = 'relative';
        }

        function toggleSidebarStyles(){
            $sidebarWrap.classList.toggle('sidebar-wrap--isactive');
            $sidebarBtnFilter.classList.toggle('sidebar-categorias__btn--isabove');
            $sidebar.classList.toggle('sidebar--active');
            $sidebarOverlay.classList.toggle('sidebar-overlay');
        }
    } 
    
})();