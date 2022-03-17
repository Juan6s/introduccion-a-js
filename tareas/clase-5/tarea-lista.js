//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


const $listaOrdenada = document.querySelector("#lista-ordenada").children;
const $listaSinOrden = document.querySelector("#lista-sin-orden").children;
const $textoPromedio = document.querySelector("#texto-promedio");
const $textoMinimo = document.querySelector("#texto-minimo");
const $textoMaximo = document.querySelector("#texto-maximo");
const $textoMasFrecuente = document.querySelector("#texto-mas-frecuente")

let arrayListas = unirListas($listaOrdenada,$listaSinOrden);





$textoPromedio.innerText += calcularPromedioArray(arrayListas).toFixed(2);
$textoMaximo.innerText += maximoArray(arrayListas);
$textoMinimo.innerText += minimoArray(arrayListas);
$textoMasFrecuente.innerText += masFrecuentre(arrayListas);


function unirListas(lista1,lista2){
    const arrayDeElementos=[];

    for(let i=0; i < $listaOrdenada.length; i++){

        arrayDeElementos.push(Number($listaOrdenada[i].innerText));
    
    }
    for(let i=0; i <$listaSinOrden.length; i++){
    
        arrayDeElementos.push(Number($listaSinOrden[i].innerText));
    }
    
    return arrayDeElementos;
}


function calcularPromedioArray(array){
    let sumaTotal=0;
    
    for(let i = 0; i < array.length; i++){
        sumaTotal+= array[i];
    }

    return sumaTotal/array.length;
}

function minimoArray(array){
    let minimo = array[0]

    for (let i = 1; i < array.length; i++){

        if(array[i] < minimo){
        minimo = array[i];
        }
    }

    return minimo;


}

function maximoArray(array){
    let maximo = array[0]

    for (let i = 1; i < array.length; i++){

        if(array[i] > maximo){
        maximo = array[i];
        }
    }

    return maximo;


}

function masFrecuentre(array){
    let maximasRepeticiones=0;
    let numeroMaxRepeticiones;
    for(let i =0; i < array.length; i++){
        
        let contadorRepedito=0;
       
        for(let j=0;j < array.length; j++){
            if(array[i] === array [j] && i != j){
                
                contadorRepedito +=1;

            }
            
            if(contadorRepedito > maximasRepeticiones){
                maximasRepeticiones = contadorRepedito;
                numeroMaxRepeticiones=array[i];

            }

        }
        

    }


    if(maximasRepeticiones != 0){
        return numeroMaxRepeticiones;
    }else{
        return "Ningun numero se repite mas de 1 vez"
    }
    

}