
const mongoose=require('mongoose');

const dataconection=async()=>{

    try {
        
        await mongoose.connect(process.env.MONGOOSE_DB);
        console.log('base de datos online');
    } catch (error) {

        throw error('Error en la base de datos');
        
    }
}


module.exports={
    dataconection
}