//Funciones normales solo en casos necesarios
/*function sumar(a, b){
    return a+b;
}*/
//funciones de flecha
const  sumar = (a,b) => {
    return a+b;
}

//n casos de funciones monolinea se puede hacer esto/Retornos simples como strings unicos
const sumar2 = (a,b) => a+b; 

console.log( sumar(5,10));
console.log( sumar2(5,10));