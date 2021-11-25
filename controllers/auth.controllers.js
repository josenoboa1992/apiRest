

const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helpers/generar-jwt");
const Usuario = require("../models/usuario");
const login=async(req,res)=>{

const {correo,password}=req.body;

 try {
//validar email si existe
const usuario=await Usuario.findOne({correo})

if (!usuario) {
    res.status(400).json({
        msj:'El correo/contraseña no son validos - correo'
    })
}

//si el estado del usuario
if (!usuario.estado) {
    res.status(400).json({
        msj:'El correo/contraseña no son validos - estado falso '
    })
}


//comparar la password
const validapas=bcryptjs.compareSync(password,usuario.password);
if (!validapas) {
    res.status(400).json({
        msj:'El correo/contraseña no son validos - contraseña '
    })
}



//generar jwt
const token=await generarJWT(usuario.id);


   res.status(200).json({
      usuario,
      token
    })
     
 } catch (error) {
     
 }

 
}




module.exports={
    login
}