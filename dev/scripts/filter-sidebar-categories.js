(function(){
    'use strict';

    function oldFilterCode(){
        // var pageUrl = window.location.href;
        // var currentPage = pageUrl.substr(pageUrl.lastIndexOf('/') + 1);
        // currentPage === 'index.php' || currentPage === '' || currentPage === 'resultado_busca.php' ? initSidebarFilters() : false;

        // function initSidebarFilters(){
        //     const $sidebarBtnFilter = document.querySelector('[data-js="sidebar-categorias-btn"]');
        //     const $sidebarWrap = document.querySelector('[data-js="sidebar-wrap"]');
        //     const $sidebar = document.querySelector('[data-js="sidebar"]');
        //     const $sidebarOverlay = document.querySelector('#overlay');

        //     $sidebarBtnFilter.addEventListener('click', activeSidebarFilter, false);
            
        //     function activeSidebarFilter() {
        //         verifyBtnTextContent();
        //         changeSidebarParentPosition()
        //         toggleSidebarStyles();
        //         mobileScreenChanges.reloadForDesktop();
        //     }

        //     function verifyBtnTextContent(){
        //         $sidebarBtnFilter.textContent === 'Filtrar' ?
        //             $sidebarBtnFilter.textContent = 'Filtrar Categorias' :
        //             $sidebarBtnFilter.textContent = 'Filtrar';
        //     }

        //     function changeSidebarParentPosition(){
        //         const sidebarParent = $sidebarWrap.parentElement;
        //         sidebarParent.style.position = 'relative';
        //     }

        //     function toggleSidebarStyles(){
        //         $sidebarWrap.classList.toggle('sidebar-wrap--isactive');
        //         $sidebarBtnFilter.classList.toggle('sidebar-categorias__btn--isabove');
        //         $sidebar.classList.toggle('sidebar--active');
        //         $sidebarOverlay.classList.toggle('sidebar-overlay');
        //     }
        // } 

    }

    const $filter = document.querySelector('[data-js="sidebar"]');
    const $filterWrap = document.querySelector('.filter');
    const $filterBtn = document.querySelector('[data-js="sidebar-categorias-btn"]');
    const $body = document.querySelector('body');
    const $filterFechar = document.querySelector('.filter-fechar');
    const $filterPai = document.querySelector('.filter-pai');
    const $sidebarWrap = document.querySelector('[data-js="sidebar-wrap"]');

    $filterBtn.addEventListener('click', function(e){
        e.preventDefault();

        $body.classList.add('filter-body--on');
        $filterPai.classList.add('filter-pai--on');

        if ($body.classList.contains('filter-body--on')){
            $filter.style.display = 'block';
        }
        
        $filter.classList.add('sidebar--active');

        setTimeout(function(){
            $filterWrap.classList.add('filter--on');
        }, 2);
        
        $filterWrap.appendChild($filter);
    })

    $filterFechar.addEventListener('click', function(e){
        e.preventDefault();

        $body.classList.remove('filter-body--on');
        $filterWrap.classList.remove('filter--on');

        setTimeout(function(){
            $filterPai.classList.remove('filter-pai--on');
        }, 500)
    });
    
    window.addEventListener('resize', function(){
        if(window.innerWidth > 991){
            $filter.style.display = 'block';
            $sidebarWrap.appendChild($filter);
            $body.classList.remove('filter-body--on');
            $filterWrap.classList.remove('filter--on');
            $filterPai.classList.remove('filter-pai--on');
        }

        if(window.innerWidth <= 991){
            $filter.style.display = 'none';
        }

        if(window.innerWidth <= 991 && $body.classList.contains('filter-body--on')){
            $filter.style.display = 'block';
        }
    })

})();