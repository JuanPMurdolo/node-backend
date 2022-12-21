//Una funcion que se ejecuta despues en un plazo de tiempo

setTimeout( funcion, tiempoDeRetraso);
//Ejecuta un callback 

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Francisco'
    }

    setTimeout( () => {callback(usuario)}, 1500)
}

getUsuarioById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});

