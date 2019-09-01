'use strict'

module.exports = function(app){
    let mongoose = app.server.config.db

    require('dotenv').config()
    
    const userSchema = new mongoose.Schema({
        email: {type: String, required :true},
        password: {type: String, required :true}
    })
    
    return mongoose.model('User', userSchema)
}