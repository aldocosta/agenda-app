'use strict'

module.exports = function(app){
    const HomeController = {
        login: (req, res) =>{
            let crypto = app.config.cryptografia
            crypto.criptografar('aldo').
            then((data)=>{
                res.status(200).json({a:data})
            })            
        },
        logar: (req,res)=>{
            let User = app.server.models.user
            
            let enc = User.decrypt(req.body.password).then
            ((isOk)=>{
                if(isOk){
                    res.status(200).json({isOk:isOk})
                }else{
                    res.status(404).json({isOk:false})
                }
            })
        },
        cadastrar: (req, res) =>{
            let User = app.server.models.user
                
            let user = new User()
            user.email = req.body.email
            User.encrypt(req.body.password).then((enc)=>{
                user.password = enc         
                user.save().then(data => {
                    res.status(200).json({id:data._id})
                }).catch((err) =>{
                    res.status(404).json({error:err})
                })               
            })            
        }
    }

    return HomeController;
}