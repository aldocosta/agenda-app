const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function(app){
    let Token = {
        sign:(payload)=>{
            let p = new Promise((f,r)=>{
                jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + ((60 * 60)*6),
                    data: payload
                  }, process.env.SECRET,(err, token)=>{
                      if(err) r(err)
                      f(token)
                  })
            })
            return p
        }
    }

    return Token
}