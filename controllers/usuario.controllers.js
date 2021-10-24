const bcryptjs = require("bcryptjs");
const { response } = require("express");
const usuario = require("../models/usuario");
const Usuario = require("../models/usuario");
// const Usuario = require("../models/usuario")

const getUsuario=(req,res)=>{
    res.status(200).json({
        msj:"hola mundo"
    })
};

const postUsuario=async(req,res=response)=>{
    const {nombre,correo,password,rol}=req.body;
    const usuario = new Usuario({nombre,correo,password,rol})



    //incriptar contraseña
    const salt=bcryptjs.genSaltSync();
    usuario.password=bcryptjs.hashSync(password,salt);

    //validar
    // const existeCorreo=await Usuario.findOne({correo});
    // if (existeCorreo) {
    //     return res.status(400).json({
    //         msj:'el correo existe'
    //     })
    // }

    await usuario.save();
    
        
    res.json({
usuario 
    })
}

const putUsuario=async(req,res)=>{   
 
    const {password,google,correo, ...resto}=req.body;

    const {id}=req.params;


    //Validar contra base de datos
    if (password) {
        
        const salt=bcryptjs.genSaltSync();
        resto.password=bcryptjs.hashSync(password,salt)
    }

    //validart por id
    const  usuariodb= await usuario.findByIdAndUpdate(id,resto);


    res.json({
        msj:"hola mundo",
      usuariodb
    })
}

const pathUsuario=(req,res)=>{
    res.status(200).json({
        msj:"hola mundo"
    })
}

const deleteUsuario=(req,res)=>{
    res.status(200).json({
        msj:"hola mundo"
    })
}

module.exports={
    getUsuario,
    postUsuario,
    putUsuario,
    pathUsuario,
    deleteUsuario
}