const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function(app){
    let Token = {
        sign:(payload)=>{
            let p = new Promise((f,r)=>{
                jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + ((112)),//Math.floor(Date.now() / 1000) + ((60 * 60)),
                    data: payload
                  }, process.env.SECRET,(err, token)=>{
                      if(err) r(err)
                      f(token)
                  })
            })
            return p
        },
        checkToken:(token)=>{
            let p = new Promise((f,r)=>{
                jwt.verify(token,process.env.SECRET,(err, decoded)=>{
                    console.log(err)
                    if(err) return r(err)
                    console.log(decoded)
                    return f(decoded)
                })
            })
          return p
        }
    }

    return Token
}