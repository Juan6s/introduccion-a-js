/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


const $botonCargar = document.querySelector("#boton-cargar");
const $botonReset = document.querySelector("#boton-reset");
const $division = document.querySelector("#familiares");
let elementos = [];





function crearElementos(numero){
    const TEXTO = "Edad del integrante Nº:"


    let elementos=[]
        for(let i = 0; i < numero; i++){
            const input = document.createElement("input");
            const label = document.createElement("label");
            
            label.textContent = `${TEXTO} ${i+1}`;
            input.type = "Number";

            elementos[i] = document.createElement("div");     
            elementos[i].appendChild(label);
            elementos[i].appendChild(input);
            

            
        }
    return elementos;
}

function agregarElementos(elementos, division){
    botonCalcular 
    
    for(let i = 0; i < elementos.length; i++){

        division.appendChild(elementos[i])

    }
    

}


function resetElementos(elementos,division){
    for(let i = 0; i<elementos.length;i++){
        division.removeChild(elementos[i]);
    }
    
    
    return [];

}


$botonCargar.onclick = function(){
    const inputFamiliares = Number(document.querySelector("#input-cantidad-familiares").value);
    
    if (inputFamiliares <=0){
        alert("Ingrese numeros mayores a 0!")
        return false;
    }
 

    if(elementos.length >1){
        elementos = resetElementos(elementos,$division);
    }
    
    elementos = crearElementos(inputFamiliares);
    agregarElementos(elementos,$division);
    
    

}


$botonReset.onclick = function(){
    elementos = resetElementos(elementos,$division);
}