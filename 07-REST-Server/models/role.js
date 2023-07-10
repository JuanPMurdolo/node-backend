const { Schema, model } = require('mongoose');


const RoleSchema = Schema({
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio'] // El segundo argumento es el mensaje de error
    }
});

module.exports = model('Role', RoleSchema); // Exportamos el modelo con el nombre 'Role' y el esquema RoleSchema