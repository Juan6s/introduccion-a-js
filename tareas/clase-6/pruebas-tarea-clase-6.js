console.log("Pruebas se estan ejecutando")
function probarObtenerMayorEdad(){
    console.assert(
        obtenerMayorEdad([1,10])===10, "obtener mayor edad valido incorrectamente el mayor numero"
    )


}
function probarObtenerMenorEdad(){
    console.assert(
        ObtenerMenorEdad([1,2,3])===1, "obtener menor edad valido incorrectamente el menor numero"
    )


}

function probarObtenerPromedioEdades(){
    console.assert(
        obtenerPromedioEdades([1,3])===2, "obtener promedio edad valido incorrectamente el promedio "
    )


}

probarObtenerMayorEdad();
probarObtenerMenorEdad();
probarObtenerPromedioEdades();