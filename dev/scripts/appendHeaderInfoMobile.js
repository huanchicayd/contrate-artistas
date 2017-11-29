function appendHeaderInfoMobile(){
  if(window.innerWidth <= 1199){
    $navMenu.append($headerInfo);
    $navMenu.append($footer);

  } else {
    $headerRow.append($headerInfo);
    $bodyB.append($footer);
  }
}
appendHeaderInfoMobile();