const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
console.log(deadpool.getNombre())
//Wade Winston Regeneracion

//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;
//console.log(nombre, apellido, poder);
//Wade Winston Regeneracion

//const {nombre, apellido, poder} = deadpool;
//console.log(nombre, apellido, poder);
//mismo resultado, diferente codigo

//const {nombre, apellido, poder, edad} = deadpool;
//edad seria undifined

//const {nombre, apellido, poder, edad=0} = deadpool;
//edad seria un 0 porque esta asignado

/*function imprimeHeroe( heroe ){
    const { nombre, apellido, poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool)
Wade Winston Regeneracion 0*/

function imprimeHeroe( { nombre, apellido, poder, edad = 0} ){
    //la diferencia principal es que se pueden cambiar los valores
    //nombre = algo imprimiria algo en lugar de wade
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool)
//Wade Winston Regeneracion 0

//Destructuracion de Arreglos
const heroes = ['Deadpool', 'Superman', 'Batman']

//const h1 = heroes[0]
//const h2 = heroes[1]
//const h3 = heroes[2]
const [h1,h2,h3] = heroes; //Deadpool, Superman, Batman
//const [ , , h3] = heroes; //null, null, Batman

console.log(h1,h2,h3)