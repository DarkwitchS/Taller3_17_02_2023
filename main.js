let continuar = true;
let numMayor = 0 
let numActual;
let mensaje = "Los números ingresados son: ";

while(continuar){
    numActual = Number(prompt("Ingrese un número"));

    if(numActual>numMayor){
        numMayor = numActual;
    }
    mensaje += `, ${numActual}`
    continuar = Number(prompt("Si desea continuar presione 1, si no, presione 0"));
}

alert(`${mensaje}.\nEl número mayor fue ${numMayor}`);



