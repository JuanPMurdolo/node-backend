
const { Router } = require('express');
const { userGet } = require('../controllers/user.controller');
const { userDelete } = require('../controllers/user.controller');
const { userPost } = require('../controllers/user.controller');
const { userPut } = require('../controllers/user.controller');
const { userPatch } = require('../controllers/user.controller');
const { check } = require('express-validator');

const router = Router();

router.get('/', userGet );

router.put('/:id', userPut);

router.post('/', [
    check('correo', 'El correo no es valido').isEmail(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de 6 letras o más').isLength({ min: 6 }),
    check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
], userPost);

router.delete('/', userDelete);

router.patch('/', userPatch);

module.exports = router;