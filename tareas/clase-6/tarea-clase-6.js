/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


const $botonCargar = document.querySelector("#boton-cargar");
const $botonReset = document.querySelector("#boton-reset");
const $division = document.querySelector("#familiares");

const botonCalcular = document.createElement("button");
botonCalcular.textContent = "Calcular";
botonCalcular.id ="boton-calcular;"

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
    
    elementos.push(botonCalcular);
    
    return elementos;
}

function agregarElementos(elementos, division) {
    

    for (let i = 0; i < elementos.length; i++) {

        division.appendChild(elementos[i])

    }


}

function resetElementos(elementos, division) {
    for (let i = 0; i < elementos.length; i++) {
        division.removeChild(elementos[i]);
    }


    return [];

}

function obtenerValorElementos(elementos){
    let valores = [];
    for (let i =0; i<elementos.length-1; i++){
        let subelemento = elementos[i]
        valores[i] = Number(subelemento.lastChild.value);
    }
    return valores;
}

function menorEdad(valores){
    let minimo = valores[0]
    for(let i=1;i<valores;i++){
        if(valores[i]<minimo){
            minimo = valores[i];
        }

    }
    return minimo;
}

function mayorEdad(valores){
    let maximo = valores[0]
    for(let i=1;i<valores.length;i++){
        if(valores[i]>maximo){
            maximo = valores[i];
        }

    }
    return maximo;
}

function promedioEdades(valores){
    let sumaTotal=0;
    for(let i = 0;i<valores.length;i++){
        sumaTotal+=valores[i]

    }
    console.log(sumaTotal)
    return (sumaTotal/valores.length).toFixed(2);
    
}


$botonCargar.onclick = function () {
    const inputFamiliares = Number(document.querySelector("#input-cantidad-familiares").value);

    if (inputFamiliares <= 0) {
        alert("Ingrese numeros mayores a 0!")
        return false;
    }


    if (elementos.length > 1) {
        elementos = resetElementos(elementos, $division);
    }

    elementos = crearElementos(inputFamiliares);
    agregarElementos(elementos, $division);


}


$botonReset.onclick = function () {
    elementos = resetElementos(elementos, $division);
    
}



botonCalcular.onclick = function(){

    document.querySelector("#edad-mayor").textContent = `La edad del mayor es:${mayorEdad(obtenerValorElementos(elementos))}`; 
    document.querySelector("#edad-menor").textContent = `La edad del menor es:${menorEdad(obtenerValorElementos(elementos))}`; 
    document.querySelector("#edad-promedio").textContent = `El promedio de edad es:${promedioEdades(obtenerValorElementos(elementos))}`; 
}