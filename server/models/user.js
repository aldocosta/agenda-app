'use strict'
const crypto = require('../config/cryptografia')

module.exports = function(app){
    let mongoose = app.server.config.db

    require('dotenv').config()
    
    const userSchema = new mongoose.Schema({
        email: {type: String, required :true},
        password: {type: String, required :true}
    })

    userSchema.statics.encrypt = (val)=>{
        return crypto.criptografar(val).then()        
    }

    userSchema.statics.decrypt = (val)=>{
       return  crypto.criptografar(val)
        .then((data)=>{
            return crypto.verificarCripto(data, val).
            then()
        })
                      
    }
    
    return mongoose.model('User', userSchema)
}