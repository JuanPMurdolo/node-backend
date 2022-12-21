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


const getInfoUsuario = async() => {
    try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return  `el salario del empleado ${empleado} es de ${salario}`

} catch (error) {
    return error;
}}

const id = 1;
getInfoUsuario()
    .then( msg => console.log(msg))
    .catch (err => console.log(err));
