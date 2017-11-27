function appendHeaderInfoMobile(){
  if(window.innerWidth <= 1199){
    $navMenu.append($headerInfo);
    $headerTelefones.innerText = '(21) 3185-8766' + '\n' + '(21) 3185-8766';
  } else {
    $headerRow.append($headerInfo);
    $headerTelefones.innerText = '(21) 3185-8766 / ' + '(21) 3185-8766';
  }
}
appendHeaderInfoMobile();

window.addEventListener('resize', function(){
  appendHeaderInfoMobile();
})