const { response } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const userGet = (req = request, res = response) => {
    const { q, name = '', apikey, page = 1, limit} = req.query;

    res.json({
        "msg": "get API - controller",
        q,
        name,
        apikey,
        page,
        limit
    });
}

const userDelete = (req, res = response) => {
    res.json({
        "msg": "delete API - controller"
    });
}

const userPost = async(req, res = response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }


    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario( { nombre, correo, password, rol } );

    //Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        return res.status(400).json({
            msg: 'El correo ya está registrado'
        });
    }
    

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

const userPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        "msg": "put API - controller",
        id 
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