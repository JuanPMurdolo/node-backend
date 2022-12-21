
//VAR
//var nombre = 'Wolverine';
//LET
let nombre = 'Wolverine';
//Constantes
//const nombre = 'Wolverine';

if (true){
    let nombre = 'Magneto';
    //como esta dentro del scope del if va a imprimir magneto
    console.log(nombre);
}

console.log(nombre);

//No utilizar VAR si el valor va a cambiar usar let y si no usar const
//las constantes son mas ligeras y mejoran mucho la performance