const express=require('express');
const cors=require('cors');
const { dataconection } = require('../database/conectiondata');
require('dotenv').config();


class Servidor{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.middleware(); 
        
        //rutas
        this.usuarios='/api/usuario';
        this.login='/api/auth';
       
        this.routes();
        
        

        this.basededatos();
        


    }

    middleware(){
       
        this.app.use(cors())
        this.app.use(express.static('public'))

        this.app.use(express.json());
    
    }
    

    async basededatos(){
        await dataconection();
    }

    routes(){

        this.app.use(this.usuarios,require('../routes/usuario'))
        this.app.use(this.login,require('../routes/login'))
    }

    listen(){

        this.app.listen(this.port,()=>{
            console.log(`Este servidor esta corriendo en la ruta ${this.port}`)
        })

    }
}

module.exports=Servidor;