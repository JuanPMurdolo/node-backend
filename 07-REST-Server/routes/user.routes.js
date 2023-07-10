
const { Router } = require('express');
const { userGet } = require('../controllers/user.controller');
const { userDelete } = require('../controllers/user.controller');
const { userPost } = require('../controllers/user.controller');
const { userPut } = require('../controllers/user.controller');
const { userPatch } = require('../controllers/user.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const Role = require('../models/role');
const { esRolValido, emailExiste } = require('../helpers/db-validators');

const router = Router();

router.get('/', userGet );

router.put('/:id', [
check('id', 'No es un ID válido').isMongoId(),

], userPut);

router.post('/', [
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de 6 letras o más').isLength({ min: 6 }),
    //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(esRolValido),        
    validarCampos
], userPost);

router.delete('/', userDelete);

router.patch('/', userPatch);

module.exports = router;