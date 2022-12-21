//Callback Hell
const empleados = [
    {id : 1,
    nombre: 'Juan'},
    {id: 2,
    nombre: 'Karen'},
    {id:3,
    nombre: 'Juki'},
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

const getEmpleado = (id , callback) => {
    const empleado = empleados.find((e) => e.id === id)
    if (empleado){
        callback(null, empleado);
    } else{
        return `Empleado con id ${id} no existe`
    }
}

const getSalario = (id, callback) =>{
    const salario = salarios.find((s) => s.id ===id)?.salario;
    if (salario){
        callback(null, salario);
    } else{
        return `Salario para el empleado con id ${id} no existe`
    }
}


console.log(getEmpleado(1, (err, empleado ) => {
    if (err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado existe')   
    console.log(empleado.nombre);

}));

console.log(getSalario(1, (err, salario) => {
    if (err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Salario existe')
    console.log(salario)
}))