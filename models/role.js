const {Schema,model}=require('mongoose');

const roleShema =Schema({
    rol:{
        type:String,
        require:[true,'Es obligatorio']
    }
})

module.exports=model('Role',roleShema);