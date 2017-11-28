function toggleSidebarArtistFilter(){
  $sidebarFiltrosBtn.addEventListener('click', function(){
    if($sidebarFiltrosBtn.innerText === 'FILTRAR'){
      this.innerText = 'Filtrar Categorias';
      this.classList.add('sidebar-categorias__btn--isabove');
      $sidebar.classList.add('sidebar--slide');
      $body.classList.add('sidebar-overlay');
    } else {
      this.innerText = 'Filtrar';
      this.classList.remove('sidebar-categorias__btn--isabove');
      $sidebar.classList.remove('sidebar--slide');
      $body.classList.remove('sidebar-overlay');
    }
  })
}
toggleSidebarArtistFilter();