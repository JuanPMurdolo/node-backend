const empleados = [
    {id : 1,
    nombre : 'Juan'},
    {id: 2,
    nombre : 'Karen'},
    {id:3,
    nombre : 'Juki'},
];

const salarios = [
    { 
        id: 1,
        salario: 1500
    },
    {
        id:2,
        salario: 2000
    },
    {
        id:3,
        salario: 3000
    },
];
const getEmpleado = (id) =>{
    return new Promise ((resolve, reject) =>{
    const empleado = empleados.find(e => e.id === id)?.nombre;
        ( empleado )
            ? resolve(empleado)
            : reject(`No existe empleado con ${id}`);
    });
}

const getSalario = (id) => {
    return new Promise ((resolve, reject) =>{
    const salario = salarios.find(e => e.id === id)?.salario;
    (salario)
    ? resolve (salario)
    : reject(`No existe salario para el empleado con id ${id}`)
    })
}
const id = 1;
/*
getEmpleado(id)
.then(empleado => console.log(empleado))
.catch(err => console.log(err));

getSalario(id)
.then(salario => console.log(salario))
.catch(err => console.log(err))
*/
//Promesas en cadena
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then( salario => console.log( `El empleado con  el nombre ${nombre} tiene un salario de ${salario}`))
    .catch (err => console.log(err));