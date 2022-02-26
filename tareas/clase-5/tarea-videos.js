//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



const $inputHoras = document.querySelector("#input-horas");
const $inputMinutos = document.querySelector("#input-minutos");
const $inputSegundos = document.querySelector("#input-segundos");
const $botonAdd = document.querySelector("#boton-add");
const $botonReset = document.querySelector("#boton-reset")
const $outputTotal = document.querySelector("#output-tiempoTotal");
const $textoVideo = document.querySelector("#texto-video")


//tiempo total en minutos
let horasTotal;
let minutosTotal;
let segundosTotal;
let contador;

reset()
actulizarTitulo(contador)
actualizarTiempos();

$botonAdd.onclick = function(){
    if(contador>=5){

        alert("Solo vimos hasta la clase 5!");
        return false;
    }

    if ($inputHoras.value != "0" || $inputMinutos.value != "0" || $inputSegundos.value != "0" ){
        contador+=1;
        actulizarTitulo(contador)
        actualizarTiempos();
        
    }else
    {
        alert("Todos los campos son 0!")
    }
   
}   

$botonReset.onclick = function(){
    reset();
    actualizarTiempos();
    actulizarTitulo(contador);

}

function actualizarTiempos(){
    if(Number($inputMinutos.value) > 59){
        $inputMinutos.value=59;
        alert("No se pueden poner 59 minutos!");
    }
    
    if(Number($inputSegundos.value) > 59){

        $inputSegundos.value = 59;
        alert("No se pueden poner 59 segundos!");
    }

    
    horasTotal += Number($inputHoras.value);
    minutosTotal +=Number($inputMinutos.value);
    segundosTotal +=Number($inputSegundos.value);

    $outputTotal.innerText= `${horasTotal} Horas ${minutosTotal} Minutos ${segundosTotal} Segundos`

    $inputHoras.value = 0;
    $inputMinutos.value = 0;
    $inputSegundos.value = 0;
}

function actulizarTitulo(contador){

    $textoVideo.innerText= `¿Cual fue la duración de la clase ${contador}?`

}

function reset(){
    horasTotal = 0;
    minutosTotal = 0;
    segundosTotal = 0;
    contador=1;
}
