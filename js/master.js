
/*
  Hace un scroll hasta la posición de la sección indicada
  @param{string} seccion
*/
function scrollToSection(seccion){
  var objetivo = seccion;
  var y;
  switch(objetivo){
    case 'portada':
      y = $('section.perfil').offset().top;
      break;
    case 'informacion':
      y = $('section.informacion').offset().top;
      break;
    case '':
      break;
    case '':
      break;
  }
  //alert(y);
  //window.scrollTo(0,y);
  scrollAnimation(y);
}

/*
  Realiza la animación que hace el scroll hasta una cierta posición y.
  @param{int} yPosition
*/
function scrollAnimation(yPosition){
  var step = 150;
  var currentPos = $("body").scrollTop();
  var intervalo;
  //alert(currentPos);
  step = currentPos > yPosition ? step * -1 : step;
  if(yPosition != currentPos){
    intervalo = setInterval(function(){
      currentPos = $("body").scrollTop();
  		if(currentPos != yPosition){
          window.scrollBy(0,step);
  		}else
  			clearInterval(intervalo);
  	},50);
  }
}

/*
  Regresa a la posición 0 el scroll tanto en Y como en X
*/
function resetScrollPos(body){
  $(body).ready(function(){
    window.scrollTo(0,0);
  });
}
