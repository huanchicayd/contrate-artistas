(function(){
    'use strict';

    var pageUrl = window.location.href;
    var currentPage = pageUrl.substr(pageUrl.lastIndexOf('/') + 1);
    currentPage === 'index.php' || currentPage === '' || currentPage === 'resultado_busca.php' ? initFilterCategories() : false;

    function initFilterCategories(){
        const $filterSidebar = document.querySelector('[data-js="sidebar"]');
        const $filter = document.querySelector('.filter');
        const $filterBtn = document.querySelector('[data-js="sidebar-categorias-btn"]');
        const $body = document.querySelector('body');
        const $filterFechar = document.querySelector('.filter-fechar');
        const $filterWrap = document.querySelector('.filter-wrap');
        const $sidebarWrap = document.querySelector('[data-js="sidebar-wrap"]');

        $filterBtn.addEventListener('click', function(e){
            e.preventDefault();

            $body.classList.add('filter-body--on');
            $filterWrap.classList.add('filter-wrap--on');

            if ($body.classList.contains('filter-body--on')){
                $filterSidebar.style.display = 'block';
            }
            
            $filterSidebar.classList.add('sidebar--active');

            setTimeout(function(){
                $filter.classList.add('filter--on');
            }, 2);
            
            $filter.appendChild($filterSidebar);
        })

        $filterFechar.addEventListener('click', function(e){
            e.preventDefault();

            $body.classList.remove('filter-body--on');
            $filter.classList.remove('filter--on');

            setTimeout(function(){
                $filterWrap.classList.remove('filter-wrap--on');
            }, 500)
        });
        
        window.addEventListener('resize', function(){
            if(window.innerWidth > 991){
                $filterSidebar.style.display = 'block';
                $sidebarWrap.appendChild($filterSidebar);
                $body.classList.remove('filter-body--on');
                $filter.classList.remove('filter--on');
                $filterWrap.classList.remove('filter-wrap--on');
            }

            if(window.innerWidth <= 991){
                $filterSidebar.style.display = 'none';
            }

            if(window.innerWidth <= 991 && $body.classList.contains('filter-body--on')){
                $filterSidebar.style.display = 'block';
            }
        })
    }

})();