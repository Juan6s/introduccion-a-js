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




function crearElementos(numero) {
    const TEXTO = "Edad del integrante Nº:"
    
    

    let elementos = [];

    for (let i = 0; i < numero; i++) {
        const input = document.createElement("input");
        input.type = "Number";
        const label = document.createElement("label");

        label.textContent = `${TEXTO} ${i + 1}`;
        

        elementos[i] = document.createElement("div");
        elementos[i].appendChild(label);
        elementos[i].appendChild(input);



    }
    
    
    return elementos;
}

function agregarElementos(elementos, division) {
    

    for (let i = 0; i < elementos.length; i++) {

        division.appendChild(elementos[i])

    }
    document.querySelector("#boton-calcular").className = "";

}

function reiniciarElementos(elementos, division) {
    for (let i = 0; i < elementos.length; i++) {
        division.removeChild(elementos[i]);
    }


    return [];

}

function obtenerValorElementos(elementos){
    let valores = [];
    for (let i =0; i<elementos.length; i++){
        let subelemento = elementos[i]
        valores[i] = Number(subelemento.lastChild.value);
    }
    return valores;
}

function ObtenerMenorEdad(valores){
    let minimo = valores[0]
    for(let i=1;i<valores;i++){
        if(valores[i]<minimo){
            minimo = valores[i];
        }

    }
    return minimo;
}

function obtenerMayorEdad(valores){
    let maximo = valores[0]
    for(let i=1;i<valores.length;i++){
        if(valores[i]>maximo){
            maximo = valores[i];
        }

    }
    return maximo;
}

function obtenerPromedioEdades(valores){
    let sumaTotal=0;
    for(let i = 0;i<valores.length;i++){
        sumaTotal+=valores[i]

    }
    
    return Number((sumaTotal/valores.length).toFixed(2));
    
}


$botonCargar.onclick = function (event) {
    const inputFamiliares = Number(document.querySelector("#input-cantidad-familiares").value);

    
    event.preventDefault();

    if (inputFamiliares <= 0) {
        alert("Ingrese numeros mayores a 0!")
        return false;
    }


    if (elementos.length > 1) {
        elementos = reiniciarElementos(elementos, $division);
    }

    elementos = crearElementos(inputFamiliares);
    agregarElementos(elementos, $division);


}


$botonReset.onclick = function () {
    elementos = reiniciarElementos(elementos, $division);
    document.querySelector("#boton-calcular").className="oculto";
}



document.querySelector("#boton-calcular").onclick = function(){

    document.querySelector("#edad-mayor").textContent = `La edad del mayor es:${obtenerMayorEdad(obtenerValorElementos(elementos))}`; 
    document.querySelector("#edad-menor").textContent = `La edad del menor es:${ObtenerMenorEdad(obtenerValorElementos(elementos))}`; 
    document.querySelector("#edad-promedio").textContent = `El promedio de edad es:${obtenerPromedioEdades(obtenerValorElementos(elementos))}`; 
}