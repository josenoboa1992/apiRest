const {Schema,model}=require('mongoose');

const usuarioShema=Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        
    },

    correo:{
        type:String,
        required:[true,'El correo es obligatorio']
    },

    password:{
        type:String,
        required:[true,'El campo es obligatorio']

    },

    rol:{
        type:String,
        required:[true,'El campo es obligatorio'],
        emun:['ADMIN_ROLE','USER_ROLE']
    },

   estado:{
        type:Boolean,
        default:true
    },

   google:{
        type:Boolean,
        default:false
    },

    
})



usuarioShema.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}


module.exports=model('Usuario',usuarioShema);