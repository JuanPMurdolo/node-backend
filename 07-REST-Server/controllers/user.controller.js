const { response } = require('express');

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

const userPost = (req, res = response) => {
    const { name, age } = req.body;

    res.json({
        "msg": "post API - controller",
        name,
        age
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