//  se realizara el cambio de un documento a otro en un intervalo e tiempo
alert("hola");

var cambioDePagina = function (){
  var segundos = 2;
   setTimeout(function(){
     location.href="view/home.html"
   }, segundos * 1255);
 }

 $(document).ready(cambioDePagina);
