const jwt=require('jsonwebtoken');



const generarJWT=(ui='')=>{

    const playload={ui};

    return new Promise((resolve,reject)=>{
        jwt.sign(playload,process.env.SECRETORPRIVATEKEY,{
            expiresIn:'4h'
        },(err,token)=>{
           
            if (err) {
                reject('No se genero el token');
            }else{
                resolve(token);
            }
        })
    })

}

module.exports={
    generarJWT
}