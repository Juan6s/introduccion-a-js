/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


const $botonCargar = document.querySelector("#boton-cargar");
const $botonReset = document.querySelector("#boton-reset");
const $division = document.querySelector("#familiares");






function crearElementos(numero){
    let elementos=[]
        for(let i = 0; i < numero; i++){
            let $input = document.createElement("input");
            let $label = document.createElement("label");
            $label.textContent = "asdsa";

            elementos[i] = document.createElement("div");     
            elementos[i].appendChild($label)
            elementos[i].appendChild($input)
            

            
        }
    return elementos;
}

function agregarElementos(elementos, division){
    for(let i = 0; i < elementos.length; i++){

        division.appendChild(elementos[i])

    }


}


function resetElementos(){
    console.log("AS")
    $division.removeChild(0)

}




$botonCargar.onclick = function(){
    const inputFamiliares = Number(document.querySelector("#input-cantidad-familiares").value);
    
    agregarElementos(crearElementos(inputFamiliares),$division);
    
    

}

$botonReset.onclick = function(){
    resetElementos();
}