let continuar = true;
let numPar = 0;
let numImpar = 1;
let numActual;
let mensajeSuma = "Los números pares ingresados son: ";
let mensajeMultip = "Los números impares ingresados son: ";

while(continuar){
    numActual = Number(prompt("Ingrese un número"));

    if(numActual % 2 == 0){
        numPar += numActual;
        mensajeSuma += `, ${numActual} `
    }else{
        numImpar = numImpar * numActual;
        mensajeMultip += `, ${numActual} `
    }
    continuar = Number(prompt("Si desea continuar presione 1, si no, presione 0"));
}

alert(`${mensajeSuma} y su suma es = ${numPar}.\n${mensajeMultip} y su multiplicación es = ${numImpar}`);