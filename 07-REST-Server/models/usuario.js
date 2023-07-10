const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'] // El segundo argumento es el mensaje de error
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true // No se pueden repetir correos
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String // No es obligatoria
    },
    rol: {
        type: String,
        required: true,
        //enum: ['ADMIN_ROLE', 'USER_ROLE'] // Solo puede ser uno de estos dos valores
    },
    estado: {
        type: Boolean,
        default: true // Valor por defecto
    },
    google: {
        type: Boolean,
        default: false // Valor por defecto
    }
});

UsuarioSchema.methods.toJSON = function() {
    const { __v, password, _id, ...usuario } = this.toObject(); // Extraemos la versión, la contraseña y el id del objeto usuario
    return usuario;
}

module.exports = model('Usuario', UsuarioSchema); // Exportamos el modelo con el nombre 'Usuario' y el esquema UsuarioSchema