require('colors');
const { inquirerMenu, 
    inquirerPausa,
leerInput,
listadoTareasBorrar,
confirmar,
mostrarListadoChecklist } 
= require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo')


const main = async() => {

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    
    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
        console.log(tareas)
    }
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto();
            break

            case '3':
                tareas.listarPendientesCompletadas(true);
            break

            case '4':
                tareas.listarPendientesCompletadas(false);
            break

            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break

            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if (id !== '0'){
                const confirmacion = await confirmar('Estas seguro de borrar esa tarea?');
                if (confirmacion === true){
                    tareas.borrarTareas(id);
                    console.log('Tarea borrada con exito');
                }}
            break
        }

        guardarDB(tareas.listadoArr);

        await inquirerPausa();

    } while ( opt !== '0');
    
    
    
    //pausa();
}

main()