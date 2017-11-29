function toggleSidebarArtistFilter(){

  $sidebarFiltrosBtn.click(function(event){
    event.preventDefault();
    if($sidebarFiltrosBtn.text() === 'Filtrar') {
      $sidebarFiltrosBtn.text('Filtrar categorias')
                        .addClass('sidebar-categorias__btn--isabove');
      $sidebar.addClass('sidebar--slide');
      $body.addClass('sidebar-overlay');

    } else {
      $sidebarFiltrosBtn.text('Filtrar')
                        .removeClass('sidebar-categorias__btn--isabove');
      $sidebar.removeClass('sidebar--slide');
      $body.removeClass('sidebar-overlay');
    }

  });
}



