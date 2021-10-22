const express=require('express');
const cors=require('cors');
const { dataconection } = require('../database/conectiondata');
require('dotenv').config();


class Servidor{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.middleware();
        this.routes();

        this.basededatos();
        


    }

    middleware(){
       
        this.app.use(cors())

        this.app.use(express.json());
    
    }
    

    async basededatos(){
        await dataconection();
    }

    routes(){

        this.app.use('/api/usuario',require('../routes/usuario'))
    }

    listen(){

        this.app.listen(this.port,()=>{
            console.log(`Este servidor esta corriendo en la ruta ${this.port}`)
        })

    }
}

module.exports=Servidor;