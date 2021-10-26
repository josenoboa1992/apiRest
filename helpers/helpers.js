const role = require("../models/role");
const usuario = require("../models/usuario")




const validationRol= async(rol='')=>{
    const existeRol= await role.findOne({rol});

    if (!existeRol) {
        throw new Error(` El ${rol} no existe en la base de datos`);
    }
}

const correoExiste=async(correo='')=>{

    const existeEmail=await usuario.findOne({correo});

    if (existeEmail) {
        throw new Error(`el correo ${correo} ya esta`);
        
    }

}
 
const validarId=async(id)=>{

    const idexiste=await usuario.findById(id);

    if (!idexiste) {
        throw new Error(`El id: ${id} no existe en la base de datos`)
        
    }
}

module.exports={
    correoExiste,
    validationRol,
    validarId
}