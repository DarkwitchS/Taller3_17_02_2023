let N;
let mensaje = "El número ingresado ";
let sumaD = 0;
let sumaMensaje = ``;
N = Number(prompt("Ingrese un número"));

for(let i = 1; i < N; i++){
    
    if(N % i == 0){
        sumaD += i;
        sumaMensaje += `${i} + `
    }  

}

sumaMensaje = sumaMensaje.slice(0, -2);

if(sumaD == N){
    alert(`El número ${N} es perfecto.\nLa suma de sus divisores es : ${sumaMensaje} = ${sumaD} `);
}else{
    alert(`El número ${N} no es perfecto`)
}