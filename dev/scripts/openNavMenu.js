function openNavMenu() {
    $headerBtn.click(function(){
      $headerMenu.toggleClass('header-menu--on');

      if($headerMenu.hasClass('header-menu--on') && window.innerWidth <= windowMobileWidth){
        $navMenu.prepend($headerSearchForm);
        $headerSearchBtn.classList.add('btn-black');
      } else {
        $headerSearch.append($headerSearchForm);
        $headerSearchBtn.classList.remove('btn-black');
      }



    });
    //closeHeaderMenuOutside();
  }

  function closeHeaderMenuOutside(){
    window.addEventListener('click', function(e){
      console.log(e.target)
      if(e.target !== $headerMenu
      && e.target.parent !== $headerMenu
      && e.target !== $headerBtn){
        $headerMenu.removeClass('header-menu--on');
      }
    });
  }