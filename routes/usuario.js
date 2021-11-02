const {Router}=require('express');
const { check } = require('express-validator');
const { validarDatos } = require('../middlewares/validatator');
const { postUsuario, getUsuario, putUsuario, pathUsuario, deleteUsuario } = require('../controllers/usuario.controllers');
const { correoExiste, validationRol, validarId } = require('../helpers/helpers');


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
router.put('/:id',[
    check('id','este mongo es fake').isMongoId(),
    check('rol').custom(validationRol),
    check('id').custom(validarId),
    validarDatos
],putUsuario);
router.patch('/',pathUsuario);
router.delete('/:id',deleteUsuario);



module.exports=router;