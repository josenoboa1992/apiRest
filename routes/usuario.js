const {Router}=require('express');
const { check } = require('express-validator');
const { validarDatos } = require('../middlewares/validatator');
const { postUsuario, getUsuario, putUsuario, pathUsuario, deleteUsuario } = require('../controllers/usuario.controllers');
const { correoExiste, validationRol } = require('../helpers/helpers');


const router=Router();

router.get('/',getUsuario);
router.post('/',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('correo','El correo no es valido').isEmail(),
    check('correo').custom(correoExiste),
    check('password','la contraseña debe de tener minimo 6 caracteres').isLength({min:5}),
    check('rol').custom(validationRol),
        validarDatos
],postUsuario);
router.put('/',putUsuario);
router.patch('/',pathUsuario);
router.delete('/',deleteUsuario);



module.exports=router;