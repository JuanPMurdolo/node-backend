const inquirer = require('inquirer');
require('colors');



const questions =[
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.blue} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.blue} Historial`
            },
            {
                value: 0,
                name: `${'0.'.blue} Salir`
            }
        ]
    }
];


const inquirerMenu = async() => {
    console.clear();
    console.log('============================='.green);
    console.log('   Seleccione una opcion   '.white);
    console.log('=============================\n'.green);
    const {opcion} = await inquirer.prompt(questions);
    return opcion;
}

const inquirerPausa = async() => {
    console.log('\n');
    const {op} = await inquirer.prompt([{        
    type: 'input',
    name: 'pausa',
    message: `\nOprima ${'Enter'.green} para continuar...\n`}
    ]);
}

const leerInput = async (message) =>{
    const preguntas = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0){
                    return 'Por favor ingrese un  valor';
                }
                return true;
            }
        }
    ]

    const {desc} = await inquirer.prompt(preguntas);
    return desc;
}

const listarLugares = async(lugares = []) =>{
    const choices = lugares.map((lugar , i)=> {
        const idx = `${i+1}`.green;
        return {
            value: lugar.id,
            name: `${idx} ${lugar.nombre}`
        }
    });

    choices.unshift(
        {
            value: '0',
            name: '0. '.green + 'Cancelar'
        }
    )

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices
        }
    ]

    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoChecklist = async(tareas = []) =>{
    const choices = tareas.map((tarea , i)=> {

        const idx = `${i+1}`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Borrar',
            choices
        }
    ]

    const {ids} = await inquirer.prompt(preguntas);
    return ids;
}

module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoChecklist
}