function filtroArtistas(){
  var $gridBtn = $('[data-js="view-grid-btn"]');
  var $listBtn = $('[data-js="view-list-btn"]');

  var $gridPanel = $('.home-content__artista-wrap');
  var $artistaBox = $('.artista-box__link');
  var $artistaProfile = $('.artista-box__profile');
  var $artistaProfileImage = $('.artista-box__profile__image');

  $gridBtn.click(function(){
    $gridBtn.addClass('filter-btn-active');
    $listBtn.removeClass('filter-btn-active');

    $gridPanel.addClass('home-content__artista-wrap-vertical');
    $artistaBox.addClass('artista-box-vertical');
  });

  $listBtn.click(function(){
    $listBtn.addClass('filter-btn-active');
    $gridBtn.removeClass('filter-btn-active');

    $gridPanel.removeClass('home-content__artista-wrap-vertical');
    $artistaBox.removeClass('artista-box-vertical');
  });

  if($gridPanel){
    $listBtn.addClass('filter-btn-active');
  }
}