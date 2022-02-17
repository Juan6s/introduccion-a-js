//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */


const $inputNombre = document.querySelector("#input-nombre");
const $inputApellido = document.querySelector("#input-apellido");
const $inputEdad = document.querySelector("#input-edad");
const $botonIngreso = document.querySelector("#boton-ingreso");
const $campoTexto = document.querySelector("#label-campotexto");
const $titulo = document.querySelector("#titulo-bienvenido");


$botonIngreso.onclick = function(){
    if (! Boolean($inputNombre.value) || ! Boolean($inputApellido.value) || ! Boolean($inputEdad.value)){
        console.log("faltan datos")
        $campoTexto.innerText ="Faltan Datos por completar..."
    }else{

        $campoTexto.innerText = `Tu nombre es ${$inputNombre.value} ${$inputApellido.value} y tenes ${$inputEdad.value}`
        $titulo.innerText =`Bienvenido, ${$inputNombre.value} ${$inputApellido.value} !`
    }
    
    return false;
}


