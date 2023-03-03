
const express = require('express');
const { GetAllUser, GetOneUser, CreateUser, UpdateUser } = require('../controllers/user.controller');
const router = express.Router();


router.get('/', GetAllUser);
router.get('/:id', GetOneUser);
router.post('/', CreateUser);
router.put('/', UpdateUser);


module.exports = router;