const {Router}=require('express');
const router=Router();
const { check } = require('express-validator');

const { login } = require('../controllers/auth.controllers');
const { validarDatos } = require('../middlewares/validatator');



router.post('/login',
[
    check('correo','El correo no es valido').isEmail(),
    check('password','la contraseña no es valida').isLength({min:6})
    ,validarDatos
]

,login);







module.exports=router;