const { response } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');


const userGet = (req = request, res = response) => {
    const { q, name = '', apikey, page = 1, limit} = req.query;

    res.json({
        "msg": "get API - controller",
    });
}

const userDelete = (req, res = response) => {
    res.json({
        "msg": "delete API - controller"
    });
}

const userPost = async(req, res = response) => {
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario( { nombre, correo, password, rol } );
    
    //Encriptar la contraseña
    const salt = bcrypt.genSaltSync()
    usuario.password = await bcrypt.hashSync(password, salt);

    //Guardar en BD
    await usuario.save();

    res.json({
        "msg": "post API - controller",
        usuario
    });
}

const userPut = async (req, res = response) => {
    const {id} = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    //TODO validar contra base de datos
    if (password) {
        //Encriptar la contraseña
        const salt = bcrypt.genSaltSync()
        resto.password = bcrypt.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    

    res.json({
        "msg": "put API - controller",
        usuario 
    });
}

const userPatch = (req, res = response) => {
    res.json({
        "msg": "patch API - controller"
    });
}

module.exports = {
    userDelete,
    userGet,
    userPatch,
    userPost,
    userPut
}