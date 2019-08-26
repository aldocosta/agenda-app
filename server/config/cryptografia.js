'use strict'
const bcrypt = require('bcrypt')

module.exports = {
    criptografar:(key)=>{
        return bcrypt.hash(key, 10)
    },
    verificarCripto: (hash,key) =>{
        return bcrypt.compare(key, hash)
    }
}                 