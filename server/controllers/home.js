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
            
            User.findOne({email:req.body.email},function(err, user)
            {
               if(err) res.status(500).json({error:err})
               if(user){ 
                   User.decrypt(user.password,req.body.password)
                   .then((data)=>{
                    if(data===true){
                        res.status(200).json(true)
                    }
                    else{
                        res.status(404).json(false)
                    }
                   })                
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