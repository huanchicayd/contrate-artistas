(function(){
    'use strict';

    var pageUrl = window.location.href;
    var currentPage = pageUrl.substr(pageUrl.lastIndexOf('/') + 1);
    currentPage === 'index.php' || currentPage === '' ? initSidebarFilters() : false;

    function initSidebarFilters(){
        let $sidebarBtnFilter = document.querySelector('[data-js="sidebar-categorias-btn"]');
        let $sidebarWrap = document.querySelector('[data-js="sidebar-wrap"]');
        let $sidebar = document.querySelector('[data-js="sidebar"]');
        let $sidebarOverlay = document.querySelector('#overlay');

        $sidebarBtnFilter.addEventListener('click', activeSidebarFilter, false);
        function activeSidebarFilter() {
            $sidebarBtnFilter.textContent === 'Filtrar' ?
                $sidebarBtnFilter.textContent = 'Filtrar Categorias' :
                $sidebarBtnFilter.textContent = 'Filtrar';

            let sidebarParent = $sidebarWrap.parentElement;
            sidebarParent.style.position = 'relative';

            $sidebarWrap.classList.toggle('sidebar-wrap--isactive');
            $sidebarBtnFilter.classList.toggle('sidebar-categorias__btn--isabove');
            $sidebar.classList.toggle('sidebar--active');
            $sidebarOverlay.classList.toggle('sidebar-overlay');

            mobileScreenChanges.reloadForDesktop();
        }
    } 
    
})();