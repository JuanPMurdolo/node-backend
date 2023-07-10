
const { Router } = require('express');
const { userGet } = require('../controllers/user.controller');
const { userDelete } = require('../controllers/user.controller');
const { userPost } = require('../controllers/user.controller');
const { userPut } = require('../controllers/user.controller');
const { userPatch } = require('../controllers/user.controller');

const router = Router();

router.get('/', userGet );

router.put('/:id', userPut);

router.post('/', userPost);

router.delete('/', userDelete);

router.patch('/', userPatch);

module.exports = router;