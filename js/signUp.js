/* cuando se crean las validaciones, recordar que el evento submit se da
al formulario  no al boton*/
(function(){
  var validarTelefono= function(){

    $("#formulario").submit(validar);
  }

  var validar= function(e){

    var telefono= $("#telefono");
    e.preventDefault(); //Evita el envío del formulario hasta comprobar
    if(isNaN(telefono.val()) ) {
      alert("Ingrese solo numeros");
      //  return false;
    }
    else if(telefono.val().length < 9 || telefono.val().length < 1) {
      alert("ingrese al menos 9 caracteres");
      //    return false;
    }
  }
  $(document).ready(validarTelefono);
}());
