let num1 = Number(prompt("Ingrese un número"))
let num2 = Number(prompt("Ingrese otro número"))

if(num1 == num2){
    console.error(`El número ${num1} es igual a ${num2}, inténtelo nuevamente`);
}else{
    if(num1 > num2){
        console.log(`El número ${num1} es mayor a ${num2}`);
    }else if(num1 < num2){
        console.log(`El número ${num2} es mayor a ${num1}`);
    }
}